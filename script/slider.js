"use strict";
let imagesContainer = document.querySelector(".images-slider");
let cl = console.log;

function scroll() {
	setInterval(() => {
		imagesContainer.scrollBy({
			top: 0,
			left:  imagesContainer.clientWidth,
			behavior: "smooth",
	  });
	}, 2500);
	setInterval(() => {
		imagesContainer.scrollBy({
			top: 0,
			left: -(imagesContainer.clientWidth * 3),
			behavior: "smooth",
		});
	}, 7600);
}
scroll();



















// setInterval(() => {
//   imagesContainer.scrollBy({
//     top: 0,
//     left: -100,
//     behavior: 'smooth'
//   })
// }, 1000);

// window.onresize = function () {
//   cl()
// }
// window.addEventListener('DOMContentLoaded', init)
// function init() {
//     setInterval(() => {
//         parent.scrollBy({
//             top: 0,
//             left: parent.clientWidth,
//             behavior: 'smooth',
//         })
//         // parent.scrollBy( (parent.clientWidth), 0,{behavior: 'smooth'})
//     },2500)
//     setInterval(() => {
//         parent.scrollBy({
//             top: 0,
//             left: - (parent.clientWidth * 3),
//             behavior: 'smooth'
//         })
//     }, 7500);
// }
