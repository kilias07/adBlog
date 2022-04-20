const sendgrid = require('@sendgrid/mail');

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function mail(req, res) {
    const body = JSON.parse(req.body);

    const message = `
    Imię: ${body.name}\r\n
    Email: ${body.mail}\r\n
    Temat: ${body.subject}\r\n
    Wiadomość: ${body.message}
    `
    const data = {
        to: 'sztuka@andrzejdromert.pl',
        from: 'wiadomosczestrony@andrzejdromert.pl',
        subject: "Nowy wiadomość ze strony internetowej",
        text: message,
        html: message.replace(/\r\n/g, '<br>')
    };
    try {
        await sendgrid.send(data);
    } catch(e) {
        console.error(e);
        if (e.response) {
            console.error(e.response.body);
        }
    }


    res.status(200).json({
        status: "ok"
    })
}