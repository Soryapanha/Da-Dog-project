(function () {
    setInterval(() => {
        var coverImg = document.getElementById('home-cover-image');
        var random = Math.floor(Math.random() * 5) + 1;
        var url = `/image/cover/${random}.jpg`;
        coverImg.src = url;
    }, 3000);
})();
