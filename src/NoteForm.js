// src/NoteForm.js
import React, { useState, useContext } from 'react';
import { NotesContext } from './NotesContext';
import Toolbar from './Toolbar';

const NoteForm = () => {
  const { dispatch } = useContext(NotesContext);
  const [text, setText] = useState('');
  const [font, setFont] = useState('Arial');
  const [color, setColor] = useState('#000000');
  const [size, setSize] = useState(16);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_NOTE',
      payload: { text, font, color, size },
    });
    setText('');
  };

  return (
    <div className="flex item-centre ">
      <form onSubmit={handleSubmit} className="p-4 mb-4 bg-white rounded w-[70%] max-w-screen-lg p-4 ">
        <Toolbar />
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a note"
        className="w-full p-2 mb-4 border rounded "
      />
      <button type="submit" className="px-4 py-2 text-white bg-yellow-400 rounded">Add Text</button>
    </form>
    <div className="flex flex-col items-center ml-4">
        <div className="flex items-center p-4 mb-4 bg-white rounded shadow">
          <label className="mr-2">Font</label>
          <select
            value={font}
            onChange={(e) => setFont(e.target.value)}
            className="p-1 border rounded"
          >
            <option value="Arial">Arial</option>
            <option value="Verdana">Verdana</option>
            <option value="Times New Roman">Times New Roman</option>
          </select>
        </div>
        <div className="flex item-center mt-4 p-4 mb-4 bg-white rounded shadow">
        <div className="flex items-center">
          <label className="mr-2">Color</label>
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="w-8 h-8 p-0 border-none"
          />
        </div>
        <div className="flex items-center ml-2">
          <label className="mr-2">Size</label>
          <input
            type="number"
            value={size}
            onChange={(e) => setSize(e.target.value)}
            className="w-20 p-2 border rounded"
          />
        </div>
        </div>
      </div>
    </div>
    
  );
};

export default NoteForm;
