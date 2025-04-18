const inputElement = document.querySelector("#search-input");
const search_icon = document.querySelector("#search-close-icon");
const sort_wrapper = document.querySelector(".sort-wrapper");
const filter_wrapper = document.querySelector(".filter-wrapper");

inputElement.addEventListener("input", () => {
  handleInputChange(inputElement);
});
search_icon.addEventListener("click", handleSearchCloseOnClick);
sort_wrapper.addEventListener("click", handleSortIconOnClick);

//add this event listener to prevent clicks inside the filter from closing it
filter_wrapper.addEventListener("click", function(event) {
  event.stopPropagation();
});

//add a document-level click handler to close the filter menu when clicking elsewhere
document.addEventListener("click", function(event) {
  //check if the click is outside the sort wrapper and filter wrapper
  if (!sort_wrapper.contains(event.target) && !filter_wrapper.contains(event.target)) {
    filter_wrapper.classList.remove("filter-wrapper-open");
    document.querySelector("body").classList.remove("filter-wrapper-overlay");
  }
});

function handleInputChange(inputElement) {
  const inputValue = inputElement.value;

  if (inputValue !== "") {
    document
      .querySelector("#search-close-icon")
      .classList.add("search-close-icon-visible");
  } else {
    document
      .querySelector("#search-close-icon")
      .classList.remove("search-close-icon-visible");
  }
}

function handleSearchCloseOnClick() {
  document.querySelector("#search-input").value = "";
  document
    .querySelector("#search-close-icon")
    .classList.remove("search-close-icon-visible");
}

function handleSortIconOnClick(event) {
  //Stop the event from bubbling up to document
  event.stopPropagation();
  document
    .querySelector(".filter-wrapper")
    .classList.toggle("filter-wrapper-open");
  document.querySelector("body").classList.toggle("filter-wrapper-overlay");
}