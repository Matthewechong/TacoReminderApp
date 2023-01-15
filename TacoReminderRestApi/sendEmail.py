import os
from email.message import EmailMessage
import ssl
import smtplib
import json
from utils import findPerson
email_sender = 'ScumBagChong@gmail.com'
email_password = 'qeaqhokdgiqugich'

subject = 'Taco Count Reminder'
points = 1

em = EmailMessage()
em['From'] = email_sender
em['Subject'] = subject

context = ssl.create_default_context()


def getMessage(points):
    return f"""
    Top of the Morning
    The Name is Chong don't get it wrong
    One Point for Chong *clap
    Taco Points: {points}
    """


def sendTacoCount(name):
    data = findPerson(name)
    em['To'] = data["email"]
    em.set_content(getMessage(data["taco_count"]))

    with smtplib.SMTP_SSL('smtp.gmail.com', 465, context=context) as smtp:
        smtp.login(email_sender, email_password)
        smtp.sendmail(email_sender, data["email"], em.as_string())
