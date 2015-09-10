$(document).ready(function() {
    var appKey = '3e36be5bc315845b2d546c195a3141a4';
    var appID = '41f1c3c0';
    var flightstat = {};
    var displaystats = [];

    
    $('#give_me').click(function () {
        var airline = $('#airline').val();
        var flight_num = $('#flight_num').val();
        var year = new Date().getFullYear()
        var month = new Date().getMonth() + 1
        var day = new Date().getDate()

        $.ajax({
          url: 'https://api.flightstats.com/flex/flightstatus/rest/v2/jsonp/flight/status/' + airline + '/' + flight_num + '/dep/' + year + '/' + month + '/' + day + '?appId=' +appID + '&appKey=' + appKey,
          type: 'GET',
          dataType: 'jsonp',
          success: function (data) {
            console.log(data);
              if ( var i = 0; i < data.flightStatuses.length; i++){
                flightstats.

                
              }

          },
          error: function () {
                  alert("Unable to find results!") 
            console.log(error_message);
            }
        });

    });
});