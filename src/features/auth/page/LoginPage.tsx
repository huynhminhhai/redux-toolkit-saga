import { Box, Button, Container, Theme, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

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

  return (
    <div className={classes.root}>
      <Container maxWidth='xl'>
        <Typography variant='h5' component='h1' color='primary' textAlign='center'>
          Student Management
        </Typography>
        <Box mt={4} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <Button variant='contained' color='primary'>
            Fake Login
          </Button>
        </Box>
      </Container>
    </div>
  )
}

export default LoginPage
