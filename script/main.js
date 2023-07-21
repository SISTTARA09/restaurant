async function createBoxes(country) {
  let mainData = await fetch(`./json/${country}.json`)
  let foodContainer = document.querySelector(`.${country} .foodContainer`)
  try {
    let data = await mainData.json();
    data.forEach(ele => {
      foodContainer.innerHTML += `
      <div class="box">
      <div class="image">
        <img src="${ele.imgSrc}" alt="${ele.title}">
      </div>
      <div class="info">
        <h3>${ele.title}</h3>
        <p>${ele.description}</p>
      </div>
    </div>
      `
    });
  } catch (reason) {
    cl(reason)
  }
}
createBoxes('italian')
createBoxes('japanese')
createBoxes('arabian')
createBoxes('american')