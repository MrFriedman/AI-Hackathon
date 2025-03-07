from flask_restful import Resource, reqparse
from database import database
from models import Notification
class Notification(Resource):
    def post(self):

        args = notification_post_args.parse_args()
        incident_id = args.get("incident_id")
        message = args.get("message")

        notification = Notification(incident_id, message).getObject()
        if database.notifications.insert_one(notification):
            return {
                    "success": "Notification created",
                    "incident_id": incident_id,
                    "message": message
                    }, 200

    def get(self):
        
        args = notification_get_args.parse_args()
        notification_id = args.get("notification_id")

        # Get notification from database
        notification = database.notifications.find_one({"notification_id": notification_id})

        # When the frontend gets a notification it should return  
