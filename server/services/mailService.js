const nodemailer = require('nodemailer')

class MailService {
    constructor() {
        this.trasporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD
            }
        })
    }

    async sendActivationMail(to, link) {
        await this.trasporter.sendMail({
            from: process.env.SMTP_USER,
            to,
            subject: 'Account email address verification from ' + process.env.API_URL,
            text: '',
            html: `
                    <div>
                        <h1>Click the link to verify email address</h1>
                        <a href="${link}">${link}</a>
                    </div>
                `
        }).catch(e => console.log(e))

    }


}

module.exports = new MailService()