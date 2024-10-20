
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import os 
from dotenv import load_dotenv
from motor.motor_asyncio import AsyncIOMotorClient

# Load environment variables from .env file
load_dotenv()

# Get the MongoDB password from environment variables
db_password = os.getenv('MONGODB_PASS')

# Construct the URI with the password
uri = f"mongodb+srv://vercel-admin-user:{db_password}@cluster0.sudd8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

# Create a new client and connect to the server
client = AsyncIOMotorClient(uri, server_api=ServerApi('1'))

db = client.cta_db
collection = db["cta_collection"]

petsdb = client.pets_db
pets_collection = petsdb["pets_collection"]
