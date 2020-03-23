//This is a module to send email through Gmail.
const nodemailer = require("nodemailer");
const {google} = require("googleapis");
const {CLIENT_ID, CLIENT_SECRET, REFRESH_TOKEN, REDIRECT_URL, TARGET} = require('./EmailSettings.js');

const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
     CLIENT_ID,
     CLIENT_SECRET,
     REDIRECT_URL 
);

//Get accesstoken with provided refreshtoken.
oauth2Client.setCredentials({
    refresh_token: REFRESH_TOKEN
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
             user: TARGET, 
             clientId: CLIENT_ID,
             clientSecret: CLIENT_SECRET,
             refreshToken: REFRESH_TOKEN,
             accessToken: accessToken
        }
    });
   
    var message = {
        from: mail.sender,
        to: TARGET,
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