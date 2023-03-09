let bgiarr = ['https://wallpapers.com/images/hd/shrek-s-swamp-house-912ivi1v9qemna0n.jpg', 'https://rare-gallery.com/uploads/posts/526389-shrek.jpg', 'https://rare-gallery.com/uploads/posts/244219-shrek-3000x1808.jpg'];
let bntTl = document.getElementById('btnToilet')
let bgimg = document.querySelector('body').style.backgroundImage = `url("https://wallpapers.com/images/hd/shrek-s-swamp-house-912ivi1v9qemna0n.jpg")`

let i = 0;
function cngBGI() {
    i++;
    
    var computedStyle = getComputedStyle(document.body);
    if (i == bgiarr.length) {
        i = 0;
    }
    document.querySelector('body').style.backgroundImage = `url(${bgiarr[i]})`;


    var computedStyle = getComputedStyle(document.body);
    if (computedStyle.backgroundImage.toString() != bgimg.toString()) {
        bntTl.style.display = 'none';
    }
    else {
        bntTl.style.display = 'initial';
    }

}





