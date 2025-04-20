const tutor = document.querySelector(".owl-carousel2");
const user = document.querySelector(".owl-carousel");
const buttonTutor = document.querySelector(".checkbox");

buttonTutor.addEventListener ("click", function() {
    tutor.style.display = "block";
    user.style.display = "none";
});

const arrow = document.querySelectorAll("#selec");
console.log(arrow);
const showSelect = document.querySelectorAll("option");
console.log(showSelect);

arrow.addEventListener('click', () => {
  showSelect.style.display = "block";
})
