from flask import Flask
from flask_restful import Api, Resource
from database import database
from api.users import UserRegistration, UserUpdateInformation, UserAccount 


app = Flask(__name__)

def init():

    # Test database connection
    # Although the program will hang if it can't connect so this is probably useless.
    if(not database.users.find_one({"":""})):
        print("Database connected.")
    else:
        print("Unable to connect to database.")

api = Api(app)

api.add_resource(UserRegistration, "/api/user/register")
api.add_resource(UserUpdateInformation, "/api/user/update-information")
api.add_resource(UserAccount, "/api/user/account")
    
if __name__ == "__main__":
    init()
    app.run(debug=True, host="localhost")
