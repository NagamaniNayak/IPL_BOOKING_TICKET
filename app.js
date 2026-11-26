// Toast Notification Function
function showToast(message) {
let toast = document.getElementById("toast");

if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    document.body.appendChild(toast);
}

toast.textContent = message;
toast.className = "show";

setTimeout(() => {
    toast.className = "";
}, 3000);

}

// Smooth Scrolling Function
function scrollToBooking() {
const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {
    bookingForm.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

    showToast("Ready to book your IPL tickets! 🏏");
}

}

// Show Match Details
function showMatch() {
const match = document.getElementById("match");
const details = document.getElementById("matchDetails");

if (match && details) {
    details.textContent = "Selected Match: " + match.value;
    showToast("Match selected!");
}

}

// Activity 7 and Activity 8
document.addEventListener("DOMContentLoaded", function () {

// Booking Form
const form = document.getElementById("bookingForm");

if (form && window.location.hash === "#bookingForm") {
    setTimeout(scrollToBooking, 300);
}

if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        showToast("Booking submitted successfully! 🎉");
    });
}


// Activity 7: Live Booking Summary
const match = document.getElementById("match");
const stand = document.getElementById("stand");
const quantity = document.getElementById("quantity") ||
                 document.getElementById("tickets");
const summary = document.getElementById("summary");

if (match && stand && quantity && summary) {

    function updateSummary() {

        const prices = {
            VIP: 2000,
            Premium: 1000,
            Regular: 500
        };

        const total = prices[stand.value] * Number(quantity.value);

        summary.innerHTML = `
            Match: ${match.value}<br>
            Stand: ${stand.value}<br>
            Quantity: ${quantity.value}<br>
            Total Price: ₹${total}
        `;

        showToast("Booking Summary Updated!");
    }

    match.addEventListener("change", updateSummary);
    stand.addEventListener("change", updateSummary);
    quantity.addEventListener("input", updateSummary);
}


// Activity 8: Team Filter
const teamFilter = document.getElementById("teamFilter");
const matchCards = document.querySelectorAll(".match-card");

if (teamFilter) {

    teamFilter.addEventListener("change", function () {

        const selectedTeam = teamFilter.value;

        matchCards.forEach(card => {

            const teams = card.dataset.team.split(" ");

            if (selectedTeam === "all" || teams.includes(selectedTeam)) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }

        });

    });
}


// Activity 8: Grid and List View
const matchGrid = document.getElementById("matchGrid");
const gridBtn = document.getElementById("gridBtn");
const listBtn = document.getElementById("listBtn");

if (matchGrid && gridBtn && listBtn) {

    gridBtn.addEventListener("click", function () {
        matchGrid.classList.remove("list-view");
        showToast("Grid View Activated!");
    });

    listBtn.addEventListener("click", function () {
        matchGrid.classList.add("list-view");
        showToast("List View Activated!");
    });
}


// Activity 8: Mobile Hamburger Menu
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("active");

        const isOpen = navLinks.classList.contains("active");
        menuToggle.setAttribute("aria-expanded", isOpen);

    });

    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function () {
            navLinks.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });
}

});