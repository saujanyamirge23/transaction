const axios = require('axios');
const ProductTransaction = require('../models/Transaction');

const initializeDatabase = async () => {
  try {
    const response = await axios.get('https://s3.amazonaws.com/roxiler.com/product_transaction.json');
    const transactions = response.data;
    await ProductTransaction.insertMany(transactions);
    console.log('Database initialized with seed data.');
  } catch (error) {
    console.error('Error initializing database:', error);
  }
};

module.exports = { initializeDatabase };
