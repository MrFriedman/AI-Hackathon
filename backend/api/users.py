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
