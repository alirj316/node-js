const http = require('http')
http.createServer((request,response)=>{
    response.write("It's your server.")
    response.end();
}).listen(1000)