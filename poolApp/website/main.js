let userName;
let userDate;
let userHappy;
let videoURL = new Array();

function updateTime() {
  var minute = new Date().getMinutes();
  let second = new Date().getSeconds();
  let now = Math.floor(Date.now() / 1000);
}
previewPic();
//---------------P5-----------------//

function setup() {
  let width = windowWidth / 3.1;
  let height = windowHeight / 2.9;
  let canvas = createCanvas(width, height);
  resizeCanvas(windowWidth / 3.12, windowHeight / 2.9);
  canvas.parent("pool");
  drawData();
  let button = select("#submit");
  button.mousePressed(checkName);
  //System Info
  var time = 0;
  canvas.mouseOver(drawPoolInstruction);
}

function drawPoolInstruction() {
  fill("#ef833a");
  noStroke();
  rect(0, 0, canvas.width, 50);
  if (windowWidth >= 1500) {
    textSize(15);
  } else {
    textSize(13);
  }
  fill(255);
  text("It's important to keep a happy relationship with everyone.", 10, 18);
  text("Click on your coworker's avatar to make them happy.", 10, 38);
}

function outside() {
  fill("#f9c27a");
  noStroke();
  rect(0, 0, canvas.width, 50);
}

function draw() {
  let seconds = Math.floor(millis() / 1000);
  let minutes = Math.floor(seconds / 60);
  let system;
  if (minutes >= 1 && minutes < 2) {
    system = "You've been on the happy track for " + minutes + " minute.";
  } else if (minutes >= 2 && minutes <= 8) {
    system = "You've been on the happy track for " + minutes + " minutes.";
  } else if (minutes < 1) {
    system = "You've been on the happy track for " + seconds + " seconds";
  } else if (minutes > 8) {
    system = "You've been on the happy track for " + minutes + " minutes.";
    warning();
  }
  document.getElementById("systemText").innerHTML = system;
}

function warning() {
  let warningPage = select("#warningPage");
  warningPage.style("display", "block");
}

function drawData() {
  background("#f9c27a");
  let data = loadJSON("/personList", gotData);
}

let persons = [];
function gotData(data) {
  var people = Object.keys(data);
  for (let i = 0; i < people.length; i++) {
    var name = people[i]; //string
    var time = data[name].date;
    var happyLevel = data[name].happyLevel;
    if (windowWidth < 1500 && windowWidth >= 600) {
      //Laptop screen
      var xPos = 15 + (i % 6) * ((width - 10) / 6);
      var yPos = 80 + floor(i / 6) * (height / 5);
    } else if (windowWidth < 600) {
      var xPos = 10 + (i % 4) * ((width - 10) / 4);
      var yPos = 20 + floor(i / 4) * (height / 4);
    } else if (windowWidth >= 1500) {
      //LCD screen
      var xPos = 20 + (i % 7) * ((width - 10) / 7);
      var yPos = 80 + floor(i / 7) * (height / 6);
    }
    persons[i] = new person(name, happyLevel, time, xPos, yPos);
    persons[i].drawPeople();
  }
}

class person {
  constructor(name, happy, date, xPos, yPos) {
    this.x = xPos;
    this.y = yPos;
    this.name = name;
    this.happy = happy;
    this.date = date;
  }

  drawPeople() {
    var h, s, b;
    fill(255);
    if (windowWidth >= 1500) {
      textSize(13);
    } else {
      textSize(11);
    }
    text(this.name, this.x, this.y - 10);
    fill("#ef833a");
    text("Happy: " + this.happy, this.x, this.y + 2);
    h = random(0, 360);
    s = random(20, 80);
    b = 80;
    var hsb = "hsb" + "(" + h + "," + s + "%" + "," + b + "%" + ")";
    noStroke();
    colorMode(HSB, 360, 100, 100);
    fill(h, s, b);
    var posX = this.x + 30;
    var posY = this.y + 11;
    ellipse(posX, posY, 13, 13);
    rectMode(CENTER);
    rect(posX, posY + 10, 10, 20, 3);
    rectMode(CORNER);
    //arms
    stroke(h, s, b);
    strokeWeight(6);
    line(posX + 2, posY + 8, posX + 10, posY + 11);
    line(posX - 2, posY + 8, posX - 10, posY + 11);
    line(posX, posY + 12, posX - 6, posY + 26);
    line(posX, posY + 12, posX + 6, posY + 26);
    noStroke();
    colorMode(RGB, 255, 255, 255);
  }

