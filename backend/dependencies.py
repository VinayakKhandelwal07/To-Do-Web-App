# backend/dependencies.py
from fastapi import Header, HTTPException
from .firebase_admin import verify_token

def get_current_user(authorization: str = Header(...)):
    """
    Expects header: Authorization: Bearer <firebase-id-token>
    """
    if not authorization.startswith("Bearer "):
        raise HTTPException(status_code=401, detail="Invalid authorization header")
    id_token = authorization.split(" ")[1]
    user = verify_token(id_token)
    if not user:
        raise HTTPException(status_code=401, detail="Invalid token")
    return user  # contains uid, email, etc.
