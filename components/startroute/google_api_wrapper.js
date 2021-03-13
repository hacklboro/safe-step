export const getNearbyLocations = (query, long, lang, radius=10000) => {
    return new Promise((resolve, reject) => {
        let url = "https://maps.googleapis.com/maps/api/place/textsearch/json?"
    
        //add query
        url += "query=" +query.toLowerCase().replace(" ", "+");  // convert to lower case and replace spaces with + symbols
        
        // add current position
        url += "&location="+ long + ","+lang;

        // add radius of places to list
        url += "&radius=" + radius;

        // add api key
        url += "&key=" +  GOOGLE_KEY;

        if (xhr) xhr.abort();  // stop any current requests
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.send();

        xhr.onreadystatechange = function () {
            // In local files, status is 0 upon success in Mozilla Firefox
            if(xhr.readyState === XMLHttpRequest.DONE) {
              var status = xhr.status;
              if (status === 0 || (status >= 200 && status < 400)) {
                // The request has been completed successfully
                console.log(xhr.responseText);
              } else {
                // Oh no! There has been an error with the request!
              }
            }
          };
    });
}