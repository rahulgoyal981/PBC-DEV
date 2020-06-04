
let fs = require("fs");
let path = require("path");
function checkWetherFile(src){
    return fs.lstatSync(src).isFile();
}
function getContent(src){
    return fs.readdirSync(src);
}
function treefy(src,indent){
   if(checkWetherFile(src) == true){
       console.log(indent+path.basename(src)+" *");
    //    tospace += " ";
   }else{
       console.log(indent+path.basename(src));
       let childNames = getContent(src);
    //    tospace += " ";
       for(let i=0;i<childNames.length;i++){
           let childPath = path.join(src,childNames[i]);  
        //    toprint = childNames[i];
           treefy(childPath,indent+" >");
       }
   }

}
let src = process.argv[2];
// let toprint = path.basename(src);
// let tospace = "";
treefy(src,"");