// Scroll to Top Button
const scrollBtn = document.getElementById("scrollBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};

scrollBtn.addEventListener("click", function () {
  $('html, body').animate({ scrollTop: 0 }, 'slow');
});

// Simple Contact Form Validation
$(document).ready(function() {
  $("#contactForm").on("submit", function(e) {
    let name = $("#name").val();
    let email = $("#email").val();
    let message = $("#message").val();
    if (name === "" || email === "" || message === "") {
      alert("Please fill out all fields before submitting.");
      e.preventDefault();
    } else {
      alert("Thank you for contacting us!");
    }
  });
});
