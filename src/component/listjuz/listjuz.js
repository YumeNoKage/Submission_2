import listjuz from '../../asset/Juz/juz.js';

function fetchJuz() {
    const alljuz = listjuz;
    const mapjuz = alljuz.map(juz =>{
        return `
        <tr >
            <th scope="row">${juz.id}</th>
            <td class="text-left">${juz.dari}</td>
            <td class="text-left">${juz.sampai}</td>
            <td><button type="button" class="btn btn-primary mb-3 mt-3">Baca</button></td>
        </tr>
        `
    }).join("");
    document
        .getElementById("isijuz")
        .insertAdjacentHTML("afterbegin", mapjuz);
}

fetchJuz();

// function fetchJuz() {
//     fetch("../../asset/Juz/juz.js")
//       .then((response) => {
//         return response.json();
//       })
//       .then((allJuz) => {
//         console.log(allJuz);
//         const isiJuz = allJuz
//           .map((juz) => {
//             return `
//               <tr >
//                 <th scope="row">${juz.id}</th>
//                 <td><p>${juz.dari}</p></td>
//                 <td>${juz.sampai}</td>
//                 <td><button type="button" class="btn btn-primary">Baca</button></td>
//               </tr>
//             `;
//           })
//           .join("");
//         document
//           .getElementById("isijuz")
//           .insertAdjacentHTML("afterbegin", isiJuz);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }
//   fetchJuz();