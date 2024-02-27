import { startNewNote } from "../../../src/store/journal/thunks";


describe('Pruebas en Journal thunks', () => { 
    const dispatch = jest.fn();
    const getState = jest.fn();
    beforeEach(() => jest.clearAllMocks());


    test('should create a new blank note', async() => { 
        const uid = 'TEST-UID';

        getState.mockReturnValue({auth:{uid: uid}});
        await startNewNote()(dispatch, getState);

        
     })
 })