  click() {
    var dis = dist(this.x + 30, this.y, mouseX, mouseY);
    if (dis < 20) {
      this.r = 255;
      this.g = 255;
      this.b = 255;
      var displayName = this.name;
      var happyLevel = this.happy;
      var date = this.date;
      console.log(displayName, happyLevel, this.date);
      noStroke();
      fill("#ef833a");
      rect(0, 0, width, 50);
      if (windowWidth >= 1500) {
        textSize(15);
      } else {
        textSize(13);
      }

      fill(255);
      text(
        displayName + " thanks you for encouraging her/him to be happier.",
        10,
        20
      );
      var newHappy = int(happyLevel) + 5;
      setTimeout(messageTwo, 3000);
      setTimeout(writeHappyLevel, 7000);
      setTimeout(displayNewProfile, 8000);

      function messageTwo() {
        // rect(18, 35, 800, 20);
        fill(255);
        text(
          displayName +
            "'s happy level will go up 5 points to " +
            newHappy +
            ".",
          10,
          37
        );
      }

      function writeHappyLevel() {
        loadJSON(
          "add/" + displayName + "/" + date + "/" + str(newHappy),
          finished,
          err
        );
        function finished(data) {
          drawData();
        }
        function err(error) {
          alert(error);
        }
      }

      function displayNewProfile() {
        console.log(displayName, userName);
        console.log(displayName, userDate, userHappy);
        if (displayName == userName) {
          userHappy = newHappy;
          displayProfile(displayName, userDate, userHappy);
          console.log(displayName, userDate, userHappy);
        } else {
          console.log("error");
        }
      }
    }
  }
}

function mousePressed() {
  for (let i = 0; i < persons.length; i++) {
    persons[i].click();
  }
}

function checkName() {
  let name = select("#nameInput").value();
  let dateInput = select("#dateInput").value();
  let happyLevel = select("#happyInput").value();
  loadJSON("searchPeople/" + name, check, err);
  function check(data) {
    let status = data.status;
    if (status === "exist" && happyLevel == null) {
      alert(
        "This person already exists in the system. Input your happy level and birthday now to log in."
      );
    } else if (status === "exist" && happyLevel) {
      submitInfo();
    } else {
      submitInfo();
    }
  }
  function err(error) {
    console.log(error);
  }
}

function submitInfo() {
  let name = select("#nameInput").value();
  let dateInput = select("#dateInput").value();
  let happyLevel = select("#happyInput").value();
  // console.log(name, dateInput, happyLevel);
  loadJSON("add/" + name + "/" + dateInput + "/" + happyLevel, finished, err);
  function finished(data) {
    // console.log(data);
    drawData();
    showPage();
    displayProfile(name, dateInput, happyLevel);
    displayDateInfo(dateInput);
  }
  function err(error) {
    let errorMessage =
      "Hi new user, you haven't entered your happy level or your birthday.";
    alert(errorMessage);
  }
}

function showPage() {
  let introPage = select("#introPage");
  introPage.style("display", "none");
}

function displayProfile(name, dateInput, happyLevel) {
  userName = name;
  userHappy = happyLevel;
  // console.log(userName, userDate, userHappy);
  let nameDisplay = "Employee Name: " + userName;
  let happyDisplay = "Current Happy Level: " + userHappy;
  document.getElementById("ProfileName").innerHTML = nameDisplay;
  document.getElementById("ProfileHappy").innerHTML = happyDisplay;
}

