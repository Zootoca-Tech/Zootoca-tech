using DigitalMarketing.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Net;
using System.Net.Mail;

namespace DigitalMarketing.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmailController : Controller
    {
        [HttpPost("Sendmail")]
        public IActionResult SendEmail(EmailModel model)
        {
            try
            { 
               MailMessage message = model.CreateMailMessage();
                SendEmailMessage(message);

                return Ok("Email sent successfully");
            }
            catch (Exception ex)
            {
                return BadRequest(new { Message = ex.Message.ToString() });
            }
        }

        private void SendEmailMessage(MailMessage message)
        {
            // Configure the SMTP client
            SmtpClient smtpClient = new SmtpClient("smtp.gmail.com");
            smtpClient.Port = 587;
            smtpClient.EnableSsl = true;
            smtpClient.Credentials = new NetworkCredential("akashks6341@gmail.com", "jdqt afoj cihq remp");
            //smtpClient.Credentials = new NetworkCredential("user@gmail.com", "Secret pwd");

            // Send the email
            smtpClient.Send(message);
        }
    }
}
