function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      document.getElementById("message").innerText = "Login successful!";
      // window.location.href = "dashboard.html"; // Future redirect
    })
    .catch((error) => {
      document.getElementById("message").innerText = "Error: " + error.message;
    });
}

function signup() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      document.getElementById("message").innerText = "Account created!";
    })
    .catch((error) => {
      document.getElementById("message").innerText = "Error: " + error.message;
    });
}
