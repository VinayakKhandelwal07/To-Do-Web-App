import React from "react";
import { Link } from "react-router-dom";

const BoardCard = ({ board }) => {
  return (
    <Link to={`/board/${board.id}`}>
      <div className="bg-white shadow-md p-4 rounded-lg hover:shadow-xl transition duration-200">
        <h2 className="font-semibold text-lg">{board.name}</h2>
        <p className="text-gray-500">{board.todos?.length || 0} Todos</p>
      </div>
    </Link>
  );
};

export default BoardCard;
