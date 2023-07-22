// Server setup (backend)

const http = require("http");

const hostname = "0.0.0.0";
const port = 8000;

var answer = "";

// Webpage code (frontend)

const server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
 
  if (isFinite(answer)) {
    res.end(`Your most recent answer is: ${answer}\n\n`);
  } 
    // Reactive state is needed here to update the answer displayed on the webpage when the user inputs the equation

  else {
    res.end('"For what shall it profit a man, if he talks about dividing by 0, and suffer the loss of his soul?" - Jesus');
  }

  // Included a Jesus quote that is displayed on the webpage if the user tries to divide by zero for the third equation to further justify why this is the Holy Calculator :)
  
}); 

// Console code

server.listen(port, hostname, function () {
  console.log(`Server running at http://${hostname}:${port}/`);
});

var count = 0;

while (count < 3) {
  var equation = prompt("Enter your equation here");

answer=eval(equation); 

// Reassigning answer variable to the answer of the user's equation so the answer can be displayed on the webpage

console.log(`\n${equation}=${answer}`)

// console.log adds the equation to the console and displays it in the console (serves as a "database")

  count+=1; 
  
  // for the webpage to load, the input and console.log statements must finish first, so I placed a limit on the number of calculations
}