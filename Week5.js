
const  chatbot = {
 questions: ["What are you?","What's your name?",
 "Where do you live?","What do you like?","How do you eat?"],

 answers: ["Purple Star Fish", "Asteroidea, Echinoderms/Phylum Echinodermata" , "I live underwater", "I like being in the shade","I have a stomach that comes out that digiest food"],

  askMe: function(){
  let ask = prompt("Ask me anything");
  let pattern1 = /are/;
  let pattern2 = /name/;
  let pattern3 = /live/;
  let pattern4 = /like/;
  let pattern5 = /eat/;

  let ans;

    if (ask.match(pattern1) == "are"){
      ans = chatbot.answers[0];
    } else if (ask.match(pattern2) == "name"){
      ans = chatbot.answers[1];
    } else if (ask.match(pattern3) == "live"){
      ans = chatbot.answers[2];
    } else if (ask.match(pattern4) == "like"){
      ans = chatbot.answers[3];
    } else if (ask.match(pattern5) == "eat"){
      ans = chatbot.answers[4];
    }
      return ans;
      console.log(ans);
    }
};

chatbot.askMe();

/*
a prompt will come out then you input a question.
then console log will output the answer.
*/
