function initMap() {
    const location = { lat: 64.128288, lng: -21.827637 }; // Approximate coordinates for Stuðlasel 26, Reykjavík
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: location,
    });
    const marker = new google.maps.Marker({
        position: location,
        map: map,
    });
}

