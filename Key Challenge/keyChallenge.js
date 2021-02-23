document.addEventListener("keydown", function(event) {
   document.getElementById(
        "eventWhich"
      ).innerHTML = `${event.which}.`;
  document.getElementById(
        "eventKey"
      ).innerHTML = `${event.key}.`;
  document.getElementById(
        "eventCode"
      ).innerHTML = `${event.code}.`;
});



