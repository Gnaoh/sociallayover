$(document).ready(function() {
    var appKey = '3e36be5bc315845b2d546c195a3141a4';
    var appID = '41f1c3c0';
    var display_info = {};
    var relevant_info = [];
    
    $('#give_me').click(function () {
        var airline = $('#airline').val();
        var flight_num = $('#flight_num').val();
        var year = new Date().getFullYear()
        var month = new Date().getMonth() + 1
        var day = new Date().getDate()

        $.ajax({
            url: 'https://api.flightstats.com/flex/flightstatus/rest/v2/jsonp/flight/status/' + airline + '/' + flight_num + '/dep/' + year + '/' + month + '/' + day + '?appId=' + appID + '&appKey=' + appKey,
            type: 'GET',
            dataType: 'jsonp',
            success: function (data) {
                console.log(data);
                for (i = 0; i < data.flightStatuses.length; i++) {
                    display_info = {};
                    display_info.arrival_airport = data.flightStatuses[i].arrivalAirportFsCode;
                    display_info.departure_airport = data.flightStatuses[i].departureAirportFsCode;
                    display_info.status = data.flightStatuses[i].status;
                    relevant_info.push(display_info);
                    if (data.flightStatuses[i].hasOwnProperty('delays')) {
                        $('#display').append("<div><p>" + "Departure Airport: " + display_info.departure_airport + "<br>"
                            + "Arrival Airport: " + display_info.arrival_airport + "<br>" + "Delayed Minutes: "
                            + data.flightStatuses[i].delays.departureGateDelayMinutes + "</p></div>");
                        $('#minutes').append("Flight is delayed for: " + "<br>" + data.flightStatuses[i].delays.departureGateDelayMinutes
                            + " minutes" + "<br>");
                        $('#flightModal').modal('show');
                    }
                    else {
                        $('#display').append("<div><p>" + " Departure Airport: " + display_info.departure_airport + "<br>"
                            + " Arrival Airport: " + display_info.arrival_airport + "<br>" + " Current Flight Status: "
                            + display_info.status + "<br>" + "</p></div>");
                        $('#flightModal1').modal('show');
                    }
                }
            },
            error: function (error_message) {
                console.log(error_message);
            }
        });

    });
});