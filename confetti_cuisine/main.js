const port = 3000,
  http = require("http"),
  httpStatus = require("http-status-codes"),
  router = require("./router"),
  contentTypes = require("./contentTypes"),
  utils = require("./utils");
  var pictureName = "nice.jpg";
  router.get("/", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/index.html", res);
    //res.writeHead(httpStatus.OK, contentTypes.png);
   // utils.getFile("public/images/35227bc0-179e-41f8-872f-56eb08a30f4d.jpg",res);
  });
  router.get("/"+ pictureName,(req,res) =>{
    res.writeHead(httpStatus.OK, contentTypes.png);
    utils.getFile("public/images/" + req.url,res);
  })
  
  http.createServer(router.handle).listen(port);
  console.log(`The server is listening on port number: http://localhost:${port}`);