document.addEventListener('DOMContentLoaded', function () {
    const dropdownToggle = document.getElementById('dropdownMenuLink');
    const dropdownMenu = document.querySelector('.dropdown-sidemenu');

    dropdownToggle.addEventListener('click', function () {
        dropdownMenu.classList.toggle('show');
        dropdownToggle.classList.toggle('active');
    });

    // Close the dropdown menu when clicking outside of it
    document.addEventListener('click', function (event) {
        if (!event.target.closest('.side_dropdown')) {
            dropdownMenu.classList.remove('show');
            dropdownToggle.classList.remove('active');
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    let isScrolling = false;

    window.addEventListener('scroll', function () {
        if (!isScrolling) {
            window.requestAnimationFrame(function () {
                const topbar = document.getElementById('topbar');
                const navbar = document.getElementById('navbar');
                const body = document.body;

                if (window.scrollY > 0) {
                    topbar.classList.add('scrolled');
                    navbar.classList.add('navbar-fixed');
                    body.classList.add('scrolling');
                } else {
                    topbar.classList.remove('scrolled');
                    navbar.classList.remove('navbar-fixed');
                    body.classList.remove('scrolling');
                }

                isScrolling = false;
            });

            isScrolling = true;
        }
    });
});

