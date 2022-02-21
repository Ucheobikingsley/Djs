function openNav() {
    document.getElementById("mySidenav").style.width = "1300px";

    
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  var firstname = prompt('enter your Name to login');
  var addall = ('you are welcome Mr ' + firstname);
  alert(addall);