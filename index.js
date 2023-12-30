const express = require('express');
const cors = require('cors')
const routerApi = require('./routes');


const {logError, errorHandler, boomErrorHandler} = require('./middleware/errorHandler')

const app = express();
const port = 3000;

app.use(express.json())

app.use(cors());

app.listen(port,()=>{
  console.log('mi puerto ' + port)
})



routerApi(app);

app.use(logError);
app.use(boomErrorHandler);
app.use(errorHandler);
