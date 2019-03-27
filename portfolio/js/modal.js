$(function () {

    $('.myBtn').on('click', function () {

        $('#' + $(this).data('modal')).css('display', 'block');
    })

    $('.close').on('click', function () {
        $('.modal').hide();
    })

    //when the user clicks anyewhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target.className == 'modal') {
            $('.modal').hide();

        }

    }

});