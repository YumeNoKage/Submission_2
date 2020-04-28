function fetchSurah() {
  fetch("https://al-quran-8d642.firebaseio.com/data.json?print=pretty")
    .then((response) => {
      return response.json();
    })
    .then((allSurah) => {
      console.log(allSurah);
      const isiSurah = allSurah
        .map((surah) => {
          return `
          <table class="table">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Nama Surah</th>
              <th scope="col">Ayat</th>
              <th scope="col">Turun di</th>
              <th scope="col">Rukuk</th>
            </tr>
          </thead> 
          <tbody class="container">
            <tr>
              <th scope="row">${surah.nomor}</th>
              <td>${surah.asma}</td>
              <td>${surah.ayat}</td>
              <td>${surah.type}</td>
              <td>${surah.rukuk}</td>
              <td><button type="button" class="btn btn-primary">Baca</button></td>
              <td><button type="button" class="btn btn-primary">Keterangan</button></td>
            </tr>
          </tbody>
          </table>
          `;
        })
        .join("");
      document
        .getElementById("isisurah")
        .insertAdjacentHTML("beforeend", isiSurah);
    })
    .catch((error) => {
      console.log(error);
    });
}
fetchSurah();
