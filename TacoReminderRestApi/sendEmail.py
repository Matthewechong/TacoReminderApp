import os
from email.message import EmailMessage
import ssl
import smtplib
import json
from utils import findPerson
email_sender = 'ScumBagChong@gmail.com'
email_password = 'qeaqhokdgiqugich'
subject = 'Taco Count Reminder'


def getMessage(message, points):
    return f"""
    {message}
    Taco Points: {points}
    """


def sendTacoCount(data, message):
    em = EmailMessage()
    em['From'] = email_sender
    em['Subject'] = subject
    context = ssl.create_default_context()
    print(data["email"])
    em['To'] = data["email"]
    new_message = getMessage(message, data["taco_count"])
    print(new_message)
    em.set_content(new_message)
    with smtplib.SMTP_SSL('smtp.gmail.com', 465, context=context) as smtp:
        smtp.login(email_sender, email_password)
        smtp.sendmail(email_sender, data["email"], em.as_string())
