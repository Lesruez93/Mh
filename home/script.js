

jQuery.noConflict();
jQuery(function(){
    var $ = jQuery;
    $(document).ready(function(){ /*code here*/
    console.log("page loded");
        document.getElementsByTagName('video')[0].play().then(s=>{
            console.log('playi')
        });

    });



    $('#focus-single').click(function(){
        $('#map1').vectorMap('set', 'focus', {region: 'AU', animate: true});
    });
    $('#focus-multiple').click(function(){
        $('#map1').vectorMap('set', 'focus', {regions: ['AU', 'JP'], animate: true});
    });
    $('#focus-coords').click(function(){
        $('#map1').vectorMap('set', 'focus', {scale: 7, lat: 35, lng: 33, animate: true});
    });
    $('#focus-init').click(function(){
        $('#map1').vectorMap('set', 'focus', {scale: 1, x: 0.5, y: 0.5, animate: true});
    });


    var countryData ={
        "AF": 16.63,
        "AL": 11.58,
        "DZ": 158.97,
        "AO": 85.81,
        "AG": 1.1,
        "AR": 351.02,
        "AM": 8.83,
        "AU": 1219.72,
        "AT": 366.26,
        "AZ": 52.17,
        "BS": 7.54,
        "BH": 21.73,
        "BD": 105.4,
        "BB": 3.96,
        "BY": 52.89,
        "BE": 461.33,
        "BZ": 1.43,
        "BJ": 6.49,
        "BT": 1.4,
        "BO": 19.18,
        "BA": 16.2,
        "BW": 12.5,
        "BR": 2023.53,
        "BN": 11.96,
        "BG": 44.84,
        "BF": 8.67,
        "BI": 1.47,
        "KH": 11.36,
        "CM": 21.88,
        "CA": 1563.66,
        "CV": 1.57,
        "CF": 2.11,
        "TD": 7.59,
        "CL": 199.18,
        "CN": 5745.13,
        "CO": 283.11,
        "KM": 0.56,
        "CD": 12.6,
        "CG": 11.88,
        "CR": 35.02,
        "CI": 22.38,
        "HR": 59.92,
        "CY": 22.75,
        "CZ": 195.23,
        "DK": 304.56,
        "DJ": 1.14,
        "DM": 0.38,
        "DO": 50.87,
        "EC": 61.49,
        "EG": 216.83,
        "SV": 21.8,
        "GQ": 14.55,
        "ER": 2.25,
        "EE": 19.22,
        "ET": 30.94,
        "FJ": 3.15,
        "FI": 231.98,
        "FR": 2555.44,
        "GA": 12.56,
        "GM": 1.04,
        "GE": 11.23,
        "DE": 3305.9,
        "GH": 18.06,
        "GR": 305.01,
        "GD": 0.65,
        "GT": 40.77,
        "GN": 4.34,
        "GW": 0.83,
        "GY": 2.2,
        "HT": 6.5,
        "HN": 15.34,
        "HK": 226.49,
        "HU": 132.28,
        "IS": 12.77,
        "IN": 1430.02,
        "ID": 695.06,
        "IR": 337.9,
        "IQ": 84.14,
        "IE": 204.14,
        "IL": 201.25,
        "IT": 2036.69,
        "JM": 13.74,
        "JP": 5390.9,
        "JO": 27.13,
        "KZ": 129.76,
        "KE": 32.42,
        "KI": 0.15,
        "KR": 986.26,
        "KW": 117.32,
        "KG": 4.44,
        "LA": 6.34,
        "LV": 23.39,
        "LB": 39.15,
        "LS": 1.8,
        "LR": 0.98,
        "LY": 77.91,
        "LT": 35.73,
        "LU": 52.43,
        "MK": 9.58,
        "MG": 8.33,
        "MW": 5.04,
        "MY": 218.95,
        "MV": 1.43,
        "ML": 9.08,
        "MT": 7.8,
        "MR": 3.49,
        "MU": 9.43,
        "MX": 1004.04,
        "MD": 5.36,
        "MN": 5.81,
        "ME": 3.88,
        "MA": 91.7,
        "MZ": 10.21,
        "MM": 35.65,
        "NA": 11.45,
        "NP": 15.11,
        "NL": 770.31,
        "NZ": 138,
        "NI": 6.38,
        "NE": 5.6,
        "NG": 206.66,
        "NO": 413.51,
        "OM": 53.78,
        "PK": 174.79,
        "PA": 27.2,
        "PG": 8.81,
        "PY": 17.17,
        "PE": 153.55,
        "PH": 189.06,
        "PL": 438.88,
        "PT": 223.7,
        "QA": 126.52,
        "RO": 158.39,
        "RU": 1476.91,
        "RW": 5.69,
        "WS": 0.55,
        "ST": 0.19,
        "SA": 434.44,
        "SN": 12.66,
        "RS": 38.92,
        "SC": 0.92,
        "SL": 1.9,
        "SG": 217.38,
        "SK": 86.26,
        "SI": 46.44,
        "SB": 0.67,
        "ZA": 354.41,
        "ES": 1374.78,
        "LK": 48.24,
        "KN": 0.56,
        "LC": 1,
        "VC": 0.58,
        "SD": 65.93,
        "SR": 3.3,
        "SZ": 3.17,
        "SE": 444.59,
        "CH": 522.44,
        "SY": 59.63,
        "TW": 426.98,
        "TJ": 5.58,
        "TZ": 22.43,
        "TH": 312.61,
        "TL": 0.62,
        "TG": 3.07,
        "TO": 0.3,
        "TT": 21.2,
        "TN": 43.86,
        "TR": 729.05,
        "TM": 0,
        "UG": 17.12,
        "UA": 136.56,
        "AE": 239.65,
        "GB": 2258.57,
        "US": 14624.18,
        "UY": 40.71,
        "UZ": 37.72,
        "VU": 0.72,
        "VE": 285.21,
        "VN": 101.99,
        "YE": 30.02,
        "ZM": 15.69,
        "ZW": 5.554
    };
    var dataC = {
        "countries": [
            {
                "cname": "Uganda",
                "ccode": "UG",
                "content": "John trtrtr gtrtrtrtrtr trtrtrtr ",
                "picture":"assets/images/mod/uganda.jpg",
                "percent": "20"},
            {
                "cname": "Tunisia",
                "picture":"assets/images/mod/tunisia/tunisia.jpg",
                "ccode": "TN",
                "content": "Doe",
                "percent": "30"},

            {
                "cname": "Thailand",
                "picture":"assets/images/mod/thailand/thailand.jpg",
                "ccode": "TH",
                "content": "John",
                "percent": "20"},
            {
                "cname": "Rwanda",
                "ccode": "RW",
                "picture":"assets/images/mod/rwanda/rwanda.jpg",
                "content": "Doe",
                "percent": "30"},
            {
                "cname": "Russia",
                "picture":"assets/images/mod/russia/russia.jpg",
                "ccode": "RU",
                "content": "John",
                "percent": "20"},
            {
                "cname": "Romania",
                "ccode": "RO",
                "picture":"assets/images/mod/romania/romania.jpg",
                "content": "Doe",
                "percent": "30"},
            {
                "cname": "Philippines",
                "ccode": "PH",
                "content": "John",
                "picture":"assets/images/mod/philipiones/philipines.jpg",
                "percent": "20"},
            {
                "cname": "Nigeria",
                "picture":"assets/images/mod/nigeria/nigeria.jpg",
                "ccode": "NG",
                "content": "Doe",
                "percent": "30"},
            {
                "cname": "Nepal",
                "ccode": "NP",
                "picture":"assets/images/mod/nepal/nepal.jpg",
                "content": "John",
                "percent": "20"},
            {
                "cname": "Namibia",
                "ccode": "NA",
                "picture":"assets/images/mod/namibia/namibia.jpg",
                "content": "Doe",
                "percent": "30"},

            {
                "cname": "Malawi",
                "ccode": "MW",
                "picture":"assets/images/mod/malawi/malawi.jpg",
                "content": "John",
                "percent": "20"},
            {
                "cname": "Korea",
                "picture":"assets/images/mod/korea/korea.jpg",
                "ccode": "KP",
                "content": "Doe",
                "percent": "30"},

            {
                "cname": "Ethiopia",
                "ccode": "ET",
                "picture":"assets/images/mod/ethiopia/ethiopia.jpg",
                "content": "John",
                "percent": "20"},
            {
                "cname": "Cameroon",
                "picture":"assets/images/mod/cameroon/cameroon.jpg",
                "ccode": "CM",
                "content": "Doe",
                "percent": "30"},

            {

                "cname": "Burundi",
                "ccode": "BI",
                "picture":"assets/images/mod/burundi/burundi.jpg",
                "content": "John",
                "percent": "20"},

            {

                "cname": "Botswana",
                "ccode": "BW",
                "picture":"assets/images/mod/botswana/botswana.jpg",
                "content": "Botswana",
                "percent": "20"},

            {
                "cname": "USA",
                "picture":"assets/images/notfound.png"
,

                "ccode": "US",
                "content": "Doe",
                "percent": "30"},
            {
                "cname": "South Africa",
                "ccode": "ZA",
                "content": "John",
                "picture":"assets/images/notfound.png"
,

                "percent": "20"},
            {
                "cname": "Lesotho",
                "ccode": "LS",
                "picture":"assets/images/notfound.png"
,

                "content": "Doe",
                "percent": "30"},

            {
                "cname": "Kenya",
                "ccode": "LR",
                "picture":"assets/images/notfound.png"
,

                "content": "John",
                "percent": "20"},
            {
                "cname": "India",
                "ccode": "IN",
                "picture":"assets/images/notfound.png"
,

                "content": "Doe",
                "percent": "30"},


            {
                "cname": "Hungary",
                "ccode": "HU",
                "picture":"assets/images/notfound.png"
,

                "content": "Doe",
                "percent": "30"},

            {
                "cname": "Ghana",
                "ccode": "GH",
                "picture":"assets/images/notfound.png"
,

                "content": "John",
                "percent": "20"},
            {
                "cname": "Canary Islands",
                "ccode": "IC",
                "picture":"assets/images/notfound.png"
,
                "content": "Doe",
                "percent": "30"},


        ]
    };

    var countryData = [];
//for each country, set the code and value
    $.each(dataC.countries, function() {
        countryData[this.ccode] = this.percent;
    });

  var map = $('#map1').vectorMap({
        map: 'world_mill_en',
        colors:{
            "AU-SA": '#00000000',
            "AU-WA":'#00000000',
            "AU-VIC":'#00000000',
            "AU-TAS":'#00000000',
            "AU-QLD":'#00000000',
            "AU-NSW":'#00000000',
            "AU-ACT":'#00000000',
            "AU-NT":'#00000000'

        },
        backgroundColor: '#00000000',


        panOnDrag: true,
        focusOn: {
            x: 0.5,
            y: 0.5,
            scale: 1,
            animate: true
        },
        series: {
            regions: [{
                scale: ['#7b0a2d'],
                normalizeFunction: 'polynomial',
                values:countryData,
            }]
        },


        onRegionClick: function(element, code) {

            var country = $.grep(dataC.countries, function(obj, index) {
                return obj.ccode == code;
            })[0];

            var message =
                country.cname;
            var imageSrc=country.picture;
            var content  = country.content;
             //const  Swal = require('sweetAlert');

            Swal.fire({
                imageUrl:country.picture,
                imageHeight: 500,
                showCloseButton: true,
                showConfirmButton:false,
                fontcolor:'#fff',
                titleText:country.cname,
                imageAlt: country.cname,
                //title:country.cname,
               background:'url(assets/images/bg.png)'

            });

            console.log(message);

            // $('#myModal').modal({
            //     refresh: true
            // });


            // $('#myModal').on('show.bs.modal', function (event) {
            //
            //
            //   //  var button = $(event.relatedTarget) // Button that triggered the modal
            //
            //   //  console.log(event);
            //     //var recipient = button.data('whatever')
            //
            //     var modal = $(this);
            //
            //     modal.find('.modal-title').text(message);
            //     modal.find('.modal-body p').text(content);
            //     modal.find('.modal-body img') .attr('src', imageSrc);
            //
            // })
        }

    });



    $('video').bind('playing', function (e) {

                $('#hh').hide(200)
            });

    $('video').bind('ended', function (e) {
        window.open('host.html');

            $('video').hide(2000);
                    $('#hh').show(2000)
                });


    $('video').bind('pause', function (e) {
        window.open('host.html')

                $('video').hide(2000);
                $('#hh').show(2000)
            });


});



