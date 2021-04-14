//Lesson 3 
const cities = require("cities");
var myCity = cities.zip_lookup("10016");
console.log(myCity);

//Lesson 4
const port = 3000,
http = require("http"),
httpStatus = require("http-status-codes"),
app = http.createServer((request,response) => {
  console.log("Received an incoming request!");
  response.writeHead(httpStatus.OK,{
    "Content-Type": "text/html"
  });
  let responseMessage = "<h1>Hello, Universe!</h1>";
  response.write(responseMessage);
  response.end();
  console.log(`Sent a response : ${responseMessage}`);
});
app.listen(port);
console.log(`This server has started and is listening in port number: ${port}`);
