const nodemailer=require('nodemailer');
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, 
    auth: {
      user: "smitdhimar61@gmail.com",
      pass: "mcrcpdbbmfezmjja",
    },
  });

module.exports=transporter;