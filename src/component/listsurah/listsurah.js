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
            <tr >
              <th scope="row">${surah.nomor}</th>
              <td><h3>${surah.asma}</h3><p>${surah.nama}</p></td>
              <td>${surah.ayat}</td>
              <td>${surah.type}</td>
              <td colspan="3">${surah.rukuk}</td>
              <td><button type="button" class="btn btn-primary mb-3 mt-3">Baca</button></td>
              <td><button type="button" class="btn btn-primary mb-3 mt-3">Keterangan</button></td>
            </tr>
          `;
        })
        .join("");
      document
        .getElementById("isisurah")
        .insertAdjacentHTML("afterbegin", isiSurah);
    })
    .catch((error) => {
      console.log(error);
    });
}
fetchSurah();
