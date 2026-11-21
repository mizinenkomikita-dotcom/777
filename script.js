
const hideButtons = document.querySelectorAll(".hideButton");
const showButton = document.getElementById("showButton");
const jobCards = document.querySelectorAll(".job-card");

// Приховування окремої вакансії
hideButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const card = button.closest(".job-card");
        card.hidden = true;
    });
});

// Відображення всіх вакансій
showButton.addEventListener("click", function() {
    jobCards.forEach(function(card) {
        card.hidden = false;
    });
});
