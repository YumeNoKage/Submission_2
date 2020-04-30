import listjuz from '../../asset/Juz/juz.js';

function fetchJuz() {
    const alljuz = listjuz;
    const mapjuz = alljuz.map(juz =>{
        return `
        <tr class="mb-3">
            <th scope="row">${juz.id}</th>
            <td class="text-left pr-3">${juz.dari}</td>
            <td class="text-left pr-3">${juz.sampai}</td>
        </tr>
        `
    }).join("");
    document
        .getElementById("isijuz")
        .insertAdjacentHTML("afterbegin", mapjuz);
}
{/* <td><button type="button" class="btn btn-primary mb-3 mt-3">Baca</button></td> */}


fetchJuz();