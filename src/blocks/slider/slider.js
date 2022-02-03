const slider = document.querySelector(".slider");
const paginator = slider.querySelector(".slider__paginator");
const firstItem = paginator.querySelector(".slider__item");
const firstSlide = slider.querySelector(".slider__slide");
const content = slider.querySelector(".slider__content");

// click on slider controls
// paginator.addEventListener("click", handleClick);

// function handleClick(event) {
//     const targetItem = event.target.closest(".slider__item");

//     if (targetItem.classList.contains("slider__item--active")) {
//         return;
//     }

//     paginator.querySelectorAll(".slider__item").forEach((item) => {
//         if (item.classList.contains("slider__item--active")) {
//             item.classList.remove("slider__item--active");
//         }
//     });

//     targetItem.classList.add("slider__item--active");
// }

// end of auto-slide delay
// paginator.addEventListener("transitionend", handleTransitionEnd);

// function handleTransitionEnd(event) {
//     const targetItem = event.target.closest(".slider__item");

//     if (targetItem.nextElementSibling) {
//         targetItem.nextElementSibling.click();
//     } else {
//         firstItem.click();
//     }
// }

// firstItem.click();

// move first slide to the end of parent node
// content.append(firstSlide)
