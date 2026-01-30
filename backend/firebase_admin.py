# backend/firebase_admin.py
import firebase_admin
from firebase_admin import credentials, auth

cred = credentials.Certificate("backend/firebase_key.json")  # Get from Firebase Console
firebase_admin.initialize_app(cred)

def verify_token(id_token: str):
    try:
        decoded_token = auth.verify_id_token(id_token)
        return decoded_token  # uid, email, etc.
    except Exception as e:
        return None
