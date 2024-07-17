const users = [
  { username: "diwash", password: "pokhrel", role: "admin" },
  { username: "user1", password: "password1", role: "user" },
  { username: "user2", password: "password2", role: "user" },
  { username: "user3", password: "password3", role: "user" },
  { username: "user4", password: "password4", role: "user" },
  { username: "user5", password: "password5", role: "user" },
  { username: "user6", password: "password6", role: "user" },
  { username: "user7", password: "password7", role: "user" },
  { username: "user8", password: "password8", role: "user" },
  { username: "user9", password: "password9", role: "user" },
  { username: "user10", password: "password10", role: "user" },
];

function loadpage(page) {
  fetch(`${page}.html`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network responce was not ok");
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

      if (page == "admin-dashboard") {
      }
      closeMenu();

      //----------------------------------------------------/

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

          const role = findUserByName(username);

          if (role === "admin") {
            loadpage("admin-dashboard-main");
          } else if (role === "user") {
            loadpage("user-dashboard-main");
          } else {
            alert("not found");
          }
        });
      }

      //----------------------------------------------------/
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

  // Load the home page content after submiting message
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

const quizQuestions = [
  {
    question: "Who is the President of Nepal?",
    options: {
      a: "Civilization Bhattarai",
      b: "Madhumalla Poudal",
      c: "Monu Kumar Nayabania",
      d: "Omega Siddique",
    },
    correctAnswer: "=",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: {
      a: "Venus",
      b: "Jupiter",
      c: "Mars",
      d: "Saturn",
    },
    correctAnswer: "c",
  },
];

// user authentication

function authenticateUser() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  console.log("username: " + username);
  console.log("password: " + password);

  const role = authenticate(username, password);

  if (role) {
    if (role === "admin") {
      window.location.href =
        "admin-dashboard-base.html?username=" + encodeURIComponent(username);
    } else if (role === "user") {
      window.location.href =
        "user-dashboard-base.html?username=" + encodeURIComponent(username);
    }
  } else {
    alert("Invalid username or password");
  }

  return false;
}

function authenticate(username, password) {
  const user = users.find(
    (user) => user.username === username && user.password === password
  );
  return user ? user.role : null;
}

function findUserByName(username) {
  const user = users.find((user) => user.username === username);
  return user ? user.role : null;
}

//for handeling nav bar
document.getElementById("mobile-menu").addEventListener("click", function () {
  var menu = document.getElementById("nav-list");
  var content = document.getElementById("content");
  menu.classList.toggle("active");
  content.classList.toggle("hidden");
});
