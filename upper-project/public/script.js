function convertUpper(){
    let text = document.getElementById('textBox').value;
    let result = text.toUpperCase();
    document.getElementById('converterDiv').innerHTML = result;
}

function copyToClipboard() {
  var copyText = document.getElementById("converterDiv");
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy"); 
  alert("Copied!");
}
  
