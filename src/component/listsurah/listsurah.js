function fetchSurah() {
  fetch("https://al-quran-8d642.firebaseio.com/data.json?print=pretty")
    .then((response) => {
      return response.json();
    })
    .then((allSurah) => {
      const isiSurah = allSurah
        .map((surah) => {
          return `
            <tr>
              <th scope="row">${surah.nomor}</th>
              <td><div style="font-size:1.75rem;">${surah.asma}</div><p class=" m-0">${surah.nama}</p></td>
              <td>${surah.ayat}</td>
              <td>${surah.type}</td>
              <td colspan="3">${surah.rukuk}</td>
            </tr>
            <tr>
              <td colspan="5" class="text-center">
                <p class=" pt-3">${surah.keterangan}</p>
                <button type="button" class="btn btn-primary mb-4 " id="${surah.nomor}" value="${surah.nomor}" onclick="
                  fetchIdBtn(${surah.nomor});
                ">Baca Surah ${surah.nama}</button>
              </td>
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