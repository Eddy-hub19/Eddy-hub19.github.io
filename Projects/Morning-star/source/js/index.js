const sections = document.querySelectorAll('section1');

function scrollActive() {

    const scrollY = window.pageYOffset;

    sections.forEach(current => {

        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;


        sectionId = current.getAttribute('id');


        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {

            document.querySelector('.header__nav-link a[href*=' + sectionId + ']').classList.add('active-link');

        } else {

            document.querySelector('.header__nav-link a[href*=' + sectionId + ']').classList.remove('active-link');

        }

    })

}

window.addEventListener('scroll', scrollActive);