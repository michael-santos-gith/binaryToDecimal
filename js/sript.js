function binaryDecimal(binary) {
    return parseInt(binary, 2);
  }
  
  function findKeyCode(event) {
    let keyCode = (event.keyCode ? event.keyCode : event.wich);
    if (keyCode != 48 && keyCode != 49) {
      event.preventDefault();
    }
  }
  
  let binary = document.getElementById('binary-number');
  binary.addEventListener('keypress', function() {
    findKeyCode(event)
  })
  
  let caculate = document.getElementById('compute');
  caculate.addEventListener('click', function() {
    if (binary.value == "") {
      document.getElementById('response').innerHTML = 0;
    } else {
      document.getElementById('response').innerHTML = binaryDecimal(binary.value);
    }
  })