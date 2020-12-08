'use strict';

const fs = require('fs');
var http = require('http');

// Init configuration
const ServerConfigFile = "backendServers.json";
const Port = 8080;

http.createServer(function (req, res) {
    var serverConf = readBackendServers();
    var servers = returnActiveBackendServer(serverConf.servers,serverConf.active);
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(JSON.stringify(servers));
    res.end();
  }).listen(Port);

function readBackendServers(){

    let rawdata = fs.readFileSync(ServerConfigFile);
    return JSON.parse(rawdata);

}

function returnActiveBackendServer (serverArray, activeServer){
    
    let activeServerArray = [];
    
    for (const server of serverArray) {
        if (server.id == activeServer){
            let item = {};
            item.AppVersion = server.AppVersion;
            item.Instance = server.Instance;
            item.BaseURL = server.BaseURL;

            activeServerArray.push(item);
        }
    }


    return activeServerArray;
}