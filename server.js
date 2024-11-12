const express = require('express');
const app = express();
const PORT = 5000;
app.use(express.json());
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ecommerce', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Database connected'))
.catch(err => console.error('Database connection error:', err));
