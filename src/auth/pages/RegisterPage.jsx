import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';

const formData = {
  email: 'carlos@google.com',
  password: '12345',
  displayName: 'Carlos Motiño'
}

const formValidations = {
  email: [ (value) => value.includes('@'), 'El correo debe tener una @'],
  password: [ (value) => value.length >= 6, 'El password debe tener más de 6 letras.'],
  displayName: [ (value) => value.length >= 1, 'El nombre es obligatorio.'],
  

}

export const RegisterPage = () => {  
  
  const { 
    formState, displayName, email, password, onInputChange, 
    isFormValid, displayNameValid, emailValid, passwordValid
   } =  useForm( formData, formValidations );

  console.log(isFormValid)
  const onSubmit = ( event ) => {
    event.preventDefault();
    console.log( formState );
  }

  return (
    <AuthLayout title='Register'>
      <h1>FormValid: { isFormValid ? 'Valido' : 'No Valido' } {displayName}</h1>
        <form onSubmit={ onSubmit }>
          <Grid container>
            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField
                label="Nombre completo"
                type='text'
                placeholder='Nombre completo'
                fullWidth
                name='displayName'
                value={displayName}
                onChange={ onInputChange }
                error={ !!displayNameValid }
                helperText={ displayNameValid }
              >

              </TextField>
            </Grid>

            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField
                label="Correo"
                type='email'
                placeholder='correo@google.com'
                fullWidth
                name='email'
                value={email}
                onChange={ onInputChange }
                error={ !!emailValid }
                helperText={ emailValid }
              >

              </TextField>
            </Grid>

            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField
                label="Contraseña"
                type='password'
                placeholder='Contraseña'
                fullWidth
                name='password'
                value={password}
                onChange={ onInputChange }
                error={ !!passwordValid }
                helperText={ passwordValid }
              />
            </Grid>

            <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
              <Grid item xs={ 12 } sm={ 6 }>
                <Button variant='contained' fullWidth type='submit'>
                  Crear cuenta
                </Button>
              </Grid>
            </Grid>

            <Grid container direction='row' justifyContent='end'>
              <Typography sx={{ mr: 1 }}>¿Ya tienes una cuenta?</Typography>
              <Link component={ RouterLink } color='inherit' to='/auth/login'>
                Ingresar
              </Link>
            </Grid>

          </Grid>
          
        </form>
    </AuthLayout>
    
  )
}
