
//module.exports = {
  // Example options — adjust to your needs
  //lintOnSave: false,
  //devServer: {
    //port: 8080
  //}
//}


const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  lintOnSave: false,
  transpileDependencies: true,
  publicPath: '/module11/'
});
