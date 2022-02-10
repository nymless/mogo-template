const items = Array.from(document.querySelectorAll(".scrollbar"));

const scrolledItem = items[0];

if (scrolledItem.style.overflowY !== "hidden") {
    scrolledItem.style.overflowY = "hidden";
}

const scrollbar = document.createElement("div");
const scrollbarTrack = document.createElement("div");
const scrollbarThumb = document.createElement("div");

container.className = "scrollbar";
scrollbarTrack.className = "scrollbar__scrollbar-track";
scrollbarThumb.className = "scrollbar__scrollbar-thumb";
