//Lan Zhang March 3rd, 2019

const button = document.getElementById("random");
button.addEventListener("click",getUserData);

function getUserData(){
  const url = "https://randomuser.me/api/?results=10";
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function(){

      if (xhr.readyState === 4 ) {
        if (xhr.status === 200) {
        var feed = JSON.parse(xhr.responseText);
        console.log(feed.results);

        for (i in feed.results){
          let person = feed.results[i];
          let area = document.createElement("div");
          area.style.display = "inline-block";
          area.style.padding = "20px";
          let info = document.createElement("p");
          let img = document.createElement("img");
          img.src = person.picture.large;
          info.innerHTML = person.name.first + " " + person.name.last;
          area.appendChild(info);
          area.appendChild(img);
          document.getElementById("display").appendChild(area);
        }

        } else {
        document.getElementById("display").innerHTML = "There was an error";
              }
      }

  }
    xhr.open("GET",url,true);
    xhr.send(null);
};
