let uniqid = require("uniqid");

let fs = require("fs");
let path = require("path");

module.exports.untreefyFn = function () {
    let src = arguments[0];
    let dest = arguments[1];
    let root = {};
    untreefy(src, dest, root);
    // console.log(root);
    fs.writeFileSync(path.join(dest, "metadata.json"), JSON.stringify(root));
}

function checkWhetherFile(src) {
    return fs.lstatSync(src).isFile();
}
function getContent(src) {
    return fs.readdirSync(src);
}

function untreefy(src, dest, obj) {
    // checkwhether file or directory
    if (checkWhetherFile(src) == true) {
        // console.log(toprint + " *");
        // copy with newname

        let oldName = path.basename(src);
        let newName = uniqid();
        let destPath = path.join(dest, newName);

        obj.isFile = true;
        obj.oldName = oldName;
        obj.newName = newName;

        fs.copyFileSync(src, destPath);
        console.log(`File ${oldName} from src copied to ${destPath}`);
    } else {
        // directory 
        // print
        // console.log(toprint);
        // get childrens
        obj.isFile = false;
        obj.name = path.basename(src);
        let childNames = getContent(src);
        // console.log(childNames);
        obj.children = [];
        for (let i = 0; i < childNames.length; i++) {
            let childPath = path.join(src, childNames[i]);
            // let cToprint = path.join(toprint, childNames[i]);
            let chobj = {};
            untreefy(childPath, dest, chobj);
            obj.children.push(chobj);
        }
    }
}
// let src = process.argv[2];
// let dest = process.argv[3];
// let root = {};
// untreefy(src, dest,root);
// console.log(root);