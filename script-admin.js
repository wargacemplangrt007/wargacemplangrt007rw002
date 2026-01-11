const PASSWORD_ADMIN = "RT007AMAN";

function loginAdmin() {
  const pass = document.getElementById("password").value;
  if (pass === PASSWORD_ADMIN) {
    document.getElementById("admin-panel").style.display = "block";
  } else {
    document.getElementById("error").innerText = "Password salah!";
  }
}
