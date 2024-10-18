from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_migrate import Migrate
from flask_mail import Mail, Message
import os
from dotenv import load_dotenv
load_dotenv()

app = Flask(__name__)
CORS(app)

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///mydatabase.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config['MAIL_SERVER'] = 'smtp.gmail.com'  # Change this if using a different email provider
app.config['MAIL_PORT'] = 465
app.config['MAIL_USE_SSL'] = True
app.config['MAIL_USERNAME'] = os.getenv('EMAIL_USER')  # Your email (put in .env for security)
app.config['MAIL_PASSWORD'] = os.getenv('EMAIL_PASS')  # Your email password (put in .env)
app.config['MAIL_DEFAULT_SENDER'] = os.getenv('EMAIL_USER')  # Default sender (same as your email)

db = SQLAlchemy(app)
migrate = Migrate(app, db)
mail = Mail(app)