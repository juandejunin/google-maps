let map;

const input = document.getElementById('place_input')
const cords = { lat: -25.344, lng: 131.031 };
let marker
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: cords,
    zoom: 4,
  });

    // The marker, positioned at Uluru
    marker = new google.maps.Marker({
        position: cords,
        map: map,
      });
    initAutocomplete()
}
function initAutocomplete(){
    const autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.addListener('place_changed', function(){
        const place = autocomplete.getPlace()
        console.log(place)
        map.setCenter(place.geometry.location)
        marker.setPosition(place.geometry.location)
    })
}

window.initMap = initMap;