const sgMail = require("@sendgrid/mail");

const sendEmail = async (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: "jairo25509@hotmail.com", // Change to your recipient.
    from: "picoyplaca.app@gmail.com", // Change to your verified sender.
    subject: "✅Tu próximo pico y placa.",
    text: "Mañana tienes pico y placa en tu carro de placa finalizada en...",
    html: "<strong>Mañana tienes pico y placa en tu carro de placa finalizada en...</strong>",
  };
  const info = await sgMail.send(msg);
  res.send(
    "<strong>Mañana tienes pico y placa en tu carro de placa finalizada en...</strong>"
  ); //O como se quiera responder.
};

module.exports = sendEmail;
