var aside1 = document.getElementById("aside1");
var aside2 = document.getElementById("aside2");
var aside3 = document.getElementById("aside3");

aside1.style.backgroundImage = 'url("img/123.JPG")';
aside2.style.backgroundImage = 'url("img/20171016_Ekroth_1.jpg")';
aside3.style.backgroundImage = 'url("img/profile_big5.jpg")';

var asides = [aside1, aside2, aside3];

var i = 0;

// var slideshowImages = ["123.JPG", "20171016_Ekroth_1.jpg", "profile_big5.jpg"]
// var i = 0;

(function slide() {
  setInterval(() => {
    asides.forEach((item) => {
      item.classList.add('hidden');
    })
    asides[i].classList.remove('hidden');
    if (i < 2) {
      i++
    } else {
      i = 0;
    }
  }, 8000);
}
)();
