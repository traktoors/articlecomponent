document.getElementById('share').addEventListener('click', function () {
    document.getElementById('share-opt-lgd').classList.toggle('opacity-none');
    document.getElementById('share-opt-lgd').classList.toggle('opacity-full');
    if (window.innerWidth < 765) {
        document.getElementById('profile-pic').classList.toggle('opacity-none');
        document.getElementById('name-date').classList.toggle('opacity-none');
        document.getElementById('profile-g').classList.toggle('profile-g-width-lg');
    }
});