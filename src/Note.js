// src/Note.js
import React from 'react';
import deleteIcon from './Assets/delete.svg';

const Note = ({ note, onEdit, onDelete }) => {
  return (
    <div
      className="p-4 mb-4 bg-white rounded shadow w-[70%] max-w-screen-lg"
      style={{ fontFamily: note.font, color: note.color, fontSize: `${note.size}px` }}
    >
    <div className="flex item-center">
    <input
        type="text"
        value={note.text}
        onChange={(e) => onEdit(e.target.value)}
        className="w-full border-none outline-none"
      />
         <button
          onClick={onDelete}
          className="ml-4 p-2 rounded hover:bg-red-100"
        >
          <img src={deleteIcon} alt="Delete" className="w-4 h-4" />
        </button>
    </div> 

    </div>
  );
};

export default Note;
