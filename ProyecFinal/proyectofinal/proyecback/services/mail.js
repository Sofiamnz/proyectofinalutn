const nodemailer = require('nodemailer');

const send = async ({ 
    mail, 
    subject = 'Gracias por registrarte',
    message
}) => {
    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASSWORD,
            },
            tls: {
                rejectUnauthorized: false,
            },
        });
        const info = {
            to: mail,
            subject: subject,
            html: message,
        };
        const { messageId } = await transporter.sendMail(info);
        return messageId;
    } catch (e) {
        console.log(e);
    }
};

module.exports = { send };