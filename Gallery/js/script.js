function updateImgs(button){
    imgs = document.querySelectorAll(".ffxv-shots");
    var numbers = []
    for (var i=0;i<imgs.length;i++){
        img = imgs[i];
        numbers.push(parseInt(img.src.match(/(\d+).jpg/i)[1]));
        var random_n = getRndInteger(1,25);
        while (numbers.indexOf(random_n)>= 0){
            random_n = getRndInteger(1,25);
        }
        numbers.push(random_n);
        var url = "img/ffxv" + random_n + ".jpg"
        img.src = url;
    }
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

function getNext(button){
    img = document.querySelector(".ffxv-shots");
    var url = img.src;
    var n = parseInt(url.match(/(\d+).jpg/i)[1]);
    if (n < 25){
        n++;
    }
    else{
        n=1;
    }
    img.src = "img/ffxv" + n + ".jpg"
}

function getPrevious(button){
    img = document.querySelector(".ffxv-shots");
    var url = img.src;
    var n = parseInt(url.match(/(\d+).jpg/i)[1]);
    if (n > 1){
        n--;
    }
    else{
        n=25;
    }
    img.src = "img/ffxv" + n + ".jpg"
}