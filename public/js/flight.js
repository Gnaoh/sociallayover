$(document).ready(function() {
    var myApiKey = '3e36be5bc315845b2d546c195a3141a4';
    var appID = '41f1c3c0';
    var year;
    var month;
    var day;
    var display_info = {};
    var relevant_info = [];
    
    $('#give_me').click(function () {
        var airline = $('#airline').val();
        var flight_num = $('#flight_num').val();
        var year = new Date().getFullYear()
        var month = new Date().getMonth() + 1
        var day = new Date().getDate()

        $.ajax({
            url: 'https://api.flightstats.com/flex/flightstatus/rest/v2/jsonp/flight/status/' + airline + '/' + flight_num + '/dep/' + year + '/' + month + '/' + day + '?appId=' + appID + '&appKey=' + myApiKey,
            type: 'GET',
            dataType: 'jsonp',
            success: function (data) {
                console.log(data);
            },
            error: function (error_message) {
                console.log(error_message);
            }
        });

    });
});