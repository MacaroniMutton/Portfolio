from flask import request, jsonify
from config import app, db, mail
from models import Contact
from flask_mail import Mail, Message
from sqlalchemy.exc import IntegrityError
import sqlite3
import requests
from rag_pipeline import get_chatbot_response


# def get_chatbot_response(user_message):
#     # Example responses (can be replaced with a more complex bot model)
#     responses = {
#         "hello": "Hi there! How can I help you?",
#         "how are you": "I'm just a bot, but thanks for asking!",
#         "bye": "Goodbye! Have a great day!"
#     }
    
#     # Basic matching for demo purposes (you can use NLP here)
#     user_message = user_message.lower()
#     return responses.get(user_message, "Sorry, I didn't understand that. Can you please rephrase?")


# Define the endpoint
@app.route('/chat', methods=['POST'])
def chat():
    # Get the JSON data sent by the frontend
    data = request.get_json()
    
    if 'message' not in data:
        return jsonify({"error": "No message provided"}), 400
    
    user_message = data['message']
    
    # Get the chatbot's response
    bot_response = get_chatbot_response(user_message)['answer']
    
    # Return the response as JSON
    return jsonify({"bot_message": bot_response})


@app.route('/send_email', methods=['POST'])
def send_email():
    data = request.get_json()

    # Extract data from the form
    sender_email = data.get('from_email')
    sender_name = data.get('fromName')
    subject = data.get('subject')
    message = data.get('message')

    if not sender_email or not sender_name or not subject or not message:
        return jsonify({'error': 'Missing form data'}), 400

    # Prepare the email
    msg = Message(
        subject=f"Portfolio Contact Form: {subject}",
        recipients=[app.config['MAIL_USERNAME']],  # You will receive the email
        body=f"Name: {sender_name}\nEmail: {sender_email}\n\nMessage:\n{message}"
    )

    try:
        # Save the form data into the database
        contact_entry = Contact(
            email=sender_email,
            name=sender_name,
            subject=subject,
            message=message
        )
        db.session.add(contact_entry)
        db.session.commit()

        # Send the email
        mail.send(msg)

        return jsonify({'message': 'Email sent successfully!'}), 200
    except Exception as e:
        # Rollback in case of database error
        db.session.rollback()
        return jsonify({'error': 'Error occurred, email was not sent.'}), 500


if __name__=='__main__':
    with app.app_context():
        db.create_all()

    app.run(debug=True)