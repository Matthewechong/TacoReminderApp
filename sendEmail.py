import os
from email.message import EmailMessage
import ssl
import smtplib
email_sender = 'ScumBagChong@gmail.com'
email_password = os.environ.get('email_password')
email_receiver = 'wowomon123@gmail.com'

subject = 'Taco Count Reminder'
points = 1
body = f"""
Top of the Morning
The Name is Chong don't get it wrong
One Point for Chong *clap
Taco Points: {points}
"""
em = EmailMessage()
em['From'] = email_sender
em['To'] = email_receiver
em['Subject'] = subject
em.set_content(body)
context = ssl.create_default_context()


def sendTacoCount():
    with smtplib.SMTP_SSL('smtp.gmail.com', 465, context=context) as smtp:
        smtp.login(email_sender, email_password)
        smtp.sendmail(email_sender, email_receiver, em.as_string())
