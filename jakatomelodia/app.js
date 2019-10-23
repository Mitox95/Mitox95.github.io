(function() {
    const myQuestions = [
      {
        question: "Jaka to melodia?",
        answers: {
          a: "Justin Bieber - Baby",
          b: "Metallica - Unforgiven",
          c: "Iron Maiden - 2 Minutes to Midnight"
        },
        correctAnswer: "c"
      },
      {
        question: "Jaka to melodia?",
        answers: {
          a: "ATB - Ecstasy",
          b: "Eiffel 65 - Blue (Da Ba Dee)",
          c: "Gigi D'Agostino - The Riddle"
        },
        correctAnswer: "b"
      },
      {
        question: "Jaka to melodia?",
        answers: {
          a: "Red Hot Chili Peppers - Otherside",
          b: "Nirvana - Smells Like Teen Spirit",
          c: "Nirvana - Come As You Are",
          d: "Nirvana - Breed"
        },
        
        correctAnswer: "b"
      }
    ];
    const playlist =[
      "./2_minutes.mp3",
      "./blue.mp3",
      "./nirvana.mp3"

    ];
    var audio;

    
    
    

    function buildQuiz() {
     
      const output = [];
  
      
      myQuestions.forEach((currentQuestion, questionNumber) => {
        
        const answers = [];
         
  
        
        for (letter in currentQuestion.answers) {
          
          answers.push(
            `<label>
               <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
             </label>
             
             `
          );
        }
  
       
        output.push(
          `<div class="slide">
          <audio></audio>
             <div class="question"> ${currentQuestion.question} </div>
             <div class="answers"> ${answers.join("")} </div>
           </div>`
        );
      });
    
      
      quizContainer.innerHTML = output.join("");
    }
   
    function showResults() {
      
      const answerContainers = quizContainer.querySelectorAll(".answers");
  
      
      let numCorrect = 0;
  
      
      myQuestions.forEach((currentQuestion, questionNumber) => {
        
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        
        if (userAnswer === currentQuestion.correctAnswer) {
          
          numCorrect++;
  
         
          answerContainers[questionNumber].style.color = "lightgreen";
        } else {
          
          answerContainers[questionNumber].style.color = "red";
        }
      });
  
     
      resultsContainer.innerHTML = `${numCorrect} z ${myQuestions.length} Poprawnych odpowiedzi!`;
    }
  
    function showSlide(n) {
      slides[currentSlide].classList.remove("active-slide");
      slides[n].classList.add("active-slide");
      currentSlide = n;
      
      if (currentSlide === 0) {
        previousButton.style.display = "none";
        
       
        }
         else {
        previousButton.style.display = "inline-block";
     }
     
 
      
      if (currentSlide === slides.length - 1) {
        nextButton.style.display = "none";
        submitButton.style.display = "inline-block";
      } else {
        nextButton.style.display = "inline-block";
        submitButton.style.display = "none";
      }
      stopAudio();
    }
    function playAudio(currentSlide){
      if (!audio){
        audio = new Audio(playlist[currentSlide]);
        audio.play();
      }
      console.log('dupa');

     

    } 
  
    
  
    function showNextSlide() {
      showSlide(currentSlide + 1);
    }
  
    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }
    function startAudio() {
      playAudio(currentSlide);
    }
    function stopAudio() {
      if (audio)
        audio.pause();
        audio=null;
    }

 
    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");
    
  
    
    buildQuiz();
    const startButton = document.getElementById("start");
    const stopButton = document.getElementById("stop");
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    showSlide(0);

    submitButton.addEventListener("click", showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
    startButton.addEventListener("click", startAudio);
    stopButton.addEventListener("click", stopAudio);
  })();