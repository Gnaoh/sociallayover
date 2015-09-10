$(document).ready(function() {
    var appKey = '3e36be5bc315845b2d546c195a3141a4';
    var appID = '41f1c3c0';
    var flightstats = {};
    var flightappendix = {}

    $('#give_me').click(function () {
        var airline = $('#airline').val();
        var flight_num = $('#flight_num').val();
        var year = new Date().getFullYear();
        var month = new Date().getMonth() + 1;
        var day = new Date().getDate();

        $.ajax({
          url: 'https://api.flightstats.com/flex/flightstatus/rest/v2/jsonp/flight/status/' + airline + '/' + flight_num + '/dep/' + year + '/' + month + '/' + day + '?appId=' +appID + '&appKey=' + appKey,
          type: 'GET',
          dataType: 'jsonp',
          success: function (data) {
            console.log(data);
              for (i = 0; i < data.flightStatuses.length; i++) {
                flightstats = {};
                flightstats.airline_code = data.flightStatuses[i].carrierFsCode;
                flightstats.flight_number = data.flightStatuses[i].flightNumber;
                // flightstats.departure_code = data.flightStatuses[i].departureAirportFsCode;
                // flightstats.arrivals_code = data.flightStatuses[i].arrivalAirportFsCode;
                flightstats.status = data.flightStatuses[i].status;
                flightstats.flightId = data.flightStatuses[i].flightId;
                flightstats.carrier = data.appendix.airlines[i].name;
                flightstats.departure_date = data.flightStatuses[i].departureDate.dateUtc;
                  departure = new Date(flightstats.departure_date).toLocaleTimeString();
                    newDeparture = departure.replace(/:\d\d /, ' ');                
                flightstats.arrival_date = data.flightStatuses[i].arrivalDate.dateUtc;
                  arrival = new Date(flightstats.arrival_date).toLocaleTimeString();
                    newArrival = arrival.replace(/:\d\d /, ' ');
              }
              $(".flightstats").append(
                "<tr><td>" + flightstats.airline_code + " " + flightstats.flight_number +"</td>" +
                "<td>" + flightstats.carrier +"</td>" +
                "<td>" + newDeparture +"</td>" + 
                "<td>" + newArrival +"</td>" + 
                "<td>" + flightstats.status +"</td></tr>"
                );

            },
            error: function (error_message) {
                console.log(error_message);
             }
        })

    });
});
