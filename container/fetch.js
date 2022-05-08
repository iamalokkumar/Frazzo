
let displaymap= async (q,w)=>{
    let url = `https://maps.google.com/maps?q=${q}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
    let map = document.getElementById(w);
    map.src=url;
}


let current_location_show = (w)=>{
    navigator.geolocation.getCurrentPosition(success)
    function success(pos){
        let cord = pos.coords
        console.log(cord)
      
        let url = `https://maps.googleapis.com/maps/api/staticmap?center="${cord.latitude},${cord.longitude}"&zoom=14&size=400x300&key=AIzaSyAa8HeLH2lQMbPeOiMlM9D1VxZ7pbGQq8o`;
        let map = document.getElementById(w);
        map.src=url;
    }
}

export {displaymap,current_location_show} 


