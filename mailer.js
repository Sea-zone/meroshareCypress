const nodemailer= require('nodemailer')
require('dotenv').config()
const path = require("path")

// Read environment variables
const EMAIL_USER = process.env.EMAIL_USER || 'your-email@gmail.com';
const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD || 'your-password';
 

// Creating transporter object using gmail smtp
const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // `true` for port 465, `false` for all other ports
    auth:{
        user:  EMAIL_USER,  // Replace with your Gmail email address
        pass:  EMAIL_PASSWORD // Replace with your Gmail password or an app-specific password
    }
});

// email options
const mailOptions={
    from:  EMAIL_USER,   // Replace with your Gmail email address
    to: EMAIL_USER,    // Replace with the recipient's email address
    subject:'Mero share IPO Results',//subject of email
    text:"Created by Cronic7 with bordem.Here are your ipo results",//Message of the email
    //attachments
    attachments: [
        {
          filename: 'ipoData.txt',  // Replace with your PDF file name
          path:'cypress/fixtures/ipoData.txt',  // Replace with the path to your PDF file
          contentType: 'application/txt'
        },
    //     {
    //       filename: 'image.jpeg', 
    //        path:  path.join(__dirname,"image.jpeg") ,  // Replace with your image file path
    //       contentType: 'image/jpeg'
          
    //     }
    ]
}

//sent the email
transporter.sendMail(mailOptions,(error,info)=>{
    if(error){
        console.error("Error:",error.msg)
    }else{
        console.log("Email sent:",info.response)
    }
});