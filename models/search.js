const mongoose = require('mongoose');

const SearchSchema = mongoose.Schema({
  term:{
    type:String,
    required:true
  },
  when:{
    type:Date,
    default:Date.now()
  }
});

const Search = module.exports = mongoose.model('Search', SearchSchema);
