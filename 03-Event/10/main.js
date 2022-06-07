const selectProvince = document.querySelector("#province");
const selectDistrict = document.querySelector("#district");
const chachoengsao = document.querySelector("#chachoengsao");
const chonburi = document.querySelector("#chonburi");
const bangkok = document.querySelector("#bangkok");

const totalDistictBangkok = ["Silom", "Sukhumvit", "Siam"];
const totalDistictChonburi = ["Talay", "Bangsean", "SomeWhere"];
const totalDistictChachoengsao = ["Muang", "BangKla", "Phanomsarakham"];

function isOption() {
  const districtOption = selectDistrict.querySelector("option");
  if (districtOption) {
    districtOption.remove();
  }
}

function showDistrict(e) {
  if (e.target.value === chachoengsao.innerHTML) {
    isOption();
    for (let i = 0; i < totalDistictChachoengsao.length; i++) {
      const newOption = document.createElement("option");
      newOption.id = `district${i}`;
      newOption.innerText = totalDistictChachoengsao[i];
      selectDistrict.append(newOption);
    }
  }
  if (e.target.value === chonburi.innerHTML) {
    isOption();
    for (let i = 0; i < totalDistictChonburi.length; i++) {
      const newOption = document.createElement("option");
      newOption.id = `district${i}`;
      newOption.innerText = totalDistictChonburi[i];
      selectDistrict.append(newOption);
    }
  }
  if (e.target.value === bangkok.innerHTML) {
    isOption();
    for (let i = 0; i < totalDistictBangkok.length; i++) {
      const newOption = document.createElement("option");
      newOption.id = `district${i}`;
      newOption.innerText = totalDistictBangkok[i];
      selectDistrict.append(newOption);
    }
  }
}

selectProvince.addEventListener("change", showDistrict);
