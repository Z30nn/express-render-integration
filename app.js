const express = require('express');
const cors = require('cors');
const productService = require('./product-service');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());

app.use('/products', productService);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});