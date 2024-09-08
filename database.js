const mongoose = require(‘mongoose’);

const URI = "mongodb+srv://ACSE:KL123456789@acse.k5yqcwl.mongodb.net/?retryWrites=true&w=majority&appName=ACSE",

mongoose.connect(URI)

.then(db => console.log(‘DB is connected’))

.catch(err => console.error(err));

module.exports = mongoose;