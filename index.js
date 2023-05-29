require('dotenv').config()
// -------- creating a server -----------
const express = require('express');
const server = express();
// -------- creating a server -----------
const productRouter = require('./routes/product');
const userRouter = require('./routes/user')

const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');


const PORT = process.env.PORT || 8080


// db connection
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("Database connected");
}



// bodyParser
server.use(cors());
server.use(morgan('default'));
server.use(express.json());
server.use(express.static(path.resolve(__dirname,process.env.PUBLIC_DIR)))
server.use('/products', productRouter.routes);
server.use('/users', userRouter.routes);
server.use('*',(req,res) => {
  res.sendFile(path.resolve(__dirname,'frontend_build','index.html'));
})





// --------- after creating , asign to the port --------------
server.listen(PORT, ()=> {
    console.log('server started at', PORT)
})