function displayDateInfo(dateInput) {
  userDate = dateInput;

  //weekend countdown
  var time = new Date();
  var timeLeftWeekend = 6 - time.getDay();
  var weekendM = timeLeftWeekend + " days till completing a weekly impact";

  //bday countdown
  var currentMonth = time.getMonth() + 1;
  var nowDay = new Date(
    time.getFullYear() + "-" + currentMonth + "-" + time.getDate()
  );
  var bday = new Date(userDate);
  var bdayMonth = bday.getMonth();
  var nextYear = time.getFullYear() + 1;
  var newBday;
  if (bday.getMonth() + 1 < currentMonth) {
    newBday = new Date(
      nextYear + "-" + (bday.getMonth() + 1) + "-" + bday.getDate()
    );
  } else if (
    bday.getMonth() + 1 == currentMonth &&
    bday.getDate() < time.getDate()
  ) {
    newBday = new Date(
      nextYear + "-" + (bday.getMonth() + 1) + "-" + bday.getDate()
    );
  } else {
    newBday = new Date(
      time.getFullYear() + "-" + (bday.getMonth() + 1) + "-" + bday.getDate()
    );
  }
  var oneDay = 24 * 60 * 60 * 1000;
  var diff = Math.round(
    Math.abs((newBday.getTime() - nowDay.getTime()) / oneDay)
  );

  var bdayM = diff + " days till celebrating your bday with us";

  // vacation date countdown
  var holiday = int(random(10, 250));
  var OOO = holiday + " days till redeeming a vacation";

  console.log(weekendM, bdayM, OOO);
  document.getElementById("weekendDate").innerHTML = weekendM;
  document.getElementById("bdayDate").innerHTML = bdayM;
  document.getElementById("vacationDate").innerHTML = OOO;
}
//Previw Set up:
function previewPic() {
  var previewPic = new Array();
  for (i = 0; i < 8; i++) {
    var fileName = "assets/videoIcons/Preview-" + i + ".png";
    var elementName = "preview" + i;
    document.getElementById(elementName).setAttribute("src", fileName);
  }
}

// VIDEO FUNCTION SETUP BELOW----------------------------------------

