# note application

Build a Restful CRUD API for a simple Note-application using Node.js, Express and MongoDB.

# Simple Note application API using the Nodejs, express, mongodb

# If you want to run this appication you need to setup following things 
1) node 
2) mongodb 

#vMongodb setup : To install mongodb refer URL https://docs.mongodb.com/manual/installation/

# For linux Ubunto 16 env :

1) sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 9DA31620334BD75D9DCB49F368818C72E52529D4

2) echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/4.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.0.list

3) sudo apt-get update

4) sudo apt-get install -y mongodb-org

5) echo "mongodb-org hold" | sudo dpkg --set-selections 
    echo "mongodb-org-server hold" | sudo dpkg --set-selections 
    echo "mongodb-org-shell hold" | sudo dpkg --set-selections 
    echo "mongodb-org-mongos hold" | sudo dpkg --set-selections 
    echo "mongodb-org-tools hold" | sudo dpkg --set-selections

#to start and stop mongodb

sudo service mongod start  
sudo service mongod stop 

# Download or take clone of application.

After taking clone go on path of folder => Note-App/backend-api-note/

#to add defult users run following command 

Run: mongo 127.0.0.1/test mongo.js

#And do following steps

1. Install dependencies

npm install

2. Run Server

node server.js

You can browse the api's at <http://localhost:3000>

## Note : 
 
 You can use the postman to test the API
