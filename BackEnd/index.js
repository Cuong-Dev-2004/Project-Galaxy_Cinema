const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const cookieparser = require('cookie-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const port = 3000;
const app = express();

const User = require("./src/routes/User");
const ProductCategory = require('./src/routes/ProductCategory');
const Product = require('./src/routes/Product');


dotenv.config();
mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log('Kết nối MongoDB thành công'))
    .catch(err => console.error('Lỗi kết nối MongoDB:', err));


app.use(morgan('combined'));
app.use(cors());
app.use(cookieparser());
app.use(express.json());

app.use('/v1/auth', User);
app.use('/v1/Products', ProductCategory);
app.use('/v1/Product', Product);
app.get('/', (req, res) => {
    res.send('Hello, world!')
})
app.listen(port, () => console.log("App Listening " + port));