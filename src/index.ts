import { createTransport } from 'nodemailer';

// We add this setting to tell nodemailer the host isn't secure during dev
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const mail = () => {

  const transporter = createTransport({
    host: '127.0.0.1',
    port: 1025,
    secure: false,
    tls: {
      // do not fail on invalid certs
      rejectUnauthorized: false,
    },
    auth: {
      user: 'user',
      pass: 'password',
    },
  });

  // Now when your send an email, it will show up in the MailDev interface
  transporter.sendMail(
    {
      from: "aaa@com",
      to: "bbb@com",
      subject: "test",
      message: "test-test"
    },
    (err, info) => {
      console.log('error', err);
      console.log('info', info);
    }
  );
}

mail();
