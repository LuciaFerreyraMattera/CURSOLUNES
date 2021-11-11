var express = require('express');
var router = express.Router();
var nodemailer = require("nodemailer");
var contactoModel = require ('../model/contactoModel');

 /*GET home page. */
router.get('/', function (req, res, next) {
  res.render('contacto', {
    isContacto: true
  }); 
});

router.post('/', async function (req, res, next) {

  var nombre = req.body.nombre;
  var email = req.body.email;
  var telefono = req.body.telefono;
  var mensaje = req.body.mensaje;

  var obj = {
    to: 'cb.corporalbeauty@gmail.com',
    subject: 'Dudas y consultas de Corporal Beauty',
    html: nombre + " Se contacto a traves y quiere mas informacion a este correo" + email + ".<br> Además, hizo el siguiente comentario: " + mensaje + ". <br> su tel es" + telefono

  }
});

var transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
})

var info = await transport.sendMail(obj);
var contacto = await contactoModel.insertContacto(req.body);
res.render('contacto', {
  isContacto: true,
  message: 'Mensaje enviado correctamente',
});

module.exports = router;
