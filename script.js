document.getElementById("studentBtn").addEventListener("click", function() {
  this.classList.add("active");
  document.getElementById("parentBtn").classList.remove("active");
});
document.getElementById("parentBtn").addEventListener("click", function() {
  this.classList.add("active");
  document.getElementById("studentBtn").classList.remove("active");
});
function togglePasswordVisibility() {
  const passwordInput = document.getElementById("password");
  if (passwordInput.type === "password") {
      passwordInput.type = "text";
  } else {
      passwordInput.type = "password";
  }
}
document.getElementById("logout").addEventListener("click", function() {
  alert("Siz tizimdan chiqdingiz!");
  window.location.reload();
});
