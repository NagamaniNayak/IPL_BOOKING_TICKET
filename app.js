// Reusable Toast Notification Function
function showToast(message) {
    let toast = document.getElementById("toast");

    if (!toast) {
        toast = document.createElement("div");
        toast.id = "toast";
        document.body.appendChild(toast);
    }

    toast.textContent = message;
    toast.className = "show";

    // Remove the toast after 3 seconds
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


// Booking Form Submission
document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("bookingForm");

    // Smooth scroll when booking.html#bookingForm is opened
    if (form && window.location.hash === "#bookingForm") {
        setTimeout(() => {
            scrollToBooking();
        }, 300);
    }

    // Handle booking form submission
    if (form) {
        form.addEventListener("submit", function (event) {

            event.preventDefault();

            showToast("Your booking details submitted successfully! 🎉");

            form.reset();
        });
    }

});