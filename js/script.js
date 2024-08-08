document.addEventListener('DOMContentLoaded', function () {
    const avatar = document.getElementById('avatar');

    avatar.addEventListener('mouseover', function () {
        this.classList.add('rotate');
    });

    avatar.addEventListener('mouseout', function () {
        this.classList.remove('rotate');
    });
});
