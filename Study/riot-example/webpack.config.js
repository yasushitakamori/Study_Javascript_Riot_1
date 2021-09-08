const path = require('path')

module.exports = {

 entry:'./src/main.js',
 
 output: {
  
  path:path.resolve(__dirname, 'public'),
  
  publicPath:'/public/',
  
  filename:'main.js'
  
 },
 
 module:{
 
  rules:[
  
   {
    test:/\.riot$/,
    
    exclude:/node_modules/,
    
    use:[{
    
     loader: '@riotjs/webpack-loader',
     
     options:{
      hot:false,
      
     }
     
    }]
    
  }
  
  ]
 }
 
}
