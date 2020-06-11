
// show more images when 'SHOW MORE' is clicked, and remove those images when clicked again
var checkbox, hideToggle, checkboxLabel;

checkbox = document.querySelector('.portfolio__toggle--checkbox');
hideToggle = document.querySelector('.hide-toggle');
checkboxLabel = document.querySelector('.checkbox-label');

checkbox.addEventListener('change' , function () {
    if (this.checked) {
        hideToggle.classList.remove('hide-toggle');
        checkboxLabel.innerHTML = "show less";

    } else {
            hideToggle.classList.add('hide-toggle');
            checkboxLabel.innerHTML = "show more";
        }
});
