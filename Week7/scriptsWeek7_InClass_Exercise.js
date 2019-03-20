//Lan Zhang March 5th, 2019

const button = document.getElementById("random");
button.addEventListener("click",getUserData);

function getUserData(){
  const url = "https://randomuser.me/api/?results=10";

  fetch(url)
    .then(function(response){
      return response.json();
    })
    // .then(function(ok){
    //   return ok.results;//Don't call this because this is not a promise
    //   console.log(ok.results);
    // }) //THIS IS ONLY DATA 
    .then(function(haha){
      for (i in haha.results){
        let person = haha.results[i];
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
    })
    .catch(function(error){
       document.getElementById("display").innerHTML = "There was an error";
    })
}


//
//
//
//   xhr.onreadystatechange = function(){
//
//       if (xhr.readyState === 4 ) {
//         if (xhr.status === 200) {
//         var feed = JSON.parse(xhr.responseText);
//         console.log(feed.results);
//
//         for (i in feed.results){
//           let person = feed.results[i];
//           let area = document.createElement("div");
//           area.style.display = "inline-block";
//           area.style.padding = "20px";
//           let info = document.createElement("p");
//           let img = document.createElement("img");
//           img.src = person.picture.large;
//           info.innerHTML = person.name.first + " " + person.name.last;
//           area.appendChild(info);
//           area.appendChild(img);
//           document.getElementById("display").appendChild(area);
//         }
//
//         } else {
//         document.getElementById("display").innerHTML = "There was an error";
//               }
//       }
//
//   }
//     xhr.open("GET",url,true);
//     xhr.send(null);
// };
