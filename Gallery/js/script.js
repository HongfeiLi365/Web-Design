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



function magnify() {
    var img, glass, w, h, bw;
    var zoom=2;
    img = document.getElementById("myimage");
  
    /* Create magnifier glass: */
    glass = document.createElement("DIV");
    glass.setAttribute("class", "img-magnifier-glass");
    /* Insert magnifier glass: */
    img.parentElement.insertBefore(glass, img);
  
    /* Set background properties for the magnifier glass: */
    glass.style.backgroundImage = "url('" + img.src + "')";
    glass.style.backgroundRepeat = "no-repeat";
    glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
    bw = 3;
    w = glass.offsetWidth / 2;
    h = glass.offsetHeight / 2;
    
    console.log(glass.style.backgroundSize);
    /* Execute a function when someone moves the magnifier glass over the image: */
    glass.addEventListener("mousemove", moveMagnifier);
    img.addEventListener("mousemove", moveMagnifier);
  
    /*and also for touch screens:*/
    glass.addEventListener("touchmove", moveMagnifier);
    img.addEventListener("touchmove", moveMagnifier);
    function moveMagnifier(e) {
      var pos, x, y;
      /* Prevent any other actions that may occur when moving over the image */
      e.preventDefault();
      /* Get the cursor's x and y positions: */
      pos = getCursorPos(e);
      x = pos.x;
      y = pos.y;
      /* Prevent the magnifier glass from being positioned outside the image: */
      if (x > img.width - 2*(w / zoom)) {x = img.width - 2*(w / zoom);}
      if (x < 2*w / zoom) {x = 2*w / zoom;}
      if (y > img.height - 2*(h / zoom)) {y = img.height - 2*(h / zoom);}
      if (y < 2*h / zoom) {y = 2*h / zoom;}

        /* Set the position of the magnifier glass: */
        glass.style.left = (x - w) + "px";
        glass.style.top = (y - h) + "px";
        /* Display what the magnifier glass "sees": */
        glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
    }
  
    function getCursorPos(e) {
      var a, x = 0, y = 0;
      e = e || window.event;
      /* Get the x and y positions of the image: */
      a = img.getBoundingClientRect();
      /* Calculate the cursor's x and y coordinates, relative to the image: */
      x = e.pageX - a.left;
      y = e.pageY - a.top;
      /* Consider any page scrolling: */
      x = x - window.pageXOffset;
      y = y - window.pageYOffset;
      return {x : x, y : y};
    }
  }

  function deconstruct(){
    var magnifiers = document.getElementsByClassName("img-magnifier-glass");
    for (var i=0; i < magnifiers.length; i++){
        magnifier = magnifiers[i];
        magnifier.parentElement.removeChild(magnifier);
    }
    console.log("deconstruct");
  }