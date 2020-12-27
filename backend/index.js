var express = require('express');
const bodyParser = require('body-parser');

var app = express();
const cors = require('cors')
const port = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

//app.use("/estudiantes", estudiantesRouter)

app.listen(port, function () {
  console.log('Listening on port',port);
});

app.get('/Nombre', function(req, res){
    res.send('Edy Galicia');
})