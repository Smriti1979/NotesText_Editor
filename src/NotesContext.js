import React, { useReducer, createContext } from 'react';

const initialState = {
  notes: [],
  past: [],
  future: [],
};

const notesReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return {
        ...state,
        past: [...state.past, state.notes],
        notes: [...state.notes, action.payload],
      };
    case 'EDIT_NOTE':
      return {
        ...state,
        past: [...state.past, state.notes],
        notes: state.notes.map((note, index) =>
          index === action.payload.index ? action.payload.note : note
        ),
      };
    case 'DELETE_NOTE':
      return {
        ...state,
        past: [...state.past, state.notes],
        notes: state.notes.filter((_, index) => index !== action.payload),
      };
    case 'UNDO':
      if (state.past.length === 0) return state;
      return {
        ...state,
        future: [state.notes, ...state.future],
        notes: state.past[state.past.length - 1],
        past: state.past.slice(0, -1),
      };
    case 'REDO':
      if (state.future.length === 0) return state;
      return {
        ...state,
        past: [...state.past, state.notes],
        notes: state.future[0],
        future: state.future.slice(1),
      };
    default:
      return state;
  }
};

export const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(notesReducer, initialState);

  return (
    <NotesContext.Provider value={{ state, dispatch }}>
      {children}
    </NotesContext.Provider>
  );
};