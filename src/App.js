import React, { useContext } from 'react';
import Note from './Note';
import NoteForm from './NoteForm';
import { NotesContext } from './NotesContext';

const App = () => {
  const { state, dispatch } = useContext(NotesContext);

  return (
    <div className="min-h-screen bg-custom-bg bg-cover bg-center flex items-center justify-center">
      <div className="w-[70%] max-w-screen-lg p-4">
        <NoteForm />
        <div className="mt-4">
          {state.notes.map((note, index) => (
            <Note
              key={index}
              note={note}
              onEdit={(text) =>
                dispatch({
                  type: 'EDIT_NOTE',
                  payload: { index, note: { ...note, text } },
                })
              }
              onDelete={() => dispatch({ type: 'DELETE_NOTE', payload: index })}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
