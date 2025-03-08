from flask_restful import Resource, reqparse
from database import database
from models import Notification
class Notification(Resource):
    def get(self):
       
        notifications = database.notifications.find({'notification_id': '0'})
        # Create empty list for notifications
        notification_list = []

        # Append each notification to list
        for notification in notifications:
            notifcation_list.append(notification)

        return {"notification_list": notification_list}, 200


        

