import os

from flask import Flask

from config import Config

def create_app(config_class=Config):
    #create and configure the app
    app = Flask(__name__, instance_relative_config=True)

    # Load the default configuration
    app.config.from_object(config_class)

    # Ensure the instance folder exists
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass
    
    return app