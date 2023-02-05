// handle form submission
document.getElementById("notify").addEventListener("submit", (event) => {
    event.preventDefault();
    event.target.submit();
    event.target.reset();
    return false;
});
