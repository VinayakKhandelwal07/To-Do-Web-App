// src/pages/Dashboard.jsx
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import BoardCard from "../components/BoardCard";
import { getBoards } from "../services/api";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { currentUser, token } = useAuth(); // assume AuthContext provides token
  const [boards, setBoards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!token) return; // wait until user is logged in

    const fetchBoards = async () => {
      try {
        setLoading(true);
        const data = await getBoards(token);
        setBoards(data);
      } catch (err) {
        console.error("Failed to fetch boards:", err);
        setError("Could not load boards. Try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBoards();
  }, [token]);

  if (!currentUser) return <p className="p-6">Please log in to see your boards.</p>;

  return (
    <>
      <Navbar />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Your Boards</h1>

        {loading && <p>Loading boards...</p>}
        {error && <p className="text-red-500">{error}</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {boards.map((board) => (
            <BoardCard key={board.id} board={board} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
