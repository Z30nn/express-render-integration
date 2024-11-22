const express = require('express');
const cors = require('cors');
const productService = require('./product-service');

app.use(cors());

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/products', productService);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});