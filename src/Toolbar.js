// src/Toolbar.js
import React, { useContext } from 'react';
import { NotesContext } from './NotesContext';
import undo from './Assets/undo.svg';
import redo from './Assets/redo.svg';

const Toolbar = () => {
  const { dispatch } = useContext(NotesContext);

  return (
    <div className="flex justify-between">
      <button onClick={() => dispatch({ type: 'UNDO' })} className="px-4 py-2 text-white">
        <img src={undo} alt='undo'></img>
      </button>
      <button onClick={() => dispatch({ type: 'REDO' })} className="px-4 py-2 text-white ">
      <img src={redo} alt='undo'></img>
      </button>
    </div>
  );
};

export default Toolbar;
