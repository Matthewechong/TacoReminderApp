import json


def updatePerson(name, data):
    json_data = readJson()
    new_entry = [d for d in json_data if not (d["name"] == name)]
    new_entry.append(data)
    with open("data.json", "w") as file:
        json.dump(new_entry, file)
        return new_entry


def findPerson(name):
    json_data = readJson()
    person_data = next(item for item in json_data if item["name"] == name)
    return person_data


def readJson():
    with open("data.json") as data:
        json_str = data.read()
        json_data = json.loads(json_str)
        return json_data


def decodeJson(req):
    json_data = json.loads(req.data.decode(encoding='UTF-8'))
    return json_data


def addPerson(user):
    curr_list = readJson()
    curr_list.append(user)
    print(curr_list)
    with open("data.json", "w") as file:
        json.dump(curr_list, file)
        return curr_list
