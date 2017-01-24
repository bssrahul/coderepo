const globalConstants = {
     LOCALURl : 'http://localhost:3000',
     DEVURl  : 'http://coderepo.mobilytedev.com:3000',
     MONGODB : {
          LOCALHOST : {
               URI : 'mongodb://localhost:27017/coderepo',
          },
          DEV : {
               URI : 'mongodb://mobilyte:mobilyte@ds161505.mlab.com:61505/coderepo',
          }
     },
     GOOGLE : {
          LOCALHOST : {
               CLIENT_ID : " 682489641376-tevritvf7g2npjq2oeb7rb3emn0s71fk.apps.googleusercontent.com ",
               CLIENT_SECRET : "AKHlgwLeYGPhIgdKkEswEQG1",
               REDIRECT_URI : "http://localhost:3000"
          },
          DEV : {
               CLIENT_ID : " 682489641376-tevritvf7g2npjq2oeb7rb3emn0s71fk.apps.googleusercontent.com ",
               CLIENT_SECRET : "AKHlgwLeYGPhIgdKkEswEQG1",
               REDIRECT_URI : "http://coderepo.mobilytedev.com:3000"
          }
     },
     FACEBOOK : {
          LOCALHOST : {
               CLIENT_ID : "1756791964596216",
               CLIENT_SECRET : "d4f36db9045c182df3527a7cd953dff3",
               REDIRECT_URI : "http://localhost:3000"
          },
          DEV : {
               CLIENT_ID : "1757686401155551",
               CLIENT_SECRET : "74d0d96c1c692e74b114007c7828fbe4",
               REDIRECT_URI : "http://coderepo.mobilytedev.com:3000"
          }
     },
     USER_PORTRAIT_PATH : '/media/users/',
     USER_THUMBNAIL_PATH : '/media/users/thumbnail/',
     EMAIL : "rahul.jain@mobilyte.com",
     REGISTERATION_TEMPLATE : "<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"width:100%\"><tbody><tr><td style=\"background-color:#fff\">&nbsp;<table align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"width:600px\"><tbody><tr><td style=\"background-color:#EBF8A4\"><table align=\"center\" border=\"0\" cellpadding=\"15\" cellspacing=\"0\" style=\"width:100%\"><tbody><tr><td>New Account</td></tr></tbody></table></td></tr><tr><td><table border=\"0\" cellpadding=\"10\" cellspacing=\"0\" style=\"width:100%\"><tbody><tr><td style=\"background-color:#fff\"><table border=\"0\" cellpadding=\"10\" cellspacing=\"0\" style=\"width:100%\"><tbody><tr><td><p>Dear&nbsp; {{USERNAME}},</p><p>Please confirm your registration here <a  target=_blank href='http://localhost:3000/#/auth/verifyEmail/token={{TOKEN}}/id={{ID}}'>Confirm your email</a></p></td></tr></tbody></table><table border=\"0\" cellpadding=\"10\" cellspacing=\"0\" style=\"width:100%\"><tbody><tr><td><pre>Thanks and Regards:<br><strong> Corsa Team </strong></pre><p></p></td></tr></tbody></table></td></tr></tbody></table></td></tr><tr><td style=\"background-color:#EBF8A4\">&nbsp;</td></tr></tbody></table></td></tr></tbody></table>",
     SOCIAL_REGISTRATION_TEMPLATE : "<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"width:100%\"><tbody><tr><td style=\"background-color:#fff\">&nbsp;<table align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"width:600px\"><tbody><tr><td style=\"background-color:#EBF8A4\"><table align=\"center\" border=\"0\" cellpadding=\"15\" cellspacing=\"0\" style=\"width:100%\"><tbody><tr><td>New Account</td></tr></tbody></table></td></tr><tr><td><table border=\"0\" cellpadding=\"10\" cellspacing=\"0\" style=\"width:100%\"><tbody><tr><td style=\"background-color:#fff\"><table border=\"0\" cellpadding=\"10\" cellspacing=\"0\" style=\"width:100%\"><tbody><tr><td><p>Dear&nbsp; {{USERNAME}},</p><p>Please enter {{PASSWORD}} as your first password to login</p></td></tr></tbody></table><table border=\"0\" cellpadding=\"10\" cellspacing=\"0\" style=\"width:100%\"><tbody><tr><td><pre>Thanks and Regards:<br><strong> Corsa Team </strong></pre><p></p></td></tr></tbody></table></td></tr></tbody></table></td></tr><tr><td style=\"background-color:#EBF8A4\">&nbsp;</td></tr></tbody></table></td></tr></tbody></table>",
}

module.exports = globalConstants;
