var nodemailer = require('nodemailer');

function sendMail(recipientAddress, subject, body) {
  var smtpConfig = {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'devugeesshop1234@gmail.com',
      pass: 'devugees2018'
    }
  };
  var transporter = nodemailer.createTransport(smtpConfig);
  var mailOptions = {
    from: ' " Users List" <devugeesshop1234@gmail.com>',
    to: recipientAddress,
    subject: subject,
    text: 'Hello World',
    html: body
  };
  transporter.sendMail(mailOptions, function(err, info) {
    if (err) console.log('mail was not delivered');
  });
}
module.exports.sendMail = sendMail;
