function fetchMap() {

    fetch('/api/someEndpoint', {
        method: 'GET', // or 'POST', 'PUT', 'DELETE', etc.
        headers: {
            'Content-Type': 'application/json' // set appropriate headers
        },
        // add request body for POST or PUT requests
        // body: JSON.stringify(data)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            return(data);
        })
        .catch(error => {
            //handle error
        });

}

function fetchWeather() {

    fetch('/api/someEndpoint', {
        method: 'GET', // or 'POST', 'PUT', 'DELETE', etc.
        headers: {
            'Content-Type': 'application/json' // set appropriate headers
        },
        // add request body for POST or PUT requests
        // body: JSON.stringify(data)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            return(data);
        })
        .catch(error => {
            // handle error
        });

}

function fetchLocations() {

    fetch('/api/someEndpoint', {
        method: 'GET', // or 'POST', 'PUT', 'DELETE', etc.
        headers: {
            'Content-Type': 'application/json' // set appropriate headers
        },
        // add request body for POST or PUT requests
        // body: JSON.stringify(data)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            return(data);
        })
        .catch(error => {
            // handle error
        });

}