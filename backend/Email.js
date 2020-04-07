//This is a module to send email through Gmail.
const nodemailer = require("nodemailer");
const {google} = require("googleapis");
const {G_CLIENT_ID, G_CLIENT_SECRET, G_REFRESH_TOKEN, G_REDIRECT_URL, G_TARGET} = require('./EmailSettings.js');

const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
     G_CLIENT_ID,
     G_CLIENT_SECRET,
     G_REDIRECT_URL 
);

//Get accesstoken with provided refreshtoken.
oauth2Client.setCredentials({
    refresh_token: G_REFRESH_TOKEN
});
const accessToken = oauth2Client.getAccessToken((error, response) => {
    if(error) {
        console.log(`Accesstoken Error: ${error}`);
    } else {
        console.log("Accesstoken OK");
    }
});

const sendEmail = (req, res) => {
    let mail = req.body;
    
    const smtpTransport = nodemailer.createTransport({
        service: "gmail",
        auth: {
             type: "OAuth2",
             user: G_TARGET, 
             clientId: G_CLIENT_ID,
             clientSecret: G_CLIENT_SECRET,
             refreshToken: G_REFRESH_TOKEN,
             accessToken: accessToken
        }
    });
   
    var message = {
        from: mail.sender,
        to: G_TARGET,
        subject: mail.subject,
        text: mail.message
      };

      smtpTransport.sendMail(message, (error, response) => {
        if(error) {
            console.log(error);
            res.status(500).send("Something went wrong");
        } else {res.status(200).send(response)}
        
        smtpTransport.close();
   });
}

module.exports = {
    sendEmail
};