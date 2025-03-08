class User():
    def __init__(self, username, email, password, dob):
        self.username = username
        self.full_name = None
        self.email = email
        self.password = password # Not encrypted, just a prototype so its fine.
        self.id_number = None
        self.phone_number = None
        self.home_address = None
        self.dob = dob

        # Probably going to have to change this later.
        # I don't know how insurance works.
        self.insurance_number = None
        self.insurance_name = None
        self.license_numbers = []
        self.incidents = [] # Stores ids of incidents
        # Maybe files

    def getObject(self):
        # This is basically useless now.
        # fun
        return {
                "username": self.username,
                "full_name": self.full_name,
                "email": self.email,
                "password": self.password,
                "id_number": self.id_number,
                "phone_number": self.phone_number,
                "home_address": self.home_address,
                "dob": self.dob,
                "insurance_number": self.insurance_number,
                "insurance_name": self.insurance_name,
                "license_numbers": self.license_numbers
                }

class Notification():
    def __init__(self, incident_id, message):
        self.incident_id = incident_id
        self.message = message

    def getObject(self):
        # This too
        return {
                "incident_id": self.incident_id,
                "message": self.message
                }
