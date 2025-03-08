from flask_restful import Resource, reqparse
import json

with open('data.json', 'r') as json_file:
    json_data = json.load(json_file)


class LogAccident(Resource):
    def get(self):
        accident = json_data["location"]["geometry"]["coordinates"]
        lng = accident[0]  # Longitude
        lat = accident[1]  # Latitude

        return {"accident": accident}, 200
