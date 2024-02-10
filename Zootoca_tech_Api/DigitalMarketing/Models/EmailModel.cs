namespace DigitalMarketing.Models
{
    public class EmailModel
    {
        public string From { get; set; }
        public string To { get; set; }
        public string Message { get; set; }
        public string Service { get; set; }
        //public EmailService Service { get; set; }
    }

    public class EmailService
    {

        public string SmtpServer { get; set; }
        public int SmtpPort { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
     
    }
}
