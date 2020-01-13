use nom::{
    sequence::{
        preceded,
        pair,
    },
    bytes::complete::{
        tag,
        take_while1,
        take_while_m_n
    },
    branch::alt,
    combinator::{
        map_res,
        map,
        peek
    },
    IResult,
};

use crate::grammar::{
    model::Fragment,
    ast::NumLit,
};

use std::num::ParseIntError;
use nom::bytes::complete::is_a;
use nom::combinator::recognize;

impl<'s> NumLit<'s> {
    fn new(frag: Fragment<'s>, num: u128) -> Self {
        Self {frag, inner: num}
    }

    fn from_hex(input: &str) -> Result<u128, std::num::ParseIntError> {
        u128::from_str_radix(input, 16)
    }

    fn from_dec(input: &str) -> Result<u128, std::num::ParseIntError> {
        u128::from_str_radix(input, 10)
    }

    fn from_bin(input: &str) -> Result<u128, std::num::ParseIntError> {
        u128::from_str_radix(input, 2)
    }

    fn clear_underscores(input: &str) -> String {
        input.replace("_", "")
    }

    fn hex_primary(input: Fragment) -> IResult<Fragment, u128> {
        map_res(
            preceded(
                tag("0x"),
                preceded(
                    peek(take_while_m_n(1,1, |c: char| c.is_ascii_hexdigit())),
                    take_while1(|c: char| c.is_ascii_hexdigit() || c == '_')
                )
            ),
            |frag: Fragment| -> Result<u128, ParseIntError> {
                let mut s = String::from(frag.source());
                s = Self::clear_underscores(&s);
                Self::from_hex(&s)
            }
        )(input)
    }

    fn bin_primary(input: Fragment) -> IResult<Fragment, u128> {
        map_res(
            preceded(
                tag("0b"),
                preceded(
                    peek(take_while_m_n(1,1, |c: char| c == '1' || c == '0')),
                    is_a("10_")
                )
            ),
            |frag: Fragment| -> Result<u128, ParseIntError> {
                let mut s = String::from(frag.source());
                s = Self::clear_underscores(&s);
                Self::from_bin(&s)
            }
        )(input)
    }

    fn dec_primary(input: Fragment) -> IResult<Fragment, u128> {
        map_res(
            preceded(
                peek(take_while_m_n(1,1, |c: char| c.is_ascii_digit())),
                take_while1(|c: char| c.is_ascii_digit() || c == '_')
            ),
            |frag: Fragment| -> Result<u128, ParseIntError> {
                let mut s = String::from(frag.source());
                s = Self::clear_underscores(&s);
                Self::from_dec(&s)
            }
        )(input)
    }

    /// Parse a numerical literal to a value.
    pub fn parse(input: Fragment<'s>) -> IResult<Fragment<'s>, Self> {
        let constructor = |(frag, val)| Self::new(frag, val);

        alt((
            map(
                pair(recognize(Self::dec_primary), Self::dec_primary), constructor
            ),
            map(
                pair(recognize(Self::bin_primary), Self::bin_primary), constructor
            ),
            map(
                pair(recognize(Self::hex_primary), Self::hex_primary), constructor
            ),
        ))(input)
    }
}