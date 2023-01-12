const sections = document.querySelectorAll('.section');
const buttons = document.querySelectorAll('.buttons');
const button = document.querySelectorAll('.button');
const main = document.querySelector('.main');

function PageTransitions() {
    for (let i = 0; i < button.length; i++) {
        button[i].addEventListener('click', function () {
            let current = document.querySelectorAll('.active-button');
            current[0].className = current[0].className.replace(' active-button', '');
            this.className += ' active-button';
        })
    }

    main.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if (id) {
            sections.forEach((section) => {
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })
}

PageTransitions();