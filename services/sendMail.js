// import nodemailer from 'nodemailer'
import nodemailer from 'nodemailer'


function sendMail(from, to, subject, html){
  let transporter = nodemailer.createTransport({
    host: '157.90.129.247',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: 'charles.charles@kukhonadigital.co.za', // generated ethereal user
        pass: 'ZuPDEHJqkQd4QyEmFZtj'  // generated ethereal password
    },
    tls:{
      rejectUnauthorized: false
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
      from: from, //'"DOW CHEMICALS" <admin@dowchemicals.ltd>', // sender address
      to: to, //`${user.email}`, // list of receivers
      subject: subject,//'Registration Success', // Subject line
      text: 'hello world', // plain text body
      html: html // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);   
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  });
}

export default sendMail