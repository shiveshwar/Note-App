# Note-App
Simple Note application API using the Nodejs, express,  mongodb

If you want to run this appication you need to setup following things
  its nodejs , mongodb and react base application
  
  To run this application you need to install node server, mongodb  
  
  Mongodb setup : To install mongodb refer URL https://docs.mongodb.com/manual/installation/
  
  For linux Ubunto 16 env :
  
  1) sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 9DA31620334BD75D9DCB49F368818C72E52529D4
  2) echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/4.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.0.list
  3) sudo apt-get update
  4) sudo apt-get install -y mongodb-org
  5)  echo "mongodb-org hold" | sudo dpkg --set-selections
    echo "mongodb-org-server hold" | sudo dpkg --set-selections
    echo "mongodb-org-shell hold" | sudo dpkg --set-selections
    echo "mongodb-org-mongos hold" | sudo dpkg --set-selections
    echo "mongodb-org-tools hold" | sudo dpkg --set-selections
    
  6) to start and stop mongodb 
  
    sudo service mongod start  
    sudo service mongod stop 
    
  
1) Download or take clone of application. 

2) After taking clone go on path of folder => Note-App/backend-api-note/

    And run following command 
    
    => npm install
    => node server.js  //to up the backend server api application.
    
    
   Note: you can test api using postman
    
    
    
   
