var getRandomNumber = function (size) {
    return Math.floor(Math.random() * size)
}

var getDistance = function (event, target) {

    var diffX = event.offsetX - target.x;
    var diffY = event.offsetY - target.y;

    return Math.sqrt((diffX * diffX) + (diffY * diffY))
}

var getDistanceHint = function (distance) {
    if (distance < 10) {
        return "Обожжешся!"
    } else if (distance < 20) {
        return "Очень Горячо"
    }
    else if (distance < 40) {
        return "Горячо!"
    }
    else if (distance < 80) {
        return "Тепло!"
    }
    else if (distance < 160) {
        return "Холодно"
    }
    else if (distance < 320) {
        return "Очень холодно"
    } else {
        return 'Замержнешь'
    }

}



var width = 400;
var height = 400;
var clicks = 0;

var target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
};



// click handler
$('#map').click(function (event) {
    clicks++
    var distance = getDistance(event, target)
    var distanceHint = getDistanceHint(distance);
    $('#distance').text(distanceHint)
    if (distance < 8) {
        alert('Поздравляю Клад Найден.Сделано кликов: ' + clicks)
    }


})







// ------------------------------------------------------------------------------------------------------------------------

// var myPointLeft = $('h1').offset({ left: 330 })
// var myPointTop = $('h1').offset({ top: 100 })


// $('#map').click(function (event) {
//     var distance = getDistance(event)
//     if (distance < 20) {
//         console.log('Klad Naiden')
//     }
//     else if (distance < 30) {
//         console.log('Gora4o')
//     } else if (distance < 50) {
//         console.log('Teplo')
//     } else if (distance < 100) {
//         console.log('средне')
//     } else if (distance < 200) {
//         console.log('xolodno')
//     } else if (distance < 25) {
//         alert('Klad Naiden')
//     }

// })




// var getDistance = function (event) {
//     var deffX = event.offsetX - 330;
//     var deffY = event.offsetY - 100;
//     return Math.sqrt((deffX * deffX) + (deffY * deffY))
// }
