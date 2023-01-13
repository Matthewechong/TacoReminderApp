from flask import Flask, redirect, url_for, render_template, request
from flask_restful import Resource, Api
import sendEmail
# app = Flask("Taco Reminder API")
# api = Api(app)


# class TacoCount(Resource):
#     def get(self):
#         return sendEmail.points


# class SendTacoCount(Resource):
#     def get(self):
#         try:
#             sendEmail.sendTacoCount()
#             return "Success"
#         except:
#             return "Failed"

# api.add_resource(TacoCount, '/count')
# api.add_resource(SendTacoCount, '/send')
# if __name__ == '__main__':
#     app.run()

app = Flask(__name__)


@app.route("/", methods=["POST", "GET"])
def home():

    # if request.method == "POST":
    #     user = request.form["nm"]
    #     count = request.form["count"]
    #     print(user)
    #     print(count)
    #     data = sendEmail.findPerson(user)
    #     data["taco_count"] = count
    #     sendEmail.updatePerson(user,data)
    #     sendEmail.sendTacoCount(user)
    #     return redirect(url_for("user",usr=data))
    # else:
    return render_template("index.html")


@app.route("/login", methods=["POST", "GET"])
def login():
    if request.method == "POST":
        user = request.form["nm"]
        count = request.form["count"]
        print(user)
        print(count)
        data = sendEmail.findPerson(user)
        data["taco_count"] = count
        sendEmail.updatePerson(user, data)
        sendEmail.sendTacoCount(user)
        return redirect(url_for("user", usr=data))
    else:
        return render_template("index.html")


@app.route("/<usr>")
def user(usr):
    return f"<h1>Name: {usr}</h1>"


if __name__ == "__main__":
    app.run(debug=True)
