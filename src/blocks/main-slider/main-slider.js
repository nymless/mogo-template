const slider = document.querySelector(".main-slider");
const paginator = slider.querySelector(".main-slider__paginator");
const firstItem = paginator.querySelector(".main-slider__item");

const content = slider.querySelector(".main-slider__content");
const slides = slider.querySelectorAll(".main-slider__slide");
const items = slider.querySelectorAll(".main-slider__item");

let prevTargetItem = null;

// add data-index attribute to slides and paginator items
if (slides.length === items.length) {
    for (let i = 0; i < items.length; i++) {
        slides[i].setAttribute("data-index", i);
        items[i].setAttribute("data-index", i);
    }
} else {
    throw new Error(
        "Number of slides and slider-paginator items should be equal in HTML"
    );
}

// click on slider controls
paginator.addEventListener("click", (event) => {
    const targetItem = event.target.closest(".main-slider__item");

    if (targetItem.classList.contains("main-slider__item--active")) {
        return;
    }

    // remove "--active" from "slider__item"
    paginator.querySelectorAll(".main-slider__item").forEach((item) => {
        if (item.classList.contains("main-slider__item--active")) {
            item.classList.remove("main-slider__item--active");
            // save prevItem
            prevTargetItem = item;
        }
    });

    // add "--active" to "slider__item"
    targetItem.classList.add("main-slider__item--active");

    // clear "slider__content"
    content.classList.remove("main-slider__content-forward--next");
    content.classList.remove("main-slider__content-forward");
    content.classList.remove("main-slider__content-backward--prev");
    content.classList.remove("main-slider__content-backward");

    // clear "slider__content" from all child nodes
    while (content.firstChild) {
        content.firstChild.remove();
    }

    // append prev and next "__slide" to "slider__content"
    if (prevTargetItem === null) {
        // before loop entry
        let newSlide = slides[targetItem.dataset.index].cloneNode(true);
        content.append(newSlide);
    } else {
        let prevSlide = slides[prevTargetItem.dataset.index].cloneNode(true);
        let nextSlide = slides[targetItem.dataset.index].cloneNode(true);

        // backward clicked
        if (targetItem.dataset.index < prevTargetItem.dataset.index) {
            content.append(nextSlide, prevSlide);
            // add mix of "slider__content-backward" and "slider__content"
            content.classList.add("main-slider__content-backward");
        }

        // forward clicked
        if (targetItem.dataset.index > prevTargetItem.dataset.index) {
            content.append(prevSlide, nextSlide);
            // add mix of "slider__content-forward" and "slider__content"
            content.classList.add("main-slider__content-forward");
        }
    }
});

// transition of paginator progress-bar
paginator.addEventListener("transitionstart", () => {
    if (prevTargetItem === null) {
        return;
    }

    // add modifiers to "slider__content"
    if (content.classList.contains("main-slider__content-forward")) {
        content.classList.add("main-slider__content-forward--next");
    }

    if (content.classList.contains("main-slider__content-backward")) {
        content.classList.add("main-slider__content-backward--prev");
    }
});

paginator.addEventListener("transitionend", (event) => {
    const targetItem = event.target.closest(".main-slider__item");

    // clear "slider__content"
    content.classList.remove("main-slider__content-forward--next");
    content.classList.remove("main-slider__content-backward--prev");

    // auto-slide loop
    if (targetItem.nextElementSibling) {
        targetItem.nextElementSibling.click();
    } else {
        firstItem.click();
    }
});

// auto-slide loop entry
firstItem.click();
