# backend/main.py
from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from . import database, models, crud, dependencies

models.Base.metadata.create_all(bind=database.engine)

app = FastAPI()

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Vite frontend
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dependency
def get_db():
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()

# ---- BOARDS ----
@app.get("/boards")
def read_boards(current_user=Depends(dependencies.get_current_user), db: Session = Depends(get_db)):
    return crud.get_boards(db, current_user['uid'])

@app.post("/boards")
def create_board(board: dict, current_user=Depends(dependencies.get_current_user), db: Session = Depends(get_db)):
    return crud.create_board(db, board, current_user['uid'])

# ---- TODOS ----
@app.get("/boards/{board_id}/todos")
def read_todos(board_id: int, current_user=Depends(dependencies.get_current_user), db: Session = Depends(get_db)):
    return crud.get_todos(db, board_id)

@app.post("/boards/{board_id}/todos")
def create_todo(board_id: int, todo: dict, current_user=Depends(dependencies.get_current_user), db: Session = Depends(get_db)):
    return crud.create_todo(db, board_id, todo)

@app.put("/boards/{board_id}/todos/{todo_id}")
def update_todo(board_id: int, todo_id: int, data: dict, current_user=Depends(dependencies.get_current_user), db: Session = Depends(get_db)):
    return crud.update_todo(db, todo_id, data)

@app.delete("/boards/{board_id}/todos/{todo_id}")
def delete_todo(board_id: int, todo_id: int, current_user=Depends(dependencies.get_current_user), db: Session = Depends(get_db)):
    crud.delete_todo(db, todo_id)
    return {"detail": "Todo deleted"}
