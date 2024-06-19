# Mini Project - Student Management

react-router-dom
@types/react

/login
/admin

/admin/*
/admin/dashboard
/admin/students

authSaga
- if logged in, watch LOGOUT
- else watch LOGIN

LOGIN
- call login API to get token + user infor
- set token to local storage
- redirect to admin page

LOGOUT
- clear token from local storage
- redirect to login page

authSlice
authSaga