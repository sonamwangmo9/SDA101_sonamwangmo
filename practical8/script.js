// Get references to form elements
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const submitBtn = document.getElementById("submitBtn");

// Error message spans
const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");

// Validation flags
let isUsernameValid = false;
let isEmailValid = false;
let isPasswordValid = false;
let isConfirmPasswordValid = false;

// Helper functions
function validateUsername() {
  if (username.value.length >= 3) {
    usernameError.textContent = "";
    isUsernameValid = true;
  } else {
    usernameError.textContent = "Username must be at least 3 characters long";
    isUsernameValid = false;
  }
  toggleSubmit();
}

function validateEmail() {
  const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (emailPattern.test(email.value)) {
    emailError.textContent = "";
    isEmailValid = true;
  } else {
    emailError.textContent = "Please enter a valid email address";
    isEmailValid = false;
  }
  toggleSubmit();
}

function validatePassword() {
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,}$/;
  if (passwordPattern.test(password.value)) {
    passwordError.textContent = "";
    isPasswordValid = true;
  } else {
    passwordError.textContent =
      "Password must be at least 8 characters, include uppercase, lowercase, and a special character";
    isPasswordValid = false;
  }
  validateConfirmPassword(); // Re-check confirm password
  toggleSubmit();
}

function validateConfirmPassword() {
  if (confirmPassword.value === password.value && password.value !== "") {
    confirmPasswordError.textContent = "";
    isConfirmPasswordValid = true;
  } else {
    confirmPasswordError.textContent = "Passwords do not match";
    isConfirmPasswordValid = false;
  }
  toggleSubmit();
}

function toggleSubmit() {
  submitBtn.disabled = !(isUsernameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid);
}

// Attach input event listeners
username.addEventListener("input", validateUsername);
email.addEventListener("input", validateEmail);
password.addEventListener("input", validatePassword);
confirmPassword.addEventListener("input", validateConfirmPassword);

// Optional: prevent form submission for demo
document.getElementById("registrationForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Form submitted successfully!");
});