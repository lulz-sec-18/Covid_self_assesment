//just for the button
function submitForm(e) {
    e.preventDefault();
    location.href = "quiz.html";
  }

  function show(count) {
    let question = document.getElementById("questions");
    let array = questions[count].options;
    console.log(array);
  output = `<h2>Q.  ${questions[count].question}</h2><ul class=\"option_group\">`
  for(var i =0;i<array.length;i++)
  {
    output+=`<li class=\"option\">${array[i]}</li>`
  }
  output+=`</ul>`
  question.innerHTML = output;
    toggleActive();
  }

  function next() {

   
    // if the question is last then redirect to final page
    if (question_count == questions.length - 1) {
      location.href = "end.html";
    }
    console.log(question_count);
  
    let user_answer = document.querySelector("li.option.active").innerHTML;
    console.log(user_answer);
    // check if the answer is right or wrong
    if (user_answer == questions[question_count].answer) {
      points = "You are fine stay safe stay healthy";
      sessionStorage.setItem("points", points);
    }
    else {
      points = "Get a Covid Test ASAP";
      sessionStorage.setItem("points", points);
    }
    console.log(points);
  
    question_count++;
    show(question_count);
  }
  
//to make option blue or selecting the option
  function toggleActive() {
    let option = document.querySelectorAll("li.option");
    console.log(option);
    for (let i = 0; i < option.length; i++) {
      option[i].onclick = function() {
        for (let i = 0; i < option.length; i++) {
          if (option[i].classList.contains("active")) {
            option[i].classList.remove("active");
          }
        }
        option[i].classList.add("active");
      };
    }
  
  }

let questions = [
  {
    id: 1,
    question: "are you experiencing any of the following symptoms ?",
    answer: "none of the above",
    options: [
      "cough",
      "fever",
      "difficulty in breathing",
      "loss of senses of smell and taste",
      "none of the above"
    ]
  },
  {
    id: 2,
    question: "have you ever had any of the following?",
    answer: "none of the above",
    options: [
      "Diabetes",
      "hypertension",
      "lung disease",
      "heart disease",
      "kidney disorder",
      "none of the above"
    ]
  },
  {
    id: 3,
    question: "have you travelled anywhere internationally in the last 28-45 days?",
    answer: "no",
    options: [
      "yes",
      "no",
    ]
  },
  {
    id: 4,
    question: "which of the following apply to you?",
    answer: "None of the above",
    options: [
      "I have recently interacted or lived with someone who has tested positive for COVID-19",
      "I am a health care worker and I examined a COVID-19 confirmed case without protective gear",
      "None of the above"
    ]
  }
];



//execution starts from here i.e. the first index 
let question_count = 0;
let points = "";

window.onload = function() {
  show(question_count);
};


let user_points = sessionStorage.getItem("points");
document.querySelector("span.points").innerHTML = user_points;

