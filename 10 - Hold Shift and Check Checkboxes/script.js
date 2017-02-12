const checkboxes = Array.from(document.querySelectorAll('.inbox input[type="checkbox"]'));

let lastChecked;

function handleMultiCheck(e) {
    if (e.shiftKey && this.checked) {
        const startCheckIndex = checkboxes.indexOf(lastChecked);
        const endCheckIndex = checkboxes.indexOf(this);
        const inBetweenChecks = checkboxes.filter(
          (checkbox, index) => index > startCheckIndex && index < endCheckIndex);
        inBetweenChecks.forEach(checkbox => checkbox.checked = true);
    }
    lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleMultiCheck));
