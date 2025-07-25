import os

from dotenv import load_dotenv

load_dotenv()

class Config:
    SECRET_KEY = SECRET_KEY = os.getenv('SECRET_KEY')