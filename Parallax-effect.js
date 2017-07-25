
      window.onscroll = function() {myFunction()};

function myFunction() {
    var wscroll=document.documentElement.scrollTop;
    var bscroll=document.body.scrollTop;
    if (wscroll > 0 || bscroll>0) {
        if(wscroll){
        document.getElementById("myP").style.cssText += 'transform:translate(0px,'+wscroll/2+'%)';
        document.getElementById("myP2").style.cssText += 'transform:translate(0px,'+wscroll/12+'%)';
        document.getElementById("myP1").style.cssText += 'transform:translate(0px,'+wscroll/1.7+'%)';
        }
       
    }
}
        



