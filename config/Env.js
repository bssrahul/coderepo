let constants = require(APP_PATH + "/config/Constant.js");

module.exports = function(){
     switch(process.env.NODE_ENV){

          case 'local':
          return {
               SITEURl : constants.LOCALURl,
               FACEBOOK : constants.FACEBOOK.LOCALHOST,
               GOOGLE : constants.GOOGLE.LOCALHOST,
               MONGODB : constants.MONGODB.LOCALHOST,
               
          };

          case 'development':
          return {
               SITEURl : constants.DEVURl,
               FACEBOOK : constants.FACEBOOK.DEV,
               GOOGLE : constants.GOOGLE.DEV,
               MONGODB : constants.MONGODB.DEV,
               
          };

          case 'production':
          return {
               SITEURl : constants.DEVURl.LIVEURL,
               FACEBOOK : constants.FACEBOOK.LIVE,
               GOOGLE : constants.GOOGLE.LIVE,
               MONGODB : constants.MONGODB.LIVE,
               
          };

          default:
          return {
               SITEURl : constants.LOCALURl,
               FACEBOOK : constants.FACEBOOK.LOCALHOST,
               GOOGLE : constants.GOOGLE,
               MONGODB : constants.MONGODB.LOCALHOST,
               
          };
     }
};
