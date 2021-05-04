function currentTime() {
    var date = new Date(); /* creating object of Date class */
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);

    //document.getElementById("hhBox").innerText = hour + " : " + min + " : " + sec; /* adding time to the div */
    //var t = setTimeout(function(){ currentTime() }, 1000); /* setting timer */

    document.getElementById("hhBox").innerText = hour;
      var t = setTimeout(function(){ currentTime() }, 1000); /* setting timer */

    document.getElementById("mmBox").innerText = min;
    var t = setTimeout(function(){ currentTime() }, 1000); /* setting timer */  

    document.getElementById("ssBox").innerText = sec; /* adding time to the div */
      var t = setTimeout(function(){ currentTime() }, 1000); /* setting timer */
  }
  
  function updateTime(k) {
    if (k < 10) {
      return "0" + k;
    }
    else {
      return k;
    }
  }
  
  currentTime(); /* calling currentTime() function to initiate the process */