videoURL = [
  "https://onelineplayer.com/player.html?autoplay=true&loop=false&autopause=true&muted=false&url=https%3A%2F%2Fwww.dropbox.com%2Fs%2Fozz8zl12fbk79d8%2FPlant.mp4%3Fraw%3D1&poster=https%3A%2F%2Fwww.dropbox.com%2Fs%2Fdesonv1fnfqc5b0%2Factivity-Series.png%3Fraw%3D1&time=false&progressBar=false&playButton=false&overlay=true&muteButton=false&fullscreenButton=false&style=light&logo=false&quality=720p",
  "https://onelineplayer.com/player.html?autoplay=true&loop=false&autopause=false&muted=false&url=https%3A%2F%2Fwww.dropbox.com%2Fs%2Fezt9s3jec877icz%2FWrist.mp4%3Fraw%3D1&poster=https%3A%2F%2Fwww.dropbox.com%2Fs%2Fdesonv1fnfqc5b0%2Factivity-Series.png%3Fraw%3D1&time=false&progressBar=false&playButton=false&overlay=true&muteButton=false&fullscreenButton=false&style=light&logo=false&quality=720p",
  "https://onelineplayer.com/player.html?autoplay=true&loop=false&autopause=false&muted=false&url=https%3A%2F%2Fwww.dropbox.com%2Fs%2Fzz79626fh1u0qlr%2FSelf-love.mp4%3Fraw%3D1&poster=https%3A%2F%2Fwww.dropbox.com%2Fs%2Fdesonv1fnfqc5b0%2Factivity-Series.png%3Fraw%3D1&time=false&progressBar=false&playButton=false&overlay=true&muteButton=false&fullscreenButton=false&style=light&logo=false&quality=720p",
  "https://onelineplayer.com/player.html?autoplay=true&loop=false&autopause=false&muted=false&url=https%3A%2F%2Fwww.dropbox.com%2Fs%2Fo3hdb7gpnuft53d%2FYoga.mp4%3Fraw%3D1&poster=https%3A%2F%2Fwww.dropbox.com%2Fs%2Fdesonv1fnfqc5b0%2Factivity-Series.png%3Fraw%3D1&time=false&progressBar=false&playButton=false&overlay=true&muteButton=false&fullscreenButton=false&style=light&logo=false&quality=720p",
  "https://onelineplayer.com/player.html?autoplay=true&loop=false&autopause=false&muted=false&url=https%3A%2F%2Fwww.dropbox.com%2Fs%2Fqw9epxjzv687ei6%2FImmune.mp4%3Fraw%3D1&poster=https%3A%2F%2Fwww.dropbox.com%2Fs%2Fdesonv1fnfqc5b0%2Factivity-Series.png%3Fraw%3D1&time=false&progressBar=false&playButton=false&overlay=true&muteButton=false&fullscreenButton=false&style=light&logo=false&quality=720p",
  "https://onelineplayer.com/player.html?autoplay=true&loop=false&autopause=false&muted=false&url=https%3A%2F%2Fwww.dropbox.com%2Fs%2Fir6m4h3gn6sj7wm%2Fnews.mp4%3Fraw%3D1&poster=https%3A%2F%2Fwww.dropbox.com%2Fs%2Fdesonv1fnfqc5b0%2Factivity-Series.png%3Fraw%3D1&time=false&progressBar=false&playButton=false&overlay=true&muteButton=false&fullscreenButton=false&style=light&logo=false&quality=720p"
];
var videoPick;
var activity1 = document.getElementById("activity1");
var activity2 = document.getElementById("activity2");
var activity3 = document.getElementById("activity3");
var activity4 = document.getElementById("activity4");
var activity5 = document.getElementById("activity5");
var activity6 = document.getElementById("activity6");

activity1.addEventListener("click", function() {
  console.log("Plays Eye Exercise");
  videoPick = videoURL[0];
  videoPlay();
  previewPic();
  playingNow("preview0");
});

activity2.addEventListener("click", function() {
  console.log("Plays Wrist Exercise");
  videoPick = videoURL[1];
  videoPlay();
  previewPic();
  playingNow("preview1");
});

activity3.addEventListener("click", function() {
  console.log("self-love");
  videoPick = videoURL[2];
  videoPlay();
  previewPic();
  playingNow("preview2");
});

activity4.addEventListener("click", function() {
  console.log("yoga");
  videoPick = videoURL[3];
  videoPlay();
  previewPic();
  playingNow("preview3");
});

activity5.addEventListener("click", function() {
  videoPick = videoURL[4];
  videoPlay();
  previewPic();
  playingNow("preview4");
});

activity6.addEventListener("click", function() {
  videoPick = videoURL[5];
  videoPlay();
  previewPic();
  playingNow("preview5");
});

function playingNow(preview) {
  var previewPlay = preview;
  var fileName = "assets/videoIcons/playing-18.png";
  document.getElementById(previewPlay).setAttribute("src", fileName);
}

function videoPlay() {
  var video = document.getElementById("video");
  video.setAttribute("src", videoPick);
  var newHappy = int(userHappy) + 10;
  videoWriteHappyLevel(newHappy);
  function videoWriteHappyLevel(newHappy) {
    loadJSON(
      "add/" + userName + "/" + userDate + "/" + str(newHappy),
      finished,
      err
    );
    function finished(data) {
      userHappy = newHappy;
      displayProfile(userName, userDate, userHappy);
    }
    function err(error) {
      alert(error);
    }
  }
}
