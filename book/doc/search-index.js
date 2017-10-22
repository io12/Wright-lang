var searchIndex = {};
searchIndex["wright"] = {"doc":"","items":[[0,"lexer","wright","",null,null],[3,"LexResult","wright::lexer","",null,null],[5,"lex_vec_numbered_line","","",null,{"inputs":[{"name":"vec"}],"output":null}],[0,"preproc","wright","",null,null],[3,"NumberedLine","wright::preproc","`NumberedLine`s are the returned type of the preprocessor. They have all comments removed based on the profile used. Numbering for the `line_number` field stars at 1.",null,null],[12,"line_number","","",0,null],[12,"line","","",0,null],[5,"preproc","","",null,{"inputs":[{"name":"string"}],"output":{"name":"vec"}}],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",0,{"inputs":[{"name":"self"}],"output":{"name":"numberedline"}}],[11,"new","","",0,{"inputs":[{"name":"string"},{"name":"u64"}],"output":{"name":"numberedline"}}],[11,"new_empty","","",0,{"inputs":[{"name":"u64"}],"output":{"name":"numberedline"}}],[0,"parser","wright","",null,null],[3,"Parser","wright::parser","",null,null],[3,"Type","","",null,null],[4,"BinaryOpTypes","","",null,null],[13,"Addition","","",1,null],[13,"Subtraction","","",1,null],[13,"Multiplication","","",1,null],[13,"Division","","",1,null],[13,"Modulo","","",1,null],[13,"Increment","","",1,null],[13,"Decrement","","",1,null],[13,"IsEq","","",1,null],[13,"IsNotEq","","",1,null],[13,"IsGE","","",1,null],[13,"IsLE","","",1,null],[13,"Greater","","",1,null],[13,"Less","","",1,null],[13,"And","","",1,null],[13,"Or","","",1,null],[13,"Xor","","",1,null],[4,"UnaryOpTypes","","",null,null],[13,"Negation","","",2,null],[13,"Not","","",2,null],[4,"Expr","","",null,null],[13,"Literal","","",3,null],[13,"Id","","",3,null],[13,"BinaryOp","","",3,null],[13,"UnaryOp","","",3,null],[13,"FunctionCall","","",3,null],[4,"Stmnt","","",null,null],[13,"VarDec","","",4,null],[13,"Assign","","",4,null],[11,"fmt","","",5,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",5,{"inputs":[{"name":"self"}],"output":{"name":"type"}}],[11,"fmt","","",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",1,{"inputs":[{"name":"self"}],"output":{"name":"binaryoptypes"}}],[11,"fmt","","",2,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",2,{"inputs":[{"name":"self"}],"output":{"name":"unaryoptypes"}}],[11,"fmt","","",3,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",3,{"inputs":[{"name":"self"}],"output":{"name":"expr"}}],[11,"fmt","","",4,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",4,{"inputs":[{"name":"self"}],"output":{"name":"stmnt"}}],[11,"new","","",6,{"inputs":[],"output":{"name":"parser"}}],[0,"argparser","wright","The command line argument parser for Wright",null,null],[3,"CourseOfAction","wright::argparser","Determines the course of action for the wright interpreter to take, whether that's reading a file and evaluating its contents or reading from standard input.",null,null],[12,"input","","",7,null],[12,"file","","",7,null],[4,"InputMode","","Two possible input modes: `File` for interpreting and running wright files and `Interactive` for running wright in interactive mode",null,null],[13,"File","","",8,null],[13,"Interactive","","",8,null],[5,"argparse","","Parse arguments passed to the wright command. Files must end with a `.wright` or `.wr` extension. Returns `None` if there is no action to take after parsing arguments. Otherwise, it will return `Some(n)` where `n` is a `CourseOfAction` to be taken. Defaults to interactive \"REPL\" input when there is not a file argument. Otherwise wright will interpret the file.",null,{"inputs":[{"name":"args"}],"output":{"name":"option"}}],[5,"version","","Prints version string for wright. Should be identical to cargo version information.",null,{"inputs":[],"output":null}],[5,"help","","Prints help information for wright",null,{"inputs":[],"output":null}],[11,"fmt","","",7,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",8,{"inputs":[{"name":"self"},{"name":"inputmode"}],"output":{"name":"bool"}}],[11,"fmt","","",8,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[0,"run","wright","",null,null],[5,"interactive","wright::run","",null,{"inputs":[],"output":{"name":"i32"}}],[5,"interpret","","",null,{"inputs":[{"name":"string"}],"output":{"name":"i32"}}],[0,"version","wright","",null,null],[5,"get_version","wright::version","`get_version()` returns Wright's version as a string. This should be identical to its version in cargo.",null,{"inputs":[],"output":{"name":"string"}}],[17,"VERSION","","`VERSION` const is a version constant in the form of a `&'static str`",null,null],[0,"errors","wright","",null,null],[4,"WrightErrorLevels","wright::errors","",null,null],[13,"Warning","","",9,null],[13,"Fatal","","",9,null],[13,"Compiler","","",9,null],[8,"WrightError","","",null,null],[10,"new","","",10,{"inputs":[{"name":"string"},{"name":"wrighterrorlevels"}],"output":{"name":"self"}}],[10,"get_info","","",10,{"inputs":[{"name":"self"}],"output":{"name":"string"}}],[10,"get_type","","",10,{"inputs":[{"name":"self"}],"output":{"name":"string"}}],[10,"get_level","","",10,{"inputs":[{"name":"self"}],"output":{"name":"wrighterrorlevels"}}],[11,"panic","","",10,{"inputs":[{"name":"self"}],"output":{"name":"i32"}}],[11,"fmt","","",9,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",9,{"inputs":[{"name":"self"}],"output":{"name":"wrighterrorlevels"}}]],"paths":[[3,"NumberedLine"],[4,"BinaryOpTypes"],[4,"UnaryOpTypes"],[4,"Expr"],[4,"Stmnt"],[3,"Type"],[3,"Parser"],[3,"CourseOfAction"],[4,"InputMode"],[4,"WrightErrorLevels"],[8,"WrightError"]]};
initSearch(searchIndex);