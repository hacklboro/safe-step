const getNearbyLocations = (query, long, lang, radius=10000) => {
    let url = "https://maps.googleapis.com/maps/api/place/textsearch/json?"
    
    //add query
    url += "query=" +query.toLowerCase().replace(" ", "+");  // convert to lower case and replace spaces with + symbols
    
    // add current position
    url += "&location="+ long + ","+lang;

    // add radius of places to list
    url += "&radius="+ radius;

    // add api key
    url += "&key" = process.env.GOOGLE_KEY;

    const Http = new XMLHttpRequest();
    Http.open("GET", url);
    Http.send();

    Http.onreadystatechange = (e) => {
        if (this.readyState == 4 ) { // recvd response
            if(this.status == 200) {  // successul query
                console.log(Http.responseText);
            }
            else {  // something went wrong
                console.log(Http.responseText);
            }
        } 
    }
}