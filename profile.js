// Require https module
const https = require('https');
// Require http module for status codes
const http = require('http');
// Require print.js
const print = require('./print');

function getProfile(topic, username) {
    try {
        const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {

            if (response.statusCode === 200) {
                // Read the data
                let body = "";
                // Convert data to string
                response.on('data', data => body += data.toString() );
                // end event handler when all data is received 
                response.on('end', () => {
                    try {
                          // Parse the data
                          const profile = JSON.parse(body);
                          // Print the data
                        print.printMsg(
                            username, 
                            profile.badges.length, 
                            profile.points, topic);                        
                        } catch (error) {
                        print.printErr(error);
                    }
                });
            } else {
                const message = `
                    There was an error getting the profile for 
                    ${username} (${http.STATUS_CODES[response.statusCode]})`;
                const statusCodeError = new Error(message);
                print.printErr(statusCodeError);
                //printError(message);
            }
        });
        // request to the api
        request.on("error", print.printErr);
    } catch (error) {
        print.printErr(error);
    }
}

// make getProfile available upon export 
module.exports.get = getProfile;