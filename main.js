const dropdownBtn = document.getElementById('dropdown-btn');
const mobileNav = document.getElementById('mobile-nav');

dropdownBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('hidden');
});