const accordion = document.querySelector(".accordion");
const accordionState = { activeItemIndex: 0 };

accordion.addEventListener("click", (event) => {
    if (!event.target.matches(".accordion__item-head")) {
        return;
    }

    const targetItem = event.target.closest(".accordion__item");

    if (targetItem.classList.contains("accordion__item--active")) {
        return;
    }

    accordion.children[accordionState.activeItemIndex].classList.remove(
        "accordion__item--active"
    );

    targetItem.classList.add("accordion__item--active");

    let targetItemIndex;

    Array.from(accordion.children).forEach((item, index) => {
        if (item === targetItem) {
            targetItemIndex = index;
        }
    });

    accordionState.activeItemIndex = targetItemIndex;
});

document.querySelectorAll(".accordion__item-body").forEach((elem) => {
    new SimpleBar(elem, { autoHide: false });
});
