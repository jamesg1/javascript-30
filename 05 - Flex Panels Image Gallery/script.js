function toggleOpen() {
    this.classList.toggle('open');
}

function toggleActive(e) {
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}

const panels = document.querySelectorAll('.panel');

// Call ToggleOpen function when a panel is clicked
panels.forEach(panel => panel.addEventListener('click', toggleOpen));

// Call toggleActive function when a panel is transitionend
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
