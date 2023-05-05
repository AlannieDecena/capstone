# capstone

Overview:

My project is investigating  the lack of accessible and user-friendly tools for individuals to track and monitor their mental health. With the increasing prevalence of mental health concerns worldwide, it is becoming more important than ever to prioritize mental well-being and find effective ways to manage stress, anxiety, depression, and other related issues.

The aim of this project was to create a customizable mood tracker application that helps users monitor their progress and achieve their goals. Although some features were not included due to time constraints, the software achieved its objectives of documenting moods, displaying weekly results, and providing a space for notes and goals. Further improvements are still possible.


Here is how you can use my applicatioin 

Pre-requisites: Installation 
(download the package that is suited for your device eg: mac or windows)
	Node.js & NPM : 
	https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
	MySQL: https://dev.mysql.com/doc/refman/5.7/en/macos-installation-pkg.html
	
Setting up the Application:
Cloning: Front and Backend will be available on a github repository 
https://github.com/AlannieDecena/capstone
Backend: Install the Backend: cd backend & then npm install
Frontend: cd frontend & then npm install
	Once installation is complete move on to setting up the database
  
Setting up the Database:
In VS code create a “.env file” in the “backend” folder
containing this information:
DB_NAME=moodTracker
DB_USER=*your mysql username
DB_PASSWORD=*your mysql password 
DB_HOST=127.0.0.1
DB_PORT=3306
PORT=8001

In mySQL workbench, create a new schema called ‘moodTracker’
Execute the SQL query in the ‘moodTracker’ file in this repository file to set up your database table.
In your backend terminal enter “npm start” and for the frontend enter “npm run dev”. Now your moodTracker is ready to go!
