from flask_restful import Resource, reqparse
from database import database
from users import UserAccount
import json

with open('data.json', 'r') as json_file:
    json_data = json.load(json_file)


class Report(Resource):
    def get(self):

        userAccount = UserAccount()
        userData = userAccount.get()  # Call the method

        username = userData.get('username', 'N/A')
        email: {userData.get('email', 'N/A')}
        id_number: {userData.get('id_number', 'N/A')}
        phone_number: {userData.get('phone_number', 'N/A')}
        home_address: {userData.get('home_address', 'N/A')}
        dob: {userData.get('dob', 'N/A')}
        insurance_number: {userData.get('insurance_number', 'N/A')}
        insurance_name: {userData.get('insurance_name', 'N/A')}
        license_numbers: {', '.join(userData.get(
            'license_numbers', [])) if userData.get('license_numbers') else 'N/A'}
        incidents: {', '.join(userData.get('incidents', []))
                    if userData.get('incidents') else 'None'}

        description = json_data["description"]["generated"]
        severity = json_data["severity"]
        accDate = json_data["accidentDate"]
        street = json_data["streetname"]

        return {"username":
                username,
                "email": email,
                "id_number": id_number,
                "phone_number": phone_number,
                "home_address": home_address,
                "dob": dob,
                "insurance_number": insurance_number,
                "insurance_name": insurance_name,
                "license_numbers": license_numbers,
                "incidents": incidents,
                "description": description,
                "severity": severity,
                "accDate": accDate,
                "street": street}, 200
