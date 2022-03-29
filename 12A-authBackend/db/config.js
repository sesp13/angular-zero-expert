const mongoose = require('mongoose');

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGOCONN);
    console.log('Db connected');
  } catch (error) {
    console.log(error);
    throw new Error(`Error during db initialization`);
  }
};

module.exports = {
  dbConnection,
};
