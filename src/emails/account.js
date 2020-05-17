const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to:email,
        from: 'jesstxz@gmail.com',
        subject:'Thanks for joing',
        text: `Wekcome to the app, ${name}. Let me know how you get along with the app`
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to:email,
        from: 'jesstxz@gmail.com',
        subject:'sad to see you go',
        text: `Goodbye ${name}. Let me know how find the app`
    })
}
module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}