import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { 
    addNewEmptyNote, 
    savingNewNote, 
    setActiveNote, 
    setNotes, 
    setPhotosToActiveNote, 
    setSaving, 
    updateNote, 
    deleteNoteById 
} from "./journalSlice";
import { loadNotes } from "../../helpers/loadNotes";
import { fileUpload } from "../../helpers/fileUpload";

export const startNewNote = () =>{
    return async( dispatch, getState ) => {
        dispatch( savingNewNote() )
        const {uid} = getState().auth;
        //uid usuario
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }

        const newDoc = doc( collection( FirebaseDB, `${uid}/journal/notes` ) );
        await setDoc(newDoc, newNote);

        newNote.id = newDoc.id;
        dispatch( addNewEmptyNote(newNote) )
        dispatch( setActiveNote(newNote) )
    }
}

export const startLoadingNotes = () =>{
    return async ( dispatch, getState ) =>{
        const { uid } = getState().auth;
        if (!uid) throw new Error('El UID del usuario no existe.')

        //dispatch( setNotes(uid) )
        const notes = await loadNotes( uid );
        dispatch( setNotes(notes) );

    }
}

export const startSaveNote = () => {
    return async (dispatch, getState) => {

        dispatch( setSaving() );

        const { uid } = getState().auth;
        const { active:note } = getState().journal;

        const noteToFireStore = {...note};
        delete noteToFireStore.id;
        // delete noteToFireStore.imageUrls;
        console.log({note})
        const docRef = doc( FirebaseDB,  uid, 'journal', 'notes', note.id);

        console.log(docRef.id);
        await setDoc(docRef, noteToFireStore)
        noteToFireStore.id = note.id
        dispatch( updateNote(noteToFireStore));

    }
}

export const startUploadingFiles = ( files= []) => {
    return async (dispatch) =>{
        dispatch( setSaving() );
        
        const fileUploadPromises = [];

        for (const file of files) {
            fileUploadPromises.push( fileUpload(file) );
        }

        const photosUrls = await Promise.all( fileUploadPromises );
        console.log(photosUrls);
        dispatch( setPhotosToActiveNote( photosUrls ) );
    }
}

export const startDeletingNote = () => {
    return async(dispatch, getSate) =>{
        const { uid } = getSate().auth;
        const { active: note } = getSate().journal;

        const docRef = doc( FirebaseDB,  uid, 'journal', 'notes', note.id);
        await deleteDoc(docRef);

        dispatch( deleteNoteById(note.id) );

    }
}