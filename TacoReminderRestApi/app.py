import json
from flask import Flask, redirect, url_for, render_template, request
from flask_restful import Resource, Api
import sendEmail
import utils
app = Flask(__name__)


@app.route("/", methods=["POST", "GET"])
def home():
    return render_template("index.html")


@app.route("/usersData", methods=["POST", "GET"])
def usersData():
    if request.method == "GET":
        return utils.readJson()

    return render_template('index.html')


@app.route("/sendEmailTacoCount", methods=["PUT"])
def sendEmailTacoCount():
    if request.method == "PUT":
        json_data = utils.decodeJson(request)
        user = json_data["name"]
        count = json_data["taco_count"]
        data = utils.findPerson(user)
        data["taco_count"] = count
        utils.updatePerson(user, data)
        sendEmail.sendTacoCount(user)
        return render_template('index.html')
    return render_template('index.html')


@app.route("/newUser", methods=["PUT"])
def newUser():
    if request.method == "PUT":
        json_data = utils.decodeJson(request)
        new_user = {
            "name": json_data["name"],
            "email": json_data["email"],
            "taco_count": json_data["taco_count"]
        }
        utils.addPerson(new_user)
        return render_template('index.html')
    return render_template('index.html')


@app.route("/<usr>")
def user(usr):
    return f"<h1>Name: {usr}</h1>"


if __name__ == "__main__":
    app.run(debug=True)
