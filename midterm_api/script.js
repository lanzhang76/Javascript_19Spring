

let button = document.getElementById("submit");
button.addEventListener("click",callback);

var input = 'goat';
var limit = {
  limit:5
}
function callback(){
nounProject.getIconsByTerm(input, limit, getData);
  function getData(err, data) {
      if (!err) {
          console.log(data.icons);
      }
  }
}
