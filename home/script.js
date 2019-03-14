const Swal = require('sweetalert2')

jQuery.noConflict();
jQuery(function(){
    var $ = jQuery;

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
                "picture":"assets/images/mod/nigeria/ethiopia/ethiopia",
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
                "picture":"assets/images/mod/botswa",

                "ccode": "US",
                "content": "Doe",
                "percent": "30"},
            {
                "cname": "South Africa",
                "ccode": "ZA",
                "content": "John",
                "picture":"assets/images/mod/botswa",

                "percent": "20"},
            {
                "cname": "Lesotho",
                "ccode": "LS",
                "picture":"assets/images/mod/botswa",

                "content": "Doe",
                "percent": "30"},

            {
                "cname": "Kenya",
                "ccode": "LR",
                "picture":"assets/images/mod/botswa",

                "content": "John",
                "percent": "20"},
            {
                "cname": "India",
                "ccode": "IN",
                "picture":"assets/images/mod/botswa",

                "content": "Doe",
                "percent": "30"},


            {
                "cname": "Hungary",
                "ccode": "HU",
                "picture":"assets/images/mod/botswa",

                "content": "Doe",
                "percent": "30"},

            {
                "cname": "Ghana",
                "ccode": "GH",
                "picture":"assets/images/mod/botswa",

                "content": "John",
                "percent": "20"},
            {
                "cname": "Canary Islands",
                "ccode": "IC",
                "picture":"assets/images/mod/botswa",
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

            Swal.fire({
                imageUrl: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhASEhISFRUVEBUQEBUVEBAVFRUPFxUWFhUVFRUYHSggGBolHRYWITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGysdHx0tLS0tKy0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLSstLSstLS0rLS0tLS0tLS0tLSs3K//AABEIAMMBAwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAACBQEGB//EADkQAAEDAwMCBQIFAwIGAwAAAAEAAhEDBCEFEjFBUQYTImFxgZEyQqGx8BQjwVLRU2JygqLxFRYz/8QAGgEAAwEBAQEAAAAAAAAAAAAAAQIDAAQFBv/EACgRAAICAgIDAAEDBQEAAAAAAAABAhEDIRIxBBNBYSIyUXGRwfDxI//aAAwDAQACEQMRAD8Ay6QTLWIVFqbY1fTnzwLYulqLsVtqwBR7EKFoOpoD6SdMVixCo5qY2Krmp0AWCPTVHNXWFZmsKAmaBQQi0kjGTH6ITgalqAT9NqmxkC2K2xH2LuxCwixYptR3NVdq1mB7VzajbF3YsYAWqhamixDc1Ywq4Khajuaq7UTWBhccj7UvclY1iFy9ZV1UTt09ZNd6rFCykL1SgORXBULVUSwRaqliPC61iDCmLeSomtqiUez0bGpimUGmUdrVEFhmhW2KtIphoQMBDF19JM+WoWLWZmXUpwVQsWhVppWE6Yoo5iEWwnXMQajU9gOUkdgS9NNsCVhQ/Z5WlQCyrR0FbFAKUh0E2qQjbVA1JY1CzmqoYmHMXW00bNQEMXdqOaa5sWswBzUJzUy4ITwiAWLVwtRYUIWALuCzLx607owF56/rJ4q2ZiN1USDkaqZQYXQkSbBkLhaiwoGImBtarhqIGLjkoQS4oXKLBPQMTNNyAGojSohGmNRWGECm9HGUoR2mQVZzUtSfCepiUj0N2JvYla9FalSjCXe1MpCtGaEGqExXpEGUB/EqiYBdNUDKXIRbd2VmZDlPlblpkArGY1a2nvxClIojS2rm1Ep5CttUbGoCWqzGIpao1q1mKFioWoxVXoJmFHhBeEw9AKshWUDVx4hFISt1UgLGM6/q8rzt0/K0tRr8rHquXRjROTAOCqQrkrgCoIUhXAVwxccsYq5yA8yruVdqAQe1RF2qImPTbFQsTG1RzFzWUoWkhEZVhcc1BhEBo06gKcoVYCyKboTTKyVoKZrtfKo+mkKdUhaFOqHBTaoIrWZKzq1GFsOpIFelMp1IDRj7V0NRajIKgCpYo7bZCct3QUhaGDC0A1RkyiNm0dKaLUhZv4Wi4KE+x0CIVmBdeFWm5D4Y69qE8I7ig1SjEzFXoLRlGeV1rFa9CgHBY+pVYlbV2YC8jqt1JITwVsEujPuqspQhXc5cC6VoicDERrFZjFx71rNQOoUBxlXe5V2omKAKwYihiu2mg2FIDsUTewKJeQaZ6Ly1x7Vtajo1Rku2Q2Adu4EgHGY/mUKlpFZ2wCm71n08dOT7D3K89ZoVdnS8M06ow3tQtq2tW09tN+xr90fi9JaWu6ggrMcxWhkUlaJyjToAWqBFLVQtT2LQei4dU9b0vUACM9VlAI1KoQlYyPRspAYMfRK3tIDISDKxEGT90/TrByltDaZl3VLqEs1a1enCzq9ODKrGViONFmDqtKiZCyqL0/ZuzCExomnaO6LXD/SFhtdBC06D8KMlYyCPegh65UqIAfKZIDGfMQqtRVlDe7KNAOAyU02Eqwqt5cbW8pnsxn65eQIleSrvkp+/e5+58HaDBPQLNcFfHSJzsGQi0W91VoTFzQfTjexzZyNzS2R7Sncl0KosjiOqE2kHHPE/oguJKatjBHZSy2loriSbpltQ0s09rsFrgCDPtmUo1i9reeXVtaZcWktdsgEbmgAxPcLGubNrQ2JmJO4bc9vj3UMXl2qn2Wy+NTuHRltpRyg1qo6KXVQgwlS+MxPaePsr+xEljbLGoolTVP8AAoj7ED1yPu2l/wB5rQ/aTtaCRx6fykH2zjutp7WMDXGBtG0ZAwen3AXkdG1AivDchwAb6eCG8xwJS+q3r3Pe1/ph5kAkt3dxK8D0tzq6R6rzJQsS1GualSo8iNzpjHHA/QLlfQ623f5TiImRBx9FYU5zz/v2W/4eviBtLSe0E8fC6cud4orjujnxYfY3yPEupIflr6tU06m+m9uxm18u/DHrPBMdZXz/AFLTjSeWO6ZB7g8FVweWsrroTN4zx/kyNiqWps0lR1NdPIhxAsMJmm7qELarNCVyGUR9jtwgperRUYnKEOweUOVA42Yz6cFPW4xKYrWnT7LcreFXtywy3Y0xILt/UA8R7pcmeMVsaGGUujHc6QCmrap/PdVF04O8p9GnDDAw4ERyCQcq1w9pEsAa5pJc0Aj0YgwflJHMn8Hlia+nKj0Bj8q1R4S4euhHOxreguqKm5DhEw1RJJAAJPYAkz8JPxGw0w1pPq5dxA7D3WxpFJwZVqt5EMac4nLj7Yj7ry2quLnGZPz3UHlfOl0johiXG2ZdaXO3OO4kzOFW5pzDp6BvwAIGf5wrkwchcr3gA9PPuMJozaaozgmtm34Kaxr6tSqGBjaToqPDSG1fygT1OcKmsai8kuLg9pEGS1wgdI4C80bx+3ZPpBJA6Sev6K1Ik457pZwufNjQmow4FvSSdsxyJ5R6dHqUIAN55TlncsguqAFo6bi3cO0jKo8zS/kmsSk/4CWt01pIIkHEjJB6EL0Nho3n76lSq3ZhjC8tbLzwIJXiK920ucWtcBOATJA6SeqZt6gMOLj8fGVLNBT2nRXFJwdNWei1fwdsgsMk/lj9jwV5m8snMJY5sHiFuW2ubQW/827OcoWp6k2rBIEjqFywnkWmdUo42rWjIZprYEqJkXQ7KJ+cxOMD6H4WpEu3CCB0n1D3+E14tssioG8/iIPt1CzLTWWsktYA4t2uInPwOnRFp6u59M0jBEiC45A9lxyc/bz6HSj6+BnVN27jI/ZP2WsOpvL9rSTyOMHsuajdUxEDp6yJI3exOVmF7TlDly7H48ej22n6x5sMNPbMjkx9FieI6P8Aecc/X/Cv4duthzMHt2TV7cs8xziwPBBAn4ABS4prHN0g5Ic4JHl6lJUNNekrWtOo1gpw10w5pPM8Gf50SNLSnGr5Z9J95XdHyItHHLBKLMR1FQU1s6jp5pO2HJiZHBCVbTyPlNHNatAeOnTK2dMTkTn6J+9sw57PKAlzQdrejxII+0FCLROE1b0JXN7nys6PWuNF6FqXt2uGY5/3VNNdD6zKjwJZDA5xic5HTst60ogRGISviK0BaCOSfxd0ss/L9L+hjh4vkvhk0qzCXSMxk9yh6fa7qzY/1RmCM9M+0rIrktJHWU/oV68VWAAmSJHfKVppaKafYz4jsW0qxDYggOAHSf8AEhZQGU7r12alaocwHENBPAGMLM9QG+DtOAei9PFJqCTPNyxTm2hjC7Tyq0rKrUALWgAztLnNaDHaTlF0OkXvgtw0EunAETgu6ZgIvLGnvoyxSta7PWU6lB1Bzmu2SGtqkDl4/wBQ7S7J915PUdGc7LIeAYLm5E/P1WVd3lR7iTtH5fThu3oB3CrS1l9pO2oW7h6gCM9j8rzuMruL7PRuNVL4Wr6U4B0iCDBHVYlzQI5WhqvjN9WvvZTAZEQcF2I3O9/hO6xSYSC10jaCcRBImPorRnODSkScIz/aecoWu49k1cObTENgnqegQbm8DJjkjgf5WTWrveZK6Ity2yDikHc4kyVY8QhW9Mjr9Ey2nK0pJBjEX2hW83sn7i1aACMmAk6wSrIpDODRUPVXV0Fsq4YeEzoGy/mqIzbL3CiW0GmeobVTBrNbmfhJXA2ktMT1gg/qEm+pJnp0C4pvkWxrijRbcSeVoWzASJhY9sOqebX7O+ccKMmWimeit7trBhucgzwQlhefiiMjIjH0Qm3NOGlx3H8wAgAe/coTb1gJkY6QpR/oUlYZlR0zE5W9b3Lqm17SS9riXwACGEfqMfqldIo06v4ZHXMfWFsWpo0tzWEbphxPKR5kn0b16oLd2PnAS4CDIgZjoCsG6sm06m2Q4AgkfuCt2+vttJxaQXfhMZAPBJ+F5jlX8a2rvRDNS+DrtJeDubBYcgjoPdGtqcHISZujT2tySQHdYjmB3T1G8D+QhJtFIq0a9uyQlNTsiRIn4TVq9o/CZ9k89shS50xuJ8/vLMuPGf5ytLStKdTbuqNLdvrGWgmOmVuV7NolzuB+vssDXbje0y3bBDcE8weewgJ+cpIKikef1Wu1skBskmRztHQdicrIo3Th6g4g8CCQY/hKteGcJUNjldqla2crVPQ4L1xMkyeJK5cai52J/wCqMbu27uR3QWU/2QngdEuh6dAru7Ilobukc5mVm3Vo8FpduLnZAzge5PCerXwZwM98JGvqkwCSY91eHJdIjPj9Zs6Vpz6TfMeGtDmHkAkA8Ee6veXuIBn7fqsWrrz3ANJMABoGOAs+tfOKCxScrkF5IxVRNLc3rEzKuXMg5CwTVKruKt6/yT5/g2m1mojao6LGY49imGVnfwJXEKkaT6xiEq9yC+4MqGvKCVBbssFYyMoTHyRKvWe2cSs3syQD+tPcqIZtz0mPqon5RBUj1FesA90ZEmPhLGvJQ62eENtL3XnxpI6Hdmr/AFY2ho6K9C6Ikd1luoHuuBxC3FfBuT+msXuPBV6e48uWfb1spgVZSu1oPZ6HTNVNNjmtgTgnqqnVHZzlYBqxC6LhL612M5ns9K1IOa6mRJfiWtBIzP1GAuXB2SCdruzhn5heWsr4sIcOeicvtTdVIc7ttAHAA6BaKlF66BKpK32PNrE5LpP7D2Tlq8/wrBo3B7LUtKxP5VpGR6GzD8YK9GxpA+B8yvPWFd2IavSUD6ekrkbuVFekD8zcM8R/5cQvP+KKLW0iGAj1AuIk9IEz+n1W1fu2N9LqbZ6vMer2nErxGs6k/wAtzC8O9WBIdAE5nr+iylK6GUV+48/XbCXqOAEoNe590GpWBBXoRTOZtEr3+ICWdXIHX2QKgE8oNV+OVdJEW39B3VWUi9He6UNwVlKiLVgZK6oXLibkDiXa72R2VR2Se9dD0HsK0POrSuGqkvMVxUQoNjAcrSlg9WFRANjLAmKVImMSl6QKYpVIIU5P+CiX8jjKBj8KiKzV3gAB3HsFFD/0L/oDnTHdcKP04t/M0/Va+reIbSgBvqsMkj0kOIjuBwrU7ihVDXU6lN4dIbtcMxyV5q8mfbR1emPwwKjSgELfrabJ9PHQziPnqs24s3CfldEM8X9IzxSQkHQrisUN5jlDLl0KiDsZ81XFdZlauWkemQTEzxzMhJV9YYyo5pcDAAgfiD8zM+0I2gbZ6VlZEbcLC0x5NNjjHqzxESZAjutOjRJQbQyTs0GXoCao6pHCll4fc8TvY35Tdt4YmZrUwB2krmlnxLTLrDkDUdecFoN8UVA0gGOIOVkV9Mos3AVXOMYgCJ91KNkdpJJDR1P+O6k5Y2rKKM7o0aupUqwmvuc4YbDiIHtHH2XlLpxE5x0WnWZTmGl0QOQJnqvQWvg1jqfmPe8S3cA0N4+oW9sMO3ewSi5Kj5vWqIJqe69TW8PlziACAHbSSCYkSJgLI1HR3UnFpHvj34XZDycctJkJ+NNbMao9BcStH+m9lw2hVvakR9TMtVLlpOsigutU3uTB6mZ7yql6ddbLjbSU3sQPWzPJXCU/UtYQTTCZZEK8bQsAeyu2i7sjIramFnNmUF9AttnIrKQCj66H/URwtcmZqKGw6FzzMoIuXOxJ5nnqm7QAGXAERwSlehlvo4J7KLQpPAAHpUU/Z+CnrPmlKze9lRzQIpNDqhB6EwD8rllbvc5u07SHNEuMAbjA+iBSrEAtk7TyOhI4xwt/wppL67qh81tJjWEuqOJLoH5GtBkyOkRhcsnxTbLrbPfeG/GFMOpWdU+Y8f2w6lSa1gI4Y31QR/zYGPiffmyBERjmMcr4TR05lU06DHsNTzXBtQU9rnA/gcWbQ/bjIMkc8L7Rpb3UWWtB7SDtLHl1Y1DLWkyH8kE8TEfZeT5UYxprs7cLb7A3OgUicmCeBjJ9l5W9tabHuZJ3Dc4t5IbBLY7zH0Tfi3xEaFwyXmDvbR/B6H7du7gkg7m/JHC+cap4jfUrUqrwA5tRr9gBbuZMmXg8EACI4VvGWaW70TyvGtUes1SzaIZ5lOQSXh7H8NbuMfGM+4XgX0AKjYcCAXOcWzkNzugjDT/AtJ9xUdQbPqNV7/7j2g/lbub5pO6fUCR7COqRtK1FlN4c0veXYcCGjY0OBbEzkkGewjrC7YOVbdnO1G9Kjf8ADuotcQH+ktBe0EuLnEl0wY7Ed17W1qDaCHbcB0EeqDkSOi8f4Y1p73SGUQ2mHQNtFhDnSKbi52X7RuEDoV7fQa9tcUzUY0uLnEVC4EE1Bg/4iOijmzOPaK48SfTBPuyDgz7yqPvHHkrUraXQjnb8ux+qX/8AiKfPm49oSR8nF/qGl4+T8f3Fad3CL/Wl0AnA4H7odTT2flqT89fsmKGnN/1HHwQqPNjav/Aqw5F/0f0ykHOBMQDP1XuTqQbTJJ4EYPVeEDdoEPHxlAv9TJG0HEQfdceSDzPRWlFfqPR2+r+bVbuw0Eux3IjKaurSjVBa8Y5EOI+/fqvHaZcw4E91u3WqNjHPH7qWbDxmuJXFJSi7D0vC1u5+N8dt3+U/Q8N2zT/+YPySVkW+rkRlNu1k91OazPXJmqPw1K2j20ZpM+wCyNR8O25aYAb1kGf3S1zqx7n3ysyvqB7rY8WS75M36V3swdVsWMkAmZPMRCxahhegv3B8rz91TiV7fjy1TODOt2hZ9RAc72VbmptE+/v8IDLiZHWYxPzldqpHI7COJVCVDVHUx9VDUGPf/KfkLTJKm4JajcbnGOAM8zM4/Yo0op2BoO2ojMrJKV2nUMxAxnn+dlnRlZsMqugYUSlK5MCf5+iikVs8FKIysREEiOIJHPKEooFhyjelrmPaXNe3h4cQfaI4XqrTx5VmiaznVfKa4eoAbpOA6OcRnuOq8SopzxQn+5WPHJKPRs6zqoqvLgTJcTkN4MRsMS3jhZj6m7nnjjogqJ4xUVSFbbdsbrXjnNY0uJDJ25MRMiB9/uhiuZJxJmZHU9UBRGgDFO5IjrHQ5EcxH0WnpHiWtbH+04AF257Yw7ER7D4hYiiVxT0wqTXQ/c6rVfzUfy4n1u6mYOcr1+j+M2eUynV3Bzdrd2XbhxJ7LwK6EJY4tdDLJJfT6Zq/iJtLYWOYfUN4DmklpMccj2I+q9FY6qxzWuaQ4ObuEgg7eJg5C+IymaOoVW5bUePhxUp+OpKh45mmfZK17APSf2SBrEnuvl79YrkyatQn/qXaesV28Vag/wC5GOHitMDycns+vWbHduPcK9eqes8r5KzxHdDivU4jkcIg8VXf/GP1aw/4UngyN3aK+3HVJM+qMuEf+pxyvkrvFd2RHmxmZDWA/cDhV/8AtF1j+6cOL+G5JiQe49vcrPx5MHsij6y+ulalZfM6vi26dPrAkgiKbMR0BiY+Us7xBcER5rud0iAZiOeyy8eS+meWJ9Fq3kP2mAC2WncJJ6iPhJG5D2F5xlwz2a4tk/Mfqvntxf1Hu3Pe4nvKqLx+fW7JkjceVeOOiTnZu3+qxgY54g/B9v8A2sk3jtxJOecQRujB+EoahMZ44+uVxrCVVWSpDdxdknrODOftHZdqXj9sHdOCDOOs4S49snuu7T3R2DQzY6h5c4mYPx3Wg3VaZMZHueFhkDqIXHMKKk0ZxTPQ/wBfTyA8TE84+6lO4BdO7oOojr/uF5tRNzYPWj1vnjuPuovJKLcwes4uriimUIooosYiiiixiKKKLGIooosYi6uKLGOqKKIoxFFFEV0Yi6VFErGRAooosA4oFFFmAi4oosY6ER/MLqiIGGYMKwUURFZVwQSY4UUWMFawdlHUh2UUSsJQ0wuKKIBP/9k=',
                imageHeight: 500,
                imageAlt: 'A tall image'
            });

            console.log(message);

            $('#myModal').modal({
                refresh: true
            });


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

            $('video').hide(2000);
                    $('#hh').show(2000)
                });


    $('video').bind('pause', function (e) {

                $('video').hide(2000);
                $('#hh').show(2000)
            });


});



