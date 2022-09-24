document.addEventListener("DOMContentLoaded", function() {
    var flexbox = document.createElement('div');
    flexbox.style.display = 'flex';
    flexbox.style.flexDirection = 'row';
    flexbox.style.justifyContent = 'center';
    flexbox.style.alignItems = 'center';
    flexbox.style.height = '100%';
    document.body.appendChild(flexbox);
  
    for (var i = 0; i < 7; i++) {
      var div = document.createElement('div');
      div.style.width = '100px';
      div.style.height = '100px';
      div.style.backgroundColor = 'red';
      div.style.margin = '10px';
      flexbox.appendChild(div);
    }
  
    var divs = document.getElementsByTagName('div');
    for (var i = 0; i < divs.length; i++) {
      divs[i].style.width = '200px';
    }
  
    for (var i = 0; i < divs.length; i++) {
      divs[i].style.margin = '0px';
    }
  
    for (var i = 0; i < divs.length; i++) {
      divs[i].style.margin = '5px';
    }
  
    for (var i = 0; i < divs.length; i++) {
      divs[i].style.borderRadius = '50px';
    }
  
    var keyframes = document.createElement('style');
    keyframes.innerHTML = '@keyframes heightChange { 0% { height: 30px; } 50% { height: 50px; } 100% { height: 30px; } }';
    document.head.appendChild(keyframes);
  
    for (var i = 0; i < divs.length; i++) {
      divs[i].style.animationName = 'heightChange';
      divs[i].style.animationDuration = '2s';
      divs[i].style.animationIterationCount = 'infinite';
    }
  
    for (var i = 0; i < divs.length; i++) {
      if (i % 2 == 0) {
        divs[i].style.animationDelay = '1s';
      }
    }
  
    for (var i = 0; i < divs.length; i++) {
      divs[i].style.width = '130px';
      divs[i].style.height = '30px';
    }
  });