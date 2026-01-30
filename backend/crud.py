# backend/crud.py
from sqlalchemy.orm import Session
from . import models

# BOARDS
def get_boards(db: Session, owner_uid: str):
    return db.query(models.Board).filter(models.Board.owner_uid == owner_uid).all()

def create_board(db: Session, board: dict, owner_uid: str):
    db_board = models.Board(name=board['name'], owner_uid=owner_uid)
    db.add(db_board)
    db.commit()
    db.refresh(db_board)
    return db_board

# TODOS
def get_todos(db: Session, board_id: int):
    return db.query(models.Todo).filter(models.Todo.board_id == board_id).all()

def create_todo(db: Session, board_id: int, todo: dict):
    db_todo = models.Todo(title=todo['title'], completed=todo.get('completed', 0), board_id=board_id)
    db.add(db_todo)
    db.commit()
    db.refresh(db_todo)
    return db_todo

def update_todo(db: Session, todo_id: int, data: dict):
    todo = db.query(models.Todo).filter(models.Todo.id == todo_id).first()
    for key, value in data.items():
        setattr(todo, key, value)
    db.commit()
    db.refresh(todo)
    return todo

def delete_todo(db: Session, todo_id: int):
    todo = db.query(models.Todo).filter(models.Todo.id == todo_id).first()
    if todo:
        db.delete(todo)
        db.commit()
        return True
    return False
