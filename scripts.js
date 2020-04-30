console.log('Script file is loaded.');

// Third part:

$('h1').html('This is done by <em>JavaScript!</em>');
$('h2').toggleClass('blue');
$('h2').toggleClass('blue');



function myLittleFunction() {
    //condition: number of ps is smaller than 5
    // <, >, <=, >=, ===, !==
    if ($('p').length < 5) {
        $('main').append('<p>A p is appended in the main</p>');
    } else {
        console.log('We reached the maximum paragraph number')
    }
    $('p').css('border', '1px solid red');
    $('p').css('padding', '10px');
}

myLittleFunction();
myLittleFunction();


$('#add').click(myLittleFunction);
$('#remove').click(function () {
    $('p:last-child').remove();
});

//Fourth part:

//if  (condition that true or false) {
    //condition is true
//} else {
    //condition is false
//}

let colors = ['orange', 'yellow', 'blue', 'lime', 'magenta']

colors.forEach(function (color) {
    $('#box-container').append('<div class="box"></div>');
    $('.box:last-child').css('background', color)

});

for (let i = 0; i < 100; i++) {
console.log(i);
}

