// navbar blur

document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.getElementById('navbar'); // Get the navbar element
    const contactSection = document.getElementById('contact'); // Get the contact section element
    const headerLinks = document.querySelectorAll('.header a'); // Get all links within the .header element

    // Add scroll event listener
    window.addEventListener('scroll', function() {
        // Check if the page has been scrolled
        if (window.scrollY > 0 && window.scrollY < contactSection.offsetTop) {
            navbar.classList.add('blur-background'); // Add the CSS class for the blur effect and white background
            navbar.classList.remove('contact-blur-background'); // Remove contact-blur class if not in contact section
            navbar.classList.remove('text-light');

            headerLinks.forEach(link => {
                link.style.color = ''; // Reset color to default
            });
        } 
        else if (window.scrollY >= contactSection.offsetTop) {
            navbar.classList.remove('blur-background'); // Remove blur effect if in contact section
            navbar.classList.add('contact-blur-background'); // Add contact-blur class
            navbar.classList.add('text-light'); // Add text-light class

            // Change color for header links in contact section
            headerLinks.forEach(link => {
                link.style.color = 'white'; // Set color to white
            });
        }
        else {
            navbar.classList.remove('contact-blur-background'); // Remove contact-blur class if not in contact section
            navbar.classList.remove('blur-background'); // Remove blur class if not in contact section
            navbar.classList.remove('text-light'); // Remove text-light class if not in contact section
            navbar.style.transition = 'all 0.5s ease-in-out';
        }
    });
});

   // Nav link active

  // Function to check if an element is in view
        function isInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }

        // Function to update active link
        function updateActiveLink() {
            const navLinks = document.querySelectorAll('.navbar-items .nav-link');
            let activeLink = null; // Variable to store the active link

            // Loop through all sections to check if they are in view
            const sections = document.querySelectorAll('section');
            sections.forEach(section => {
                if (isInViewport(section)) {
                    const sectionId = section.getAttribute('id');
                    const correspondingLink = document.querySelector(`.navbar-items .nav-link[href="#${sectionId}"]`);
                    if (correspondingLink) {
                        activeLink = correspondingLink; // Store the active link
                    }
                }
            });

            // Remove 'active' class from all links
            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            // Add 'active' class to the stored active link
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }

        // Initial call to update active link on page load
        updateActiveLink();

        // Event listener for scroll to update active link
        window.addEventListener('scroll', updateActiveLink);


        // scroll to top

        // Function to scroll back to the top of the page
        function scrollToTop() {
            window.scrollTo({
            top: 0,
            behavior: 'smooth'
            });
        }
        
        // Show the button when scrolling down the page
        window.onscroll = function() {
            scrollFunction()
        };
        
        function scrollFunction() {
            var button = document.getElementById("back-to-top-btn");
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            button.style.display = "block";
            } else {
            button.style.display = "none";
            }
        }