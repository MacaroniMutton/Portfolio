from config import db

class Contact(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), nullable=False)
    name = db.Column(db.String(120), nullable=False)
    subject = db.Column(db.String(500))
    message = db.Column(db.String(5000), nullable=False)

    def to_json(self):
        return {
            "id": self.id,
            "email": self.email,
            "name": self.name,
            "subject": self.subject,
            "message": self.message,
        }