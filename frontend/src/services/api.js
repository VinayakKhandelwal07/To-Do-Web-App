// src/services/api.js
import axios from "axios";

const API_BASE = "http://localhost:8000";

const apiClient = axios.create({
  baseURL: API_BASE,
  timeout: 5000,
});

const authHeader = (token) => ({
  headers: { Authorization: `Bearer ${token}` },
});

// Fetch all boards
export const getBoards = async (token) => {
  const res = await apiClient.get("/boards", authHeader(token));
  return res.data;
};

// Create new board
export const createBoard = async (board, token) => {
  const res = await apiClient.post("/boards", board, authHeader(token));
  return res.data;
};

// Fetch todos of a board
export const getTodos = async (boardId, token) => {
  const res = await apiClient.get(`/boards/${boardId}/todos`, authHeader(token));
  return res.data;
};

// Create todo
export const createTodo = async (boardId, todo, token) => {
  const res = await apiClient.post(`/boards/${boardId}/todos`, todo, authHeader(token));
  return res.data;
};

// Update todo
export const updateTodo = async (boardId, todoId, data, token) => {
  const res = await apiClient.put(`/boards/${boardId}/todos/${todoId}`, data, authHeader(token));
  return res.data;
};

// Delete todo
export const deleteTodo = async (boardId, todoId, token) => {
  const res = await apiClient.delete(`/boards/${boardId}/todos/${todoId}`, authHeader(token));
  return res.data;
};
