if(process.env.NODE_ENV === 'production'){
  module.exports = {mongoURI: 'mongodb://milind:milind@ds259897.mlab.com:59897/vidjot-db'}
} else {
  module.exports = {mongoURI: 'mongodb://localhost/vidjot-dev'}
}