function loadXMLDoc(dname){
  var xhr = new XMLHttpRequest();
  xhr.open("GET", dname, true);
  xhr.send();
  return xhr.responseXML;
}
