import SibApiV3Sdk from 'sib-api-v3-sdk';
import dotenv from 'dotenv'
dotenv.config();
export async function main(emailUsuario, nombreComprador) {
  const defaultClient = SibApiV3Sdk.ApiClient.instance;

  const apiKey = defaultClient.authentications['api-key'];
  apiKey.apiKey = process.env.APIEMAIL;

  const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

  const sendSmtpEmail = {
    to: [
      { email: emailUsuario, name: 'Huespes' } 
    ],
    sender: { email: 'billycastro.1822@gmail.com', name: 'Tienda SAN ANTONIO' },
    subject: 'PROCESO DE COMPRA',
    htmlContent: `
    <html>
      <body>
        <h1>Estimado(a) ${nombreComprador},</h1>
        <p>Hemos registrado un proceso de compra en su nombre. Para confirmar su compra de manera inmediata, le solicitamos que envíe la captura de pago a nuestro número de WhatsApp: <strong>935549833</strong>.</p>
        <p>Una vez recibida la captura de pago, procederemos con el procesamiento de su pedido. Si tiene alguna consulta adicional, no dude en ponerse en contacto con nosotros.</p>
        <br>
        <p><strong>Gracias por confiar en nosotros. ¡Esperamos contar con su preferencia nuevamente!</strong></p>
        <footer>
          <p>Atentamente,</p>
          <p><strong>El equipo de atención al cliente SAN ANTONIO</strong></p>
          <p><small>Para más información, visite nuestro sitio web o contáctenos por WhatsApp.</small></p>
        </footer>
      </body>
    </html>
    `
    
  };

  try {
    const data = await apiInstance.sendTransacEmail(sendSmtpEmail);
    console.log('Correo enviado correctamente:', data);
  } catch (error) {
    console.error('Error al enviar el correo:', error);
  }
}
