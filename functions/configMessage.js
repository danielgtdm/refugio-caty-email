const nodemailer = require('nodemailer');
module.exports = (formulario) => {
 var transporter = nodemailer.createTransport({
 service: 'gmail',
 auth: {
 user: 'danyalejandrogm43@gmail.com', // Cambialo por tu email
 pass: 'kenblock43' // Cambialo por tu password
 }
 });
const mailOptions = {
 from: `${formulario.nombre} <${formulario.email}>`,
 to: 'includepanda@gmail.com', // Cambia esta parte por el destinatario
 subject: `Solicitud de Reservacion`,
 html: `
 <strong>Nombre:</strong> ${formulario.nombre} <br/>
 <strong>E-mail:</strong> ${formulario.email} <br/>
 <strong>Servicio:</strong> ${formulario.asunto} <br/>
 <strong>Desde:</strong> ${formulario.inicio} <br/>
 <strong>Hasta:</strong> ${formulario.fin} <br/>
 <strong>Mensaje:</strong> ${formulario.mensaje}
 `
 };
transporter.sendMail(mailOptions, function (err, info) {
 if (err)
 console.log(err)
 else
 console.log(info);
 });
}