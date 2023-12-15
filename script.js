document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('nav a');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const sectionId = this.id.replace('-link', '-section');
            showSection(sectionId);
            setActiveLink(this.id);
        });
    });

    function showSection(sectionId) {
        const sections = document.querySelectorAll('.container');
        sections.forEach(section => {
            section.style.display = 'none';
        });

        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.style.display = 'block';
        }
    }

    function setActiveLink(linkId) {
        links.forEach(link => {
            link.classList.remove('active');
        });

        const activeLink = document.getElementById(linkId);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }
});
