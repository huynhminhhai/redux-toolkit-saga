import { Box, Button, Container, Theme, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useAppDispatch } from 'app/hooks'
import { authActions } from 'features/auth/authSlice'

const useStyles: any = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh'
  }
}))

const LoginPage = () => {
  const classes = useStyles()
  const dispatch = useAppDispatch()

  const handleLogin = () => {
    // TODO: get username and password from login form
    dispatch(
      authActions.login({
        username: 'huynhminhhai',
        password: '123456789'
      })
    )
  }

  return (
    <div className={classes.root}>
      <Container maxWidth='xl'>
        <Typography variant='h5' component='h1' color='primary' textAlign='center'>
          Student Management
        </Typography>
        <Box mt={4} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <Button variant='contained' color='primary' onClick={handleLogin}>
            Fake Login
          </Button>
        </Box>
      </Container>
    </div>
  )
}

export default LoginPage
