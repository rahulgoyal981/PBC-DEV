let request = require("request");
let fs = require("fs");
console.log("sending request");
let url = "https://www.espncricinfo.com/scores/series/19322/india-in-new-zealand-2019-20?view=results"
function cb(err,response,html){
    console.log(url,cb);
    if(err == null && response.statusCode == 200){
       fs.writeFileSync("index.html",html);
       console.log("file saved");
    }else if(response.statusCode == 400){
      console.log("Page Not Found");
    }else{
        console.log(err);
        console.log(response.statusCode);
    }
}
