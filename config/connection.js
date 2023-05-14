const { connect, connection, set } = require('mongoose');

set('strictQuery', false);

connect('mongodb://127.0.0.1:27017/socialMediaDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


module.exports = connection;
