const express = require('express')
const cors = require('cors')
const nodemailer = require('nodemailer')
const app = express()
const port = 8080;

app.use(cors())
app.use(express.json())
app.use(express.static('public'));
app.get('/',(req, res) => {
  console.log('req occured')
  res.sendFile(__dirname + '/public/index.html')
})

app.post('/resume', (req, res) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'tosky0514@gmail.com',
      pass: 'tmflfkd1'
    }
  });
  
  var mailOptions = {
    from: 'tosky0514@gmail.com',
    to: req.body.email,
    subject: '[Resume]Shawn Han',
    text: 'Hi, this is Shawn Han. Thank you for your interest of me. There is PDF file attached. You can check my resume with it.',
    attachments: [{
      filename: 'resume.pdf',
      path: '/Users/shawn/im-sprint-personal-portfolio/server/public/resume.pdf',
      contentType: 'application/pdf'
    }]
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

  res.send()
})
app.listen(port)