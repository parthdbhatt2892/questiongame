var readline = require('readline-sync');

var qas=[

 {

  question:"What is your fav color?",
  answer:"Blue",
},
{
  question:"Where do you live?",
  answer:"Las Vegas"
},
{
  question:"Who is your hero?",
  answer:"MS Dhoni"
}
]

var highestScore = [{
  name:"Parth",
  score:"3"},
  {name:"Bhatt",
  score:"4"
  }
}]

var user = readline.question("What is your Name? ");

console.log("Welcome "+user+"!!");

var intial;
var score=0;

function questionans (question,answer)
{ 
  
  if (answer === qas[initial].answer){
   score++;
   console.log("You are correct !!");
   console.log("You score is: "+score);
  }
  else 
  {
    console.log("You are wrong!");
    console.log("You score is: "+score);
  }

  console.log("\n**********************\n")
}

for (initial=0;initial<qas.length;initial++)
{
  var ans=readline.question(qas[initial].question);

  questionans(qas[initial],ans)


}
