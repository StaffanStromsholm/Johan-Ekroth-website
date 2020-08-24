var aside = document.getElementById("aside");
var slideshowImages = ["123.JPG", "20171016_Ekroth_1.jpg", "profile_big5.jpg"](
  function slide() {
    setInterval(() => {
      aside.style.backgroundImage = "url('/img/123.JPG')";
    }, 2000);
  }
)();
