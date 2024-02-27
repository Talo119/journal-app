import { signInWithGoogle } from "../../../src/firebase/providers";
import { checkingCredentials, login, startGoogleSignIn } from "../../../src/store/auth";
import { checkingAuthentication } from "../../../src/store/auth/thunks"
import { demoUser } from "../../fixtures/authFixtures";

jest.mock('../../../src/store/auth/thunks');

describe('Pruebas en auth thunks', () => { 
    const dispatch = jest.fn();
    
    beforeEach(()=> jest.clearAllMocks());

    test('debe validar el checkingCredentials', async() => { 
        
        await checkingAuthentication()(dispatch);

        expect(dispatch).toHaveBeenCalledWith( checkingCredentials());

     });

     test('startGoogleSignIn debe llamar checkingCredentials y login - exito', async() => { 
        const loginData = { ok:true, ...demoUser };
        await signInWithGoogle(loginData);

        await startGoogleSignIn()(dispatch);

        expect( dispatch).toHaveBeenCalledWith( checkingCredentials() );
        expect( dispatch).toHaveBeenCalledWith( login(loginData) );


      });
 })