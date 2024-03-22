// Smooth scrolling for navigation links
$(document).ready(function() {
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
});

// Form validation example (assuming you have a form with id="contactForm")
$(document).ready(function() {
    $('#contactForm').submit(function(event) {
        var name = $('#name').val();
        var email = $('#email').val();
        var message = $('#message').val();

        if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
            alert('Please fill out all fields.');
            event.preventDefault();
        }
        // You can add more complex validation logic here if needed
    });
});