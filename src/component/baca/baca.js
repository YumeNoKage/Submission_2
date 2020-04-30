function fetchIdBtn(nilaiId){
    const fetchId = document.getElementById(nilaiId).getAttribute("value");
    console.log(fetchId);

    const tabelSurah = document.getElementById("tabel-surah");
    const btnEle = document.getElementById(`${fetchId}`);
    const tabelAyat = document.getElementById("bacaSurah");
    const keSurah = document.getElementById("keSurah");

    if (btnEle.click){
        tabelSurah.classList.add("d-none");
        tabelAyat.classList.remove("d-none");
    }else if (keSurah.click){
        tabelSurah.classList.remove("d-none");
        tabelAyat.classList.add("d-none");
    }

    fetch(`https://al-quran-8d642.firebaseio.com/surat/${fetchId}.json?print=pretty`)
        .then((response) => {
        return response.json();
        })
        .then((allBaca) => {
        console.log(allBaca)
        const isiBaca = allBaca
            .map((baca) => {
            return `
            <div id="${fetchId}"> 
                <div class="d-flex text-left w-100 mt-5">
                    <p class="ml-auto">${baca.nomor}</p>
                    <p class="ml-2 text-right" style="font-size:2rem;">${baca.ar}</p>
                </div>
                <div >
                    <p class="text-right">${baca.tr}</p>
                    <p class="text-left">${baca.id}</p>
                </div>
            </div>
            `;
            })
            .join("");
        document
            .getElementById("bacaSurah").insertAdjacentHTML("beforeend", isiBaca);
        })
    .catch((error) => {
    console.log(error);
    });
}


// function fetchBaca() {
//     fetch(`https://al-quran-8d642.firebaseio.com/surat/1.json?print=pretty`)
//         .then((response) => {
//         return response.json();
//         })
//         .then((allBaca) => {
//             // console.log(allBaca)
//         const isiBaca = allBaca
//             .map((baca) => {
//             return `
//                 <div class="d-flex text-left w-100">
//                     <p class="ml-auto">${baca.nomor}</p>
//                     <p class="ml-2" style="font-size:2rem;">${baca.ar}</p>
//                 </div>
//                 <p class="text-right">${baca.tr}</p>
//                 <p class="text-left">${baca.id}</p>
//             `;
//             })
//             .join("");
//         document
//             .getElementById("bacaSurah")
//             .insertAdjacentHTML("afterbegin", isiBaca);
//         })
//     .catch((error) => {
//     console.log(error);
//     });
// }
fetchIdBtn();
