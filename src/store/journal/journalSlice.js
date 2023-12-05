import { createSlice } from '@reduxjs/toolkit'
import { loadNotes } from '../../helpers/loadNotes';

export const journalSlice = createSlice({
    name:'journal',
    initialState:{
        isSaving: false,
        messageSaved: '',
        notes:[],
        active:null

    },
    reducers:{
        savingNewNote: (state) =>{
            state.isSaving = true;
        },
        addNewEmptyNote: (state, action) =>{
            state.notes.push(action.payload);
            state.isSaving = false;
        },
        setActiveNote: (state, action) =>{
            state.active = action.payload;
            state.messageSaved = '';
        },
        setNotes: (state, action) =>{
            state.notes = action.payload;
        },
        setSaving: (state) =>{
            state.isSaving = true;
            state.messageSaved = '';
        },
        updateNote: (state, action) =>{
            state.notes = state.notes.map( note =>{
                if (note.id === action.payload.id) {
                    return action.payload;
                }
                return note;
            } )
            state.isSaving = false;

            state.messageSaved = `${action.payload.title}, actualizada correctamente.`
        },
        deleteNoteById: (state, action) =>{

        },
    }
});

export const {
    savingNewNote,
    addNewEmptyNote,
    setActiveNote,
    setNotes,
    setSaving,
    updateNote,
    deleteNoteById
 } = journalSlice.actions;