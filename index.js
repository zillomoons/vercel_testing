const express = require('express');
const product = require('./api/product')

const app = express();

app.use('/api', product)

const port = process.env.PORT || 3050;

app.listen(port, () => console.log(`Server is running on port ${port}`))