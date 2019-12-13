# DiscoveryServiceMock
Mock for the Discovery Service. 
This small script allows to spin up a web endpoint that can act as medico Touch Discovery Service

## Usage

### Server
Prerequisites:
 - node.js

1. clone this repository
2. open cloned directory in a command line windows
3. run command `node discovery.js`
4. The server responds on http://localhost:8080

To stop the script use `Ctrl + c`

### Touch app

1. Use the URL and port of the script in the iOS settings of medico Touch
2. Restart the app

## Configuration

The backend servers are defined in the file *backendServers.json*, but the file can be changed as it is a constant at the start of the script.
Each server is a JSON object. The property *active* controls whether it will be returned or not.
Changes are active immediately after the file was saved, no restart required

To change the default port use the **PORT** constant in the script

## Version history

 ### 0.1.0
 Initial version

