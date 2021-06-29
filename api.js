var express = require("express")
var app = express()
var port = 80
var ping = require('ping');
const util = require('util');
const { Scanner } = require('nnmap.js');

app.get('/ping', function (req, res) {
  

var ip = req.query.ip


var hosts = [ip];
hosts.forEach(function(host){
    ping.sys.probe(host, function(isAlive){
        var msg = isAlive ? 'host ' + host + ' is alive' : 'host ' + host + ' is dead';
        console.log(msg);
        res.send(msg)



if(msg === 'host ' + host + ' is alive') {


const scanner = new Scanner({
  profile: 'Quick scan',
});

scanner.on('ready', () => {
  scanner.startScan(host);
});

scanner.on('scanComplete', (nmapOut) => {
  console.log(util.inspect(nmapOut.scanData.data.hosts, false, null, true));
 var command = util.inspect(nmapOut.scanData.data.meta.args, false, null, true);
 var time = util.inspect(nmapOut.scanData.data.meta.startstr, false, null, true)
 var data = util.inspect(nmapOut.scanData.data, false, null, true)


console.log("commande: " + command)
console.log("time executed: " + time)



});

}
    });
});
})



app.listen(80)
