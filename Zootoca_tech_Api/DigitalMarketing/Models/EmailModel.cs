﻿using System.Net.Mail;
using System.Reflection;

namespace DigitalMarketing.Models
{
    public class EmailModel
    {
        public string From { get; set; }
        public string To { get; set; }
        public string Message { get; set; }
        public string Service { get; set; }
        public string UserName { get; set; }
        public string ContactNumber { get; set; }

        public string Result { get; set; }

        public MailMessage CreateMailMessage()
        {
            MailMessage message = new MailMessage();
            message.From = new MailAddress(From);
            message.To.Add(To);
            message.Subject = $"Enquiry about:{ Service}";
            message.Body = $"<b>User Name:</b> {UserName} <br /><b>EmailId: {From}</b><br/><b>Service: {Service}</b><br/>  <b>Contact Number:</b>{ContactNumber}<br /> <b>Message:</b> {Message}";
            message.IsBodyHtml = true;
            return message;
        }
    }
}
