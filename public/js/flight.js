$(document).ready(function() {
    var appKey = '3e36be5bc315845b2d546c195a3141a4';
    var appID = '41f1c3c0';
    var flightstats = {};

    $('#give_me').click(function () {
      var airline = $('#airline').val();
      var flight_num = $('#flight_num').val();
      var year = new Date().getFullYear();
      var month = new Date().getMonth() + 1;
      var day = new Date().getDate();
/*========================================
          API INTEGRATION
========================================*/
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
              flightstats.flightId = data.flightStatuses[i].flightId;
              flightstats.carrier = data.appendix.airlines[i].name;
              flightstats.departure_date = data.flightStatuses[i].departureDate.dateUtc;
                departure = new Date(flightstats.departure_date).toLocaleTimeString();
                  newDeparture = departure.replace(/:\d\d /, ' ');                
              flightstats.arrival_date = data.flightStatuses[i].arrivalDate.dateUtc;
                arrival = new Date(flightstats.arrival_date).toLocaleTimeString();
                  newArrival = arrival.replace(/:\d\d /, ' ');
              flightstats.status = data.flightStatuses[i].status;
            };
/*========================================
          FLIGHT STATUS CONVERSION
========================================*/
            if (flightstats.status === "S") {
              flightstats.status = "Scheduled";
            }else if (flightstats.status === "A") {
              flightstats.status = "En Route"; 
            }else if (flightstats.status === "C") {
              flightstats.status = "Canceled";                      
            }else if (flightstats.status === "D") {
              flightstats.status = "Diverted"; 
            }else if (flightstats.status === "DN") {
              flightstats.status = "Data source needed";
            }else if (flightstats.status === "NO") {
              flightstats.status = "Not Operational";
            }else if (flightstats.status === "R") {
              flightstats.status = "Redirected";
            }else if (flightstats.status === "L") {
              flightstats.status = "Landed";
            }else if (flightstats.status === "U") {
              flightstats.status = "Unknown";                    
            }else {
              flightstats.status = "CHECK INPUT";
            }
/*========================================
          FLIGHT MODAL APPEND
========================================*/
            if (data.flightStatuses[i].hasOwnProperty('delays')) {
              $('#delayed_status').html("");
              $('#delayed_status').append("<h1 class='delayed'>" + flightstats.status + "</h1>");
              $('#delayed_modal').modal('show');
              } else {
              $('#other_status').html("");
              $('#other_status').append("<h1 class='ontime'>" + flightstats.status + "</h1>");   
              $('#other_modal').modal('show');  
              }

            $('.flightstats').html("");
            $(".flightstats").append(
            "<tr><td>" + flightstats.airline_code + " " + flightstats.flight_number +"</td>" +
            "<td>" + flightstats.carrier +"</td>" +
            "<td>" + newDeparture +"</td>" + 
            "<td>" + newArrival +"</td>") 
            },
            error: function (error_message) {
                console.log(error_message);
             }
      })
    });
});
