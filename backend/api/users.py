from flask_restful import Resource, reqparse
from database import database
from models import User

class UserRegistration(Resource):
    def post(self):
        args = user_register_post_args.parse_args()
        username = args.get("username")
        email = args.get("email")
        password = args.get("password")
        dob = args.get("dob")
    
    return {
            "success": "Registration successful",
            "username": username
            }, 200

class UserAccount(Resource):
    def get(self):
        user = database.users.find_one({"username": "User"})

        username = user['username']
        email = user['email']
        id_number = user['id_number']
        phone_number = user['phone_number']
        home_address = user['home_address']
        dob = user['dob']
        insurance_number = user['insurance_number']
        insurance_name = user['insurance_name']
        license_numbers = user['license_numbers']
        incidents = user['incidents']

        return {"username": username,
                "email": email,
                "id_number": id_number,
                "phone_number": phone_number,
                "home_address": home_address,
                "dob": dob,
                "insurance_number": insurance_number,
                "license_numbers": license_numbers,
                "incidents": incidents}, 200
