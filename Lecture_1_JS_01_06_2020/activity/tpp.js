let input = process.argv.slice(2);
let viewfile = require("./commands/view");
let untreefyFile = require("./commands/untreefy");
let treefyFile = require("./commands/treefy");
// console.log(input);
let cmd = input[0];
switch (cmd) {
    case "view":
        viewfile.view(process.argv[3], process.argv[4]);
        break;
    case "treefy":
        treefyFile.treefy(process.argv[3],process.argv[4]);
        break;
    case "untreefy":
        untreefyFile.untreefyFn(process.argv[3], process.argv[4]);
        break;
    case "help":
        console.log("Help Command Implemented");
        break;
    default:
        console.log("Work Command");
        break;
}