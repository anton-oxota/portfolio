/* Open / Close navigation */

const openNavigationButton = document.querySelector('.open-navigation-button'),
    closeNavigationButton = document.querySelector('.close-navigation-button'),
    navigationMenu = document.querySelector('.promo__menu-overlay'),
    navigationLink = document.querySelectorAll('.promo-navigation__list-link');

openNavigationButton.addEventListener('click', () => {
    navigationMenu.classList.add('active');
});

closeNavigationButton.addEventListener('click', () => {
    navigationMenu.classList.remove('active');
});

navigationLink.forEach(link => {
    link.addEventListener('click', () => {
        navigationMenu.classList.remove('active');
    })
})



/* Skills item percent */

const skillsItemPercent = document.querySelectorAll('.skills-item__percent'),
    skillsItemLine = document.querySelectorAll('.skills-item__line > span');


skillsItemPercent.forEach((percent, index) => {
    skillsItemLine[index].style.width = percent.innerHTML;
});

