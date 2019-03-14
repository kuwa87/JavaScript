$(function () {
    $('ul').append('<li>Append</li>');/* inside */
    $('ul').prepend('<li>Prepend</li>');/* inside */
    $('ul').after('<li>After</li>');/* outside */
    $('ul').before('<li>Before</li>');/* outside */
});