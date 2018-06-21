// Printing methods

// Print Error Messages
function printError(error) {
    console.error(error.message);
}

// Function to print message to console
function printMessage(username, badgeCount, points, topic) {
    const message = `${username} has ${badgeCount} total badge(s) and ${points[topic]} points in ${topic}`;
    console.log(message);
}

// make printError, printMessage available upon export
module.exports = {
  printMsg: printMessage,
  printErr: printError
};