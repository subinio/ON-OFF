function myMap() {
    var myLatLng={lat: 37.56667, lng: 126.97806};

    var map = new google.maps.Map(document.getElementById("googleMap"), {
        center: myLatLng,
        zoom:10
    });

    var marker = new google.maps.Marker({
      position: myLatLng,
      title: "Seoul!"
    });
      marker.setMap(map);
  }
src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDMHdctp9z-1dH4cR6tmEuAfXfi6nOUBa8&callback=myMap">
