<!-- ADD THIS TO TOP OF script.js -->
<script src="https://www.gstatic.com/firebasejs/8.6.8/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.6.8/firebase-auth.js"></script>
// Login
document.getElementById("login-btn").addEventListener("click", () => {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      alert("Login successful!");
      // redirect or do something
    })
    .catch(error => {
      document.getElementById("login-error").textContent = error.message;
    });
});

// Signup
document.getElementById("signup-btn").addEventListener("click", () => {
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
      alert("Account created!");
      document.getElementById("signup-box").style.display = "none";
      document.getElementById("login-box").style.display = "block";
    })
    .catch(error => {
      document.getElementById("signup-error").textContent = error.message;
    });
});

// Toggle forms
document.getElementById("show-signup").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("login-box").style.display = "none";
  document.getElementById("signup-box").style.display = "block";
});

document.getElementById("show-login").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("signup-box").style.display = "none";
  document.getElementById("login-box").style.display = "block";
});
