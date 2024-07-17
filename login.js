function authenticateUser() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  console.log("username: " + username);
  console.log("password: " + password);

  if (username === user.username && password === user.password) {
    window.location.href =
      "user-dashboard-base.html?username=" + encodeURIComponent(username);
  } else {
    alert("Invalid username or password");
  }

  return false;
}

const user = {
  username: "BSC-CSIT",
  password: "password",
};
