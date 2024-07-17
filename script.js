function loadpage(page, quizType = null) {
  fetch(`${page}.html`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text();
    })
    .then((data) => {
      document.getElementById("content").innerHTML = data;

      if (page == "user-dashboard-main") {
        const urlParams = new URLSearchParams(window.location.search);
        const username = urlParams.get("username");
        document.getElementById("usernameDisplay").textContent = username;
      }

      if (page === "logout_model") {
        const modal = document.getElementById("logout-modal");
        // Handle confirmation of logout
        const confirmButton = document.getElementById("confirm-logout");
        const cancelButton = document.getElementById("cancel-logout");

        confirmButton.addEventListener("click", function () {
          window.location.href = "login-page.html";
        });

        cancelButton.addEventListener("click", function () {
          loadpage("user-dashboard-main");
          const urlParams = new URLSearchParams(window.location.search);
          const username = urlParams.get("username");

          if (username === user.username) {
            loadpage("user-dashboard-main");
          } else {
            alert("not found");
          }
        });
      }
      // if (page === "question") {
      //   var count = 0;
      //   loadQuiz();
      //   const submitBtn = document.getElementById("submit");

      //   submitBtn.addEventListener("click", () => {
      //     const answer = getSelected();

      //     if (answer) {
      //       if (
      //         answer ===
      //         nepaliHistoryQuestions[currentQuestionIndex].correctAnswer
      //       ) {
      //         // alert("Correct answer!");
      //         count++;
      //       } else {
      //         // alert(
      //         //   "Wrong answer. The correct answer is " +
      //         //     nepaliHistoryQuestions[
      //         //       currentQuestionIndex
      //         //     ].correctAnswer.toUpperCase()
      //         // );
      //       }

      //       currentQuestionIndex++;
      //       if (currentQuestionIndex < nepaliHistoryQuestions.length) {
      //         loadQuiz();
      //       } else {
      //         alert("Quiz completed!" + " Correct: " + count);
      //         // showAnswers();
      //         // Optionally reset quiz
      //         currentQuestionIndex = 0;
      //         // loadQuiz();
      //         loadpage("user-dashboard-main");
      //       }
      //     }
      //   });
      // }

      if (page === "question") {
        console.log(quizType);
        var count = 0;
        let questions;
        if (quizType === "history_quiz") {
          questions = history_quiz;
        } else if (quizType === "science_and_tech_quiz") {
          questions = science_and_tech_quiz;
        } else if (quizType === "mix_quiz") {
          questions = mix_quiz;
        } else if (quizType === "sports_quiz") {
          questions = sports_quiz;
        }

        selectedQuestions = shuffle(questions).slice(0, 10);
        loadQuiz(selectedQuestions);

        
        // loadQuiz(questions);
        const submitBtn = document.getElementById("submit");

        submitBtn.addEventListener("click", () => {
          const answer = getSelected();

          if (answer) {
            if (answer === questions[currentQuestionIndex].correctAnswer) {
              count++;
            }

            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
              loadQuiz(questions);
            } else {
              alert("Quiz completed! Correct: " + count);
              currentQuestionIndex = 0;
              loadpage("user-dashboard-main");
            }
          }
        });
      }
      closeMenu();
    })
    .catch((error) => {
      console.error("Error fetching page", error);
    });
}

function submitForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  alert("Message sent successfully!");
  console.log("Form Data:", { name, email, message });

  // Clear the form fields
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";

  // Load the home page content after submitting message
  loadpage("home");
}

document.addEventListener("DOMContentLoaded", () => {
  // Check if the user is logged in by looking for the username query parameter
  const urlParams = new URLSearchParams(window.location.search);
  const username = urlParams.get("username");
  if (username) {
    loadpage("user-dashboard-main"); // Load the main content of the dashboard if the user is logged in
  } else {
    loadpage("home");
  }
});

function closeMenu() {
  var menu = document.getElementById("nav-list");
  var content = document.getElementById("content");
  menu.classList.remove("active");
  content.classList.remove("hidden");
}

document.querySelectorAll("#nav-list a").forEach((link) => {
  link.addEventListener("click", function () {
    closeMenu();
  });
});

function findUserByName(username) {
  return username === user.username ? user.username : null;
}

// For handling nav bar
document.getElementById("mobile-menu").addEventListener("click", function () {
  var menu = document.getElementById("nav-list");
  var content = document.getElementById("content");
  menu.classList.toggle("active");
  content.classList.toggle("hidden");
});

const user = {
  username: "BSC-CSIT",
  password: "password",
};
