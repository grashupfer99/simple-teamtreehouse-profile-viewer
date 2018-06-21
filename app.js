// Using Node.js to connect to Treehouse's API to get profile information and printing it out

// Require profile.js
const profile = require('./profile');

// cuts all args starting from 2 and until the end
let [topic, ...usernames] = process.argv.slice(2);
for(let username of usernames){
    profile.get(topic, username);
}

/* 
*** Available Topics ***
HTML
CSS
Design
JavaScript
Ruby
PHP
WordPress
iOS
Android
'Development Tools'
Business
Python
Java
'Digital Literacy'
'Game Development'
'C#'
Databases
'Vitrual Reality'
'Data Analysis'
APIs
Security
Go
'Quality Assurance'
*/