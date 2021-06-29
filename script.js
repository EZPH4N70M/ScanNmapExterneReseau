var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;



console.log("for use the script execute node script.js 66.394.34. 200 400        200 is the run number ip final number and 400 is the maximum ip ")



if(process.argv[2] === undefined) {


console.log("error")



}



if(process.argv[2] !== undefined) {



var n = process.argv[3]

while(n < process.argv[4]) {

n++ 

console.clear()


var url = "http://localhost/ping?ip=" + process.argv[2] + n;

var xhr = new XMLHttpRequest();
xhr.open("GET", url);

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
   }};

xhr.send();
}

}

