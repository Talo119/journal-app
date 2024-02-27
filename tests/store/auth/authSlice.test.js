import { authSlice, login, logout } from "../../../src/store/auth/authSlice"
import { authenticatedState, demoUser, initialState } from "../../fixtures/authFixtures";

describe('pruebas en el authSlice', () => { 
    test('should be return initial state', () => { 
        
        expect( authSlice.name ).toBe('auth');

        const state = authSlice.reducer( initialState, {} );

        expect(state).toEqual(initialState);
     });

     test('debe realizar la autenticacion', () => { 
        const state = authSlice.reducer( initialState, login(demoUser) );

        expect(state).toEqual({
            status: 'authenticated',//checking not-authenticated, authenticated
            uid: 'ABC123',
            email: 'demo@google.com',
            displayName: 'Demo User',
            photoURL: 'https://demo.jpg',
            errorMessage: null,
        });
      });

      test('debe de realizar el logout sin argumentos', () => { 
        const state = authSlice.reducer( authenticatedState, logout() );
        console.log(state);
        expect(state).toEqual({
            status: 'not-authenticated',
            uid: null,
            email: null,
            displayName: null,
            photoURL: null,
            errorMessage: undefined,
        });
       });

       test('debe de realizar el logout y mostrar mensaje de error', () => { 
        const state = authSlice.reducer( authenticatedState, logout({errorMessage:"Prueba de error."}) );
        console.log(state);
        expect(state).toEqual({
            status: 'not-authenticated',
            uid: null,
            email: null,
            displayName: null,
            photoURL: null,
            errorMessage: "Prueba de error.",
        });
       });
 })