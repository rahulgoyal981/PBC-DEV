let fs = require("fs");
let path = require("path");

module.exports.view = function () {
    let src = arguments[0];
    let mode = arguments[1];
    if(mode == "-t"){
        viewAsTree(src,"");
    }else{
        viewAsFlatFiles(src,path.basename(src));
    }
}

function checkWetherFile(src){
    return fs.lstatSync(src).isFile();
}
function getContent(src){
    return fs.readdirSync(src);
}
function viewAsFlatFiles(src,toprint){
   if(checkWetherFile(src) == true){
    //    let name = path.basename(src);
       console.log(toprint+" *");
   }else{
       console.log(toprint);
       let childNames = getContent(src);
       for(let i=0;i<childNames.length;i++){
           let childPath = path.join(src,childNames[i]);
           toprint = path.join(toprint,childNames[i]);
           viewAsFlatFiles(childPath,toprint);
       }
   }
}
   function viewAsTree(src,indent){
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
         viewAsTree(childPath,indent+"__");
        }
    }
 }