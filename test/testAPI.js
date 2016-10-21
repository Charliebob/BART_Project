var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
    }
};
var station = "stns";
var URL = "http://api.bart.gov/api/stn.aspx?cmd="+station+"&key=Z74P-57S9-865T-DWE9";
xhr.open("GET", URL, true);
xhr.send(null);

function myFunction(xml) {
    var x, txt;
    var xmlDoc = xml.responseXML.documentElement;
    txt = [];
    x = xmlDoc.getElementsByTagName("gtfs_latitude");

    for(i=0; i<x.length; i++){
      txt[i]= x[i].textContent+"<br>"; <!-- childNode[0].nodeValue -->
    }
    document.getElementById("demo").innerHTML = txt;
}





<!--
var stationID;

var stationLatitude;
var stationLongtidude;

function getStationID() {
  var get_id = document.getElementById('myselect');
  var routeSelected = get_id.options[get_id.selectedIndex].value;

  if(routeSelected!=0){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var stationList;
          var xmlDoc = this.responseXML.documentElement;
          stationID = [];
          stationList = xmlDoc.getElementsByTagName("station");

          for(i=0; i<stationList.length; i++){
            stationID[i]= stationList[i].textContent;
          }
          document.getElementById("demo").innerHTML = stationID[0];
          console.log(stationID[0]);

        }
    };
    var routeID = routeSelected;
    var URL = "http://api.bart.gov/api/route.aspx?cmd=routeinfo&route="+routeID+"&key=Z74P-57S9-865T-DWE9";
    xhr.open("GET", URL, false);
    xhr.send(null);

}
} <!-- set xhr to synchronize! false! -->


function getRouteLocation(){

var routeStationLocation = new XMLHttpRequest();
routeStationLocation.onreadystatechange = function(){
  if(this.readyState == 4 && this.status == 200){
    var locationIDreceived = this.responseXML.documentElement;
    var locationID = locationIDreceived.getElementsByTagName("gtfs_latitude");
    stationLatitude = locationID.textContent;
    document.getElementById("locoo").innerHTML = stationLatitude;

  }
};
var stationLocation = stationID[0];

var stationURL = "http://api.bart.gov/api/stn.aspx?cmd=stninfo&orig="+stationLocation+"&key=Z74P-57S9-865T-DWE9";
alert(stationURL);
routeStationLocation.open("POST", stationURL, false);
routeStationLocation.send(null);
}


-->


<!--



      var map = "";
      var marker = "";

      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
              getAPI(this);
          }
      };
      xhr.open("GET", "http://api.bart.gov/api/route.aspx?cmd=routeinfo&route=6&key=Z74P-57S9-865T-DWE9", true);
      xhr.send(null);

      function getAPI(xml) {
          var x, txt;
          var xmlDoc = xml.responseXML.documentElement;
          txt = [];
          x = xmlDoc.getElementsByTagName("station");

          for(i=0; i<x.length; i++){
            txt[i]= x[i].textContent; <!-- childNode[0].nodeValue -->
          }
          document.getElementById("demo").innerHTML = txt;
      }
-->
