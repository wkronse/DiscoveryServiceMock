'use strict';

const fs = require('fs');
var http = require('http');

// Init configuration
const ServerConfigFile = "backendServers.json";
const Port = 8080;

http.createServer(function (req, res) {
    var servers = returnActiveBackendServers(readBackendServers().servers);
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(JSON.stringify(servers));
    res.end();
  }).listen(Port);

function readBackendServers(){

    let rawdata = fs.readFileSync(ServerConfigFile);
    return JSON.parse(rawdata);

}

function returnActiveBackendServers (serverArray){
    
    let activeServerArray = [];
    
    for (const server of serverArray) {
        if (server.active){
            let item = {};
            item.AppVersion = server.AppVersion;
            item.Instance = server.Instance;
            item.BaseURL = server.BaseURL;

            activeServerArray.push(item);
        }
    }


    return activeServerArray;
}