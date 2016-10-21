function LoadLocationID(routeID){

  var result = [[]];
  var xmlDoc = loadXMLDoc("./bartInfo/"+routeID+".xml");
  var routeStations = xmlDoc.getElementsByTagName("station");
  var routeColor = xmlDoc.getElementsByTagName("color");

  var xmlDocStations = loadXMLDoc("./bartInfo/stations.xml");
  var abbr = xmlDocStations.getElementsByTagName("abbr");
  var stationName = xmlDocStations.getElementsByTagName("name");
  var stationLatitude = xmlDocStations.getElementsByTagName("gtfs_latitude");
  var stationLongtidude = xmlDocStations.getElementsByTagName("gtfs_longitude");

  function displayInfo(i){
    myOrigin = routeStations[i];
    return myOrigin;
  }

  function displayColor(){
    return routeColor[0].textContent;
  }

  function displayLatitude(i){
    myLatitude = stationLatitude[i].textContent;
    return myLatitude;
  }

  function displayLongtitude(i){
    myLongtitude = stationLongtidude[i].textContent;
    return myLongtitude;
  }

  function displayStationName(i){
    myStationName = stationName[i].textContent;
    return myStationName;
  }



  for(i=0; i<routeStations.length; i++){
    for(j=0; j<stationLatitude.length; j++){
      if(abbr[j].textContent == displayInfo(i).textContent){
        var insideResult = [];
        insideResult.push(displayInfo(i).textContent,displayLatitude(j),displayLongtitude(j),displayColor(),displayStationName(j));
        result.push(insideResult);
      }
    }
  }

  return result;
}
function loadXMLDoc(dname){
  var xhr = new XMLHttpRequest();
  xhr.open("GET", dname, false);
  xhr.send();
  return xhr.responseXML;
}
