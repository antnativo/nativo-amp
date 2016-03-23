var restify = require("restify");
var fs = require("fs");


//setup cors

var server = restify.createServer();
var https_options = {
  key: fs.readFileSync('./self-signed/localhost.key'),
  certificate: fs.readFileSync('./self-signed/localhost.crt')
};
var https_server =  restify.createServer(https_options);
server.use(restify.acceptParser(server.acceptable));
server.use(restify.authorizationParser());
server.use(restify.dateParser());
server.use(restify.queryParser());
server.use(restify.jsonp());
server.use(restify.gzipResponse());
server.use(restify.bodyParser());
server.use(restify.CORS());
server.use(restify.fullResponse());
server.opts(/.*/, function (req,res,next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", req.header("Access-Control-Request-Method"));
    res.header("Access-Control-Allow-Headers", req.header("Access-Control-Request-Headers"));
    res.send(200);
    return next();
});

server.get(/(.*)/,restify.serveStatic({
  directory: './',
  default: 'video.html'
}));

server.post(/\/pixel\/(.*)/,function(req,res,next){
    console.log("Got It")
    res.send(200,{message:"pixel"});
    next();
});



https_server.use(restify.acceptParser(server.acceptable));
https_server.use(restify.authorizationParser());
https_server.use(restify.dateParser());
https_server.use(restify.queryParser());
https_server.use(restify.jsonp());
https_server.use(restify.gzipResponse());
https_server.use(restify.bodyParser());
https_server.use(restify.CORS());
https_server.use(restify.fullResponse());
https_server.opts(/.*/, function (req,res,next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", req.header("Access-Control-Request-Method"));
    res.header("Access-Control-Allow-Headers", req.header("Access-Control-Request-Headers"));
    res.send(200);
    return next();
});

https_server.get(/(.*)/,restify.serveStatic({
  directory: './public',
  default: 'index.html'
}));


https_server.listen(443, function() {
   console.log('%s listening at %s', https_server.name, https_server.url);
});