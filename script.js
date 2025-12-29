const sheetURL =
"https://docs.google.com/spreadsheets/d/e/2PACX-1vRxp9RzXU7MNibquVZ6wYj6s6zzyySpmF6IG5OGNg5UTp_dkMnAHF3JIDGLbxnW2V8J9Oew1s3xu3-7/pub?output=csv";

fetch(sheetURL)
  .then(response => response.text())
  .then(data => {
    const rows = data.split("\n").slice(1);
    let html = "";

    rows.reverse().forEach(row => {
      const cols = row.split(",");

      if (cols.length >= 4) {
        html += `
          <div class="pengumuman-item">
            <h3>${cols[1]}</h3>
            <small>${cols[2]}</small>
            <p>${cols[3]}</p>
            <hr>
          </div>
        `;
      }
    });

    document.getElementById("pengumuman-data").innerHTML =
      html || "<p>Belum ada pengumuman.</p>";
  })
  .catch(() => {
    document.getElementById("pengumuman-data").innerHTML =
      "<p>Gagal memuat pengumuman.</p>";
  });
