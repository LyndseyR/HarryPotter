// Mobile Nav Menu
$(document).ready(function(){

  $('.toggle').click(function(){
    $('.show-toggle').slideToggle();
  });
});


// JS for quiz
$(document).ready(function(){
  });



function quizQuestion(question, answer1, answer2, answer3, answer4) {
  this.question = $('#question').html(question);
  this.answer1 = $('#answer1').html(answer1);
  this.answer2 = $('#answer2').html(answer2);
  this.answer3 = $('#answer3').html(answer3);
  this.answer4 = $('#answer4').html(answer4);
};

var quiz = [{
  question: "What did Harry see the first time he looked in the mirror of Erised?",
  answer1: "His family",
  answer2: "Winning the Quidditch cup",
  answer3: "Becoming an Auror",
  answer4: "Beating Hermione Granger on the Charm final"
},{
  question:"How many ingredients are in a Polyjuice Potion?",
  answer1: "3",
  answer2: "4",
  answer3: "7",
  answer4: "13"
},{
  question:"Who killed Sirius Black?",
  answer1:"Bellatrix Lestrange",
  answer2: "Severus Snape",
  answer3: "Lucius Malfoy",
  answer4: "Peter Pettigrew"
},{
  question:"How many Horcruxes did Voldemort make?",
  answer1:"3",
  answer2: "4",
  answer3: "7",
  answer4: "8"
},{
  question:"Who won the world cup in the Goblet of Fire?",
  answer1:"Ireland",
  answer2:"Bulgaria",
  answer3:"Peru",
  answer4:"England"
},{
  question:"Which of these is not a Wizarding School of Magic?",
  answer1:"Maroborough Academy of Fine Magic",
  answer2:"Hogwarts School of Witchcraft and Wizardy",
  answer3:"Beauxbatons Academy of Magic",
  answer4:"Durmstrang Institue"
},{
  question:"How many staircases does Hogwarts have?",
  answer1:"127",
  answer2:"142",
  answer3:"158",
  answer4:"187"
},{
  question:"How old was Nicolas Flamel when he died?",
  answer1:"379",
  answer2:"499",
  answer3:"665",
  answer4:"He never died"
},{
  question:"What is Gryffindor’s ghost Nearly Headless Nick full name?",
  answer1:"Sir Nicholas de Mimsy-Porpington",
  answer2:"Sir Nicholas Flaumei Carte",
  answer3:"Sir Nicholas HavdeIe",
  answer4:"Sir Nicholas au Charte Mapede"
},{
  question:"What was Ron’s position on the Quidditch team?",
  answer1:"Beater",
  answer2:"Chaser",
  answer3:"Keeper",
  answer4:"Seeker"
}];

var q = 0;
var length = quiz.length;

  quizQuestion(quiz[q].question, quiz[q].answer1, quiz[q].answer2, quiz[q].answer3, quiz[q].answer4);

  $('.test').click(function(){
    q++

      if(q === length){
        window.location = "end.html";
      } else {
          quizQuestion(quiz[q].question, quiz[q].answer1, quiz[q].answer2, quiz[q].answer3, quiz[q].answer4);
      }
  });





// quiz = quiz.map(function(x){
//   return new quizQuestion(x.question, x.answer1, x.answer2, x.answer3, x.answer4);
// });
  // $('.right').click(function(){
  //   window.location='end.html';
  // });
  // $('.wrong').click(function(){
  //   wrong++;
  //   window.location = 'end.html';
  // });
  // $('#gotWrong').html(wrong);
