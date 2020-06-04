
let fs = require("fs");
let path = require("path");
function checkWetherFile(src){
    return fs.lstatSync(src).isFile();
}
function getContent(src){
    return fs.readdirSync(src);
}
function view(src,toprint){
   if(checkWetherFile(src) == true){
    //    let name = path.basename(src);
       console.log(toprint+" *");
   }else{
       console.log(toprint);
       let childNames = getContent(src);
       for(let i=0;i<childNames.length;i++){
           let childPath = path.join(src,childNames[i]);
           toprint = path.join(toprint,childNames[i]);
           view(childPath,toprint);
       }
   }

}
let src = process.argv[2];
let toprint = path.basename(src);
view(src,toprint);