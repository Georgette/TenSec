var express = require('express')
var app = express()

var configurations = [
    {
        name: 'host1',
        hostname: 'nessus-ntp.lab.com',
        port: 1241,
        username: 'toto'
    },
    {
        name: 'host2',
        hostname: 'nessus-xml.lab.com',
        port: 3384,
        username: 'admin'
    }
]
//set up route
app.get('/download/request', function (req, res) {
    res.send({
        configurations: configurations.slice(0, req.query.host)
    })
})

//knows to look in web directory
app.use(express.static('web'))

var server = app.listen(8080, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Server listening at http://%s:%s', host, port);
})
