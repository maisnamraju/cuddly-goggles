const nodemailer = require('nodemailer');
const handlebars = require('handlebars/runtime');
const fs = require('fs');

const Mailer {
    constructor (HOST = 'smtp.ethereal.email', USER = 'test', PASSWORD = 'test', PORT = 587, SECURE = true) {
        this.mailer = nodemailer.createTransport({
            host: HOST,
            port: PORT,
            secure: SECURE,
            auth: {
                user: USERNAME,
                password: PASSWORD
            }
        });
    }

    async sendMail(from, to, data, templateName = null) {
        try {
            let mailOptions = {
                from,
                to,
                subject: data.subject,
            };
            if(templateName) {
                const source = fs.readFileSync(`./templates/${templateName}.hbs`);
                const template = handlebars.compile(source.toString('utf-8'));
                mailOptions.html = template(data);
            } else {
                mailOptions.text = data.text;
            }
            this.mailer.sendMail(mailOptions);
        } catch (error) {
            throw(new Error(error));
        }
    }

    saveTemplate(fileName,template){
        fs.writeFileSync(`./templates/${fileName}.hbs`, template);
    }

    getTemplate(fileName){
        let file = fs.readFileSync(`./templates/${fileName}.hbs`);
        return file.toString('utf-8');
    }
}

module.exports = Mailer;