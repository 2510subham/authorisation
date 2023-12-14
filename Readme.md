# Auth App

1)clone the repo and run npm install
2)then, npm run start

# Tech stack used

1)MongoDB as DB,Express to set up the server

# Routes

1)to check the setup ,run "/ping"

## Auth Routes

1)POST -> /register -> give email,password parameter in body

2)POST -> '/login' -> give email,password parameter in body 

3)POST -> '/forgot-password', ->give email,newPassword in body

4)GET ->'/admin' -> to check middleware(validatingtoken,admin check)

# Logging

created logging feature using **winston** 
