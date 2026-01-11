const PASSWORD_ADMIN = "RT007AMAN";

function loginAdmin() {
  const pass = document.getElementById("password").value;
  if (pass === PASSWORD_ADMIN) {
    document.getElementById("login-box").style.display = "none";
    document.getElementById("admin-panel").style.display = "block";
  } else {
    document.getElementById("login-error").innerText = "Password salah!";
  }
}

function simpanPengumuman() {
  const judul = document.getElementById("judul").value;
  const tanggal = document.getElementById("tanggal").value;
  const isi = document.getElementById("isi").value;

  if (!judul || !tanggal || !isi) {
    alert("Lengkapi semua data!");
    return;
  }

  const list = document.getElementById("list-pengumuman");
  const li = document.createElement("li");
  li.innerHTML = `<strong>${judul}</strong> (${tanggal})<br>${isi}`;
  list.appendChild(li);

  document.getElementById("judul").value = "";
  document.getElementById("tanggal").value = "";
  document.getElementById("isi").value = "";
}
