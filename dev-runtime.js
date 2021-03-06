const express = require('express');
const router = require('./router.js');

const app = express();
app.use(router);
app.listen(process.env['PORT'] || 3000, console.log('Server running'));