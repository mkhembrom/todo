const mongoose = require('mongoose');

const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true 
}

const connection = async () => {
  await mongoose.connect(process.env.DBURL, connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    });
};

module.exports = connection;

