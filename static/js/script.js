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
  answer4: "Beating Hermione Granger on the Charm final",
  selected: 0,
  right: 1
},{
  question:"How many ingredients are in a Polyjuice Potion?",
  answer1: "3",
  answer2: "4",
  answer3: "7",
  answer4: "13",
  selected: 0,
  right: 3

},{
  question:"Who killed Sirius Black?",
  answer1: "Bellatrix Lestrange",
  answer2: "Severus Snape",
  answer3: "Lucius Malfoy",
  answer4: "Peter Pettigrew",
  selected: 0,
  right: 1
},{
  question:"How many Horcruxes did Voldemort make?",
  answer1:"3",
  answer2:"4",
  answer3:"7",
  answer4:"8",
  selected: 0,
  right: 3
},{
  question:"Who won the world cup in the Goblet of Fire?",
  answer1:"Ireland",
  answer2:"Bulgaria",
  answer3:"Peru",
  answer4:"England",
  selected: 0,
  right: 1
},{
  question:"Which of these is not a Wizarding School of Magic?",
  answer1:"Maroborough Academy of Fine Magic",
  answer2:"Hogwarts School of Witchcraft and Wizardy",
  answer3:"Beauxbatons Academy of Magic",
  answer4:"Durmstrang Institue",
  selected: 0,
  right: 1
},{
  question:"How many staircases does Hogwarts have?",
  answer1:"127",
  answer2:"142",
  answer3:"158",
  answer4:"187",
  selected: 0,
  right: 2
},{
  question:"How old was Nicolas Flamel when he died?",
  answer1:"379",
  answer2:"499",
  answer3:"665",
  answer4:"He never died",
  selected: 0,
  right: 3
},{
  question:"What is Gryffindor’s ghost Nearly Headless Nick full name?",
  answer1:"Sir Nicholas de Mimsy-Porpington",
  answer2:"Sir Nicholas Flaumei Carte",
  answer3:"Sir Nicholas HavdeIe",
  answer4:"Sir Nicholas au Charte Mapede",
  selected: 0,
  right: 1
},{
  question:"What was Ron’s position on the Quidditch team?",
  answer1:"Beater",
  answer2:"Chaser",
  answer3:"Keeper",
  answer4:"Seeker",
  selected: 0,
  right: 3
}];

// Checking to see if what user clicked is right
var right = 0;

$('.one').click(function(){
  quiz[q].selected = 1;
  if (quiz[q].selected === quiz[q].right){
    right += 1;
    console.log(right);
  }
  $('#rightAnsw').html('You got ' + right + ' right');
});

$('.two').click(function(){
  quiz[q].selected = 2;
  if (quiz[q].selected === quiz[q].right){
    right += 1;
    console.log(right);
  }
  $('#rightAnsw').html('You got ' + right + ' right');
});

$('.three').click(function(){
  quiz[q].selected = 3;
  if (quiz[q].selected === quiz[q].right){
    right += 1;
    console.log(right);
  }
  $('#rightAnsw').html('You got ' + right + ' right');
});

$('.four').click(function(){
  quiz[q].selected = 4;
  if (quiz[q].selected === quiz[q].right){
    right += 1;
    console.log(right);
  }
  $('#rightAnsw').html('You got ' + right + ' right');
});

console.log(right);



var q = 0;


quizQuestion(quiz[q].question, quiz[q].answer1, quiz[q].answer2, quiz[q].answer3, quiz[q].answer4);

$('.test').click(function(){
  q++;

  if(q === quiz.length){

    // window.location = "end.html";
    // Don't redirect, show hidden container. Or pass variable through the url to store the right var
    $('.question-container').hide();
    $('.end-container').show();
  } else {
      quizQuestion(quiz[q].question, quiz[q].answer1, quiz[q].answer2, quiz[q].answer3, quiz[q].answer4);
  }
});
