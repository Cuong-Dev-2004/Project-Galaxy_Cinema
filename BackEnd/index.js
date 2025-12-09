const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const cookieparser = require('cookie-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const port = 3000;
const app = express();

// Import Routes
const User = require("./src/routes/User");
const ProductCategory = require('./src/routes/ProductCategory');
const Product = require('./src/routes/Product');

dotenv.config();

// Kết nối MongoDB
mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log('✅ Kết nối MongoDB thành công'))
    .catch(err => console.error('❌ Lỗi kết nối MongoDB:', err));


// Middlewares
app.use(morgan('combined'));
app.use(cors());
app.use(cookieparser());
app.use(express.json());

// ROUTING
app.use('/v1/auth', User);
app.use('/v1/categories', ProductCategory); // Resource cho Danh mục (ProductCategory)
app.use('/v1/products', Product);          // Resource cho Sản phẩm (Products)

// Root Endpoint
app.get('/', (req, res) => {
    res.send('API Server is running successfully!')
})

app.listen(port, () => console.log(`🌍 App Listening on port ${port}`));
