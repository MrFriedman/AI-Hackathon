import pymongo

db_client = pymongo.MongoClient('localhost', 27017, username="aihackathon", password="changeme123")
database = db_client.db
