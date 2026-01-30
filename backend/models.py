# backend/models.py
from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from .database import Base

class Board(Base):
    __tablename__ = "boards"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    owner_uid = Column(String, index=True)  # store Firebase UID

    todos = relationship("Todo", back_populates="board", cascade="all, delete-orphan")

class Todo(Base):
    __tablename__ = "todos"
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String)
    completed = Column(Integer, default=0)
    board_id = Column(Integer, ForeignKey("boards.id"))

    board = relationship("Board", back_populates="todos")
