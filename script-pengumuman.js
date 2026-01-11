const SHEET_URL = "PASTE_LINK_CSV_GOOGLE_SHEET_KAMU";

fetch(SHEET_URL)
  .then(res => res.text())
  .then(csv => {
    const rows = csv.split("\n").slice(1);
    const container = document.getElementById("pengumuman-list");
    container.innerHTML = "";

    rows.reverse().forEach(row => {
      const col = row.split(",");
      if (col.length > 3) {
        container.innerHTML += `
          <div class="pengumuman-item">
            <h4>${col[1]}</h4>
            <small>${col[2]}</small>
            <p>${col[3]}</p>
          </div>
        `;
      }
    });
  });
