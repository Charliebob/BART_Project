function LoadRealTime(result){
  var arrivalTime = [];
  for(i=1; i<result.length; i++){
    var stationAbbr = result[i][0];
    var destination = result[result.length-1][0];


    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
      if(this.readyState == 4 && this.status == 200){
        var xmlDoc = this.responseXML.documentElement;
        var x = xmlDoc.getElementsByTagName('abbreviation');


        for(j=0; j<x.length; j++){
          var eachRoute = x[j];
          var y = get_nextsibling(eachRoute);
          var z = get_nextsibling(y);
          if(eachRoute.textContent == destination){
            arrivalTime[i] = z.childNodes[0].textContent
            //alert(stationAbbr+ " "+eachRoute.textContent + " " + arrivalTime[i] + " "+destination);
            break;
          }
        }

      }
    }
    var URL = "http://api.bart.gov/api/etd.aspx?cmd=etd&orig="+stationAbbr+"&key=Z74P-57S9-865T-DWE9";
    xhr.open("GET",URL, false); //real time estimate
    xhr.send(null);
  }
  return arrivalTime;
}
function get_nextsibling(n) {
    var x = n.nextSibling;
    while (x.nodeType != 1) {
        x = x.nextSibling;
    }
    return x;
}
