var fs = require("fs");
var data = fs.readFileSync("people.json");
var person = JSON.parse(data);

var express = require("express");
var app = express();
var server = app.listen(3000, listen);
//Listening Call
function listen() {
  console.log("I'm listening...");
}

//calling out the folder that's showing the static web
app.use(express.static("website"));

//create a route that shows up with in vcation path
//fucntion with the two parameters: request is the input, and response is the output
app.get("/add/:name/:date?/:happy?/", addPerson);
function addPerson(request, response) {
  let data = request.params;
  let name = data.name;
  let time = data.date;
  let happy = data.happy;
  let reply;
  if (!time || !happy) {
    reply = "You haven't entered the date or your happy level!";
    response.send(reply);
    alert(reply);
  } else {
    //Now writing the data into the json file
    //person[name] = time; //This will make "'Lan': 2018-02-02"
    person[name] = {
      name: name,
      date: time,
      happyLevel: happy
    };
    var jsonFormatData = JSON.stringify(person, null, 2);
    fs.writeFile("people.json", jsonFormatData, finished);
    // reply = "Thank you for joining, " + name + ", on " + time;
  }

  function finished(err) {
    reply = {
      status: "that person is added to the pool",
      name: name,
      dateOFvacation: time
    };
    response.send(reply);
  }
  function overall(err) {
    console.log(jsonFormatDate);
  }
}

//create a new route that shows the list
app.get("/personList", showList);
function showList(request, response) {
  response.send(person);
}

//create a new route that enables you to search for the person
app.get("/searchPeople/:word", searchPeople);
function searchPeople(request, response) {
  //remember to call out params
  let personName = request.params.word;
  let reply;
  if (person[personName]) {
    reply = {
      status: "exist",
      name: personName
    };
  } else {
    reply = {
      status: "That guy is not in the pool yet",
      name: personName
    };
  }
  response.send(reply);
}
