$('document').ready(function () {
    let countDownDate = new Date("Jan 5, 2025 15:37:25").getTime();

    function getTimer() {
        // Get today's date and time
        let now = new Date().getTime();

        // Find the distance between now and the count down date
        let distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        $('#days').text(`${days} d`);
        $('#hours').text(`${hours} h`);
        $('#minutes').text(`${minutes} m`);

        $('#seconds').text(`${seconds} s`);


        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }
    getTimer();




    // Update the count down every 1 second
    var x = setInterval(function () {

        getTimer();

    }, 1000);



    $('.openNav').click(function () {
        $('.navbar').animate(
            { width: 250 }, 500
        );
        $('.home-content').animate({ marginLeft: '250px' }, 500);
    });

    $('.closebtn').click(function () {
        $('.navbar').animate(
            { width: 0 }, 500
        );
        $('.home-content').animate({ marginLeft: '0px' }, 500);


    }
    );

    $('.toggle').click(function () {
        $('.inner').not($(this).next()).slideUp(500); // select all inner class except the one that is clicked

        $(this).next().slideToggle(500);

    });

    $('textarea').on('input', function () {
        var maxLength = 100;
        var currentLength = $(this).val().length;
        var remainingLength = maxLength - currentLength;

        $('#chars').text(remainingLength);

        if (currentLength >= maxLength) {
            $(this).val($(this).val().substring(0, maxLength));
            $('#chars').addClass('d-none');
            $('#checker').text('You have reached the limit');
        } else {
            $('#chars').removeClass('d-none');
            $('#checker').text('Characters Remaining');
        }
    });



});