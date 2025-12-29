const sheetURL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vRxp9RzXU7MNibquVZ6wYj6s6zzyySpmF6IG5OGNg5UTp_dkMnAHF3JIDGLbxnW2V8J9Oew1s3xu3-7/pub?output=csv";

fetch(sheetURL)
  .then(res => res.text())
  .then(data => {
    const rows = data.split("\n").slice(1);
    let html = "";

    rows.reverse().forEach(row => {
      const col = row.split(",");
      if (col.length >= 4) {
        html += `
          <div class="pengumuman-item">
            <h3>${col[2]}</h3>
            <small>${col[1]}</small>
            <p>${col[3]}</p>
          </div>
        `;
      }
    });

    document.getElementById("pengumuman-list").innerHTML =
      html || "<p>Belum ada pengumuman.</p>";
  });
