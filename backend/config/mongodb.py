#mongodb
from pymongo import MongoClient

client = MongoClient("mongodb+srv://adminuser:Aiden201128!@boilerpython.ecytqx8.mongodb.net/?retryWrites=true&w=majority&appName=boilerpython")

db = client.todo_db

collection_name = db["todo_collection"]