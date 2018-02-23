var express = require('express')
var app = express()
var http = require('http').Server(app)

app.use(express.static(__dirname))

var array = [];

for (var i = 0; i < 25; i++){
    array[i] = i+1;
}

var server = http.listen(3000, () => {
})