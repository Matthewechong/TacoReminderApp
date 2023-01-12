from flask import Flask
from flask_restful import Resource, Api
import sendEmail
app = Flask("Taco Reminder API")
api = Api(app)


class TacoCount(Resource):
    def get(self):
        return sendEmail.points


class SendTacoCount(Resource):
    def get(self):
        try:
            sendEmail.sendTacoCount()
            return "Success"
        except:
            return "Failed"


api.add_resource(TacoCount, '/count')
api.add_resource(SendTacoCount, '/send')
if __name__ == '__main__':
    app.run()
