function getRandomNumber() {
    var randomNumber = Math.floor(Math.random() * (256 - 0));
    return randomNumber;
}
//pierwotny kolor i tabela
var color1 = getRandomNumber();
var color2 = getRandomNumber();
var color3 = getRandomNumber();
var rgb_tab = [color1, color2, color3]

//zmnienne zmiany

var zmiana1 = Math.floor(Math.random() * (4))
var zmiana2 = Math.floor(Math.random() * (4))
var zmiana3 = Math.floor(Math.random() * (4))
var zmiana4 = Math.floor(Math.random() * (4))

//zmienne plusiminus

var plusiminus1 = Math.floor(Math.random() * (2))
var plusiminus2 = Math.floor(Math.random() * (2))
var plusiminus3 = Math.floor(Math.random() * (2))
var plusiminus4 = Math.floor(Math.random() * (2))


//zmienne wartości

var value1 = Math.floor(Math.random() * (51))
var value2 = Math.floor(Math.random() * (51))
var value3 = Math.floor(Math.random() * (51))
var value4 = Math.floor(Math.random() * (51))


//zmienne do outputu

var rgb_color1 = rgb_tab.slice(); // Create a copy of rgb_tab for rgb_color1
var rgb_color2 = rgb_tab.slice(); // Create a copy of rgb_tab for rgb_color2
var rgb_color3 = rgb_tab.slice(); // Create a copy of rgb_tab for rgb_color3
var rgb_color4 = rgb_tab.slice(); // Create a copy of rgb_tab for rgb_color3

//funkcja zmiany 1

if (zmiana1 === 1) {
    if (plusiminus1 === 0) {
        rgb_color1[0] -= value1;
    } else {
        rgb_color1[0] += value1;
    }
}
else if (zmiana1 === 2) {
    if (plusiminus1 === 0) {
        rgb_color1[0] -= value1;
        rgb_color1[1] -= value1;
    } else {
        rgb_color1[0] += value1;
        rgb_color1[1] += value1;
    }
}
else if (zmiana1 === 3) {
    if (plusiminus1 === 0) {
        rgb_color1[0] -= value1;
        rgb_color1[1] -= value1;
        rgb_color1[2] -= value1;
    } else {
        rgb_color1[0] += value1;
        rgb_color1[1] += value1;
        rgb_color1[2] += value1;
    }
}

//Funkcja zmiany 2

if (zmiana2 === 1) {
    if (plusiminus2 === 0) {
        rgb_color2[0] -= value2;
    } else {
        rgb_color2[0] += value2;
    }
}
else if (zmiana2 === 2) {
    if (plusiminus2 === 0) {
        rgb_color2[0] -= value2;
        rgb_color2[1] -= value2;
    } else {
        rgb_color2[0] += value2;
        rgb_color2[1] += value2;
    }
}
else if (zmiana2 === 3) {
    if (plusiminus2 === 0) {
        rgb_color2[0] -= value2;
        rgb_color2[1] -= value2;
        rgb_color2[2] -= value2;
    } else {
        rgb_color2[0] += value2;
        rgb_color2[1] += value2;
        rgb_color2[2] += value2;
    }
}

// Funkcja zmiany 3 

if (zmiana3 === 1) {
    if (plusiminus3 === 0) {
        rgb_color3[0] -= value3;
    } else {
        rgb_color3[0] += value3;
    }
}
else if (zmiana3 === 2) {
    if (plusiminus3 === 0) {
        rgb_color3[0] -= value3;
        rgb_color3[1] -= value3;
    } else {
        rgb_color3[0] += value3;
        rgb_color3[1] += value3;
    }
}
else if (zmiana3 === 3) {
    if (plusiminus3 === 0) {
        rgb_color3[0] -= value3;
        rgb_color3[1] -= value3;
        rgb_color3[2] -= value3;
    } else {
        rgb_color3[0] += value3;
        rgb_color3[1] += value3;
        rgb_color3[2] += value3;
    }
}


// Funkcja zmiany 4 

if (zmiana4 === 1) {
    if (plusiminus4 === 0) {
        rgb_color4[0] -= value3;
    } else {
        rgb_color4[0] += value3;
    }
}
else if (zmiana4 === 2) {
    if (plusiminus4 === 0) {
        rgb_color4[0] -= value3;
        rgb_color4[1] -= value3;
    } else {
        rgb_color4[0] += value3;
        rgb_color4[1] += value3;
    }
}
else if (zmiana4 === 3) {
    if (plusiminus4 === 0) {
        rgb_color4[0] -= value3;
        rgb_color4[1] -= value3;
        rgb_color4[2] -= value3;
    } else {
        rgb_color4[0] += value3;
        rgb_color4[1] += value3;
        rgb_color4[2] += value3;
    }
}

// Limit the values between 0 and 255

const limitValue = (value) => {
    if (value < 0) {
        return 0;
    } else if (value > 255) {
        return 255;
    } else {
        return value;
    }
};

rgb_color1[0] = limitValue(rgb_color1[0]);
rgb_color1[1] = limitValue(rgb_color1[1]);
rgb_color1[2] = limitValue(rgb_color1[2]);

rgb_color2[0] = limitValue(rgb_color2[0]);
rgb_color2[1] = limitValue(rgb_color2[1]);
rgb_color2[2] = limitValue(rgb_color2[2]);

rgb_color3[0] = limitValue(rgb_color3[0]);
rgb_color3[1] = limitValue(rgb_color3[1]);
rgb_color3[2] = limitValue(rgb_color3[2]);

rgb_color4[0] = limitValue(rgb_color4[0]);
rgb_color4[1] = limitValue(rgb_color4[1]);
rgb_color4[2] = limitValue(rgb_color4[2]);



////////////outputs //////////////

var output1 = {
    payload: {
        data: {
            rgb_color: [
                color1,
                color2,
                color3
            ]
        }
    }
}

var output2 = {
    payload: {
        data: {
            rgb_color: rgb_color1
        }
    }
}

var output3 = {
    payload: {
        data: {
            rgb_color: rgb_color2
        }
    }
}


var output4 = {
    payload: {
        data: {
            rgb_color: rgb_color3
        }
    }
}


var output5 = {
    payload: {
        data: {
            rgb_color: rgb_color4
        }
    }
}

// return

return [output1, output2, output3, output4, output5]


/////wiadomość przykład////////////

//msg.payload = {
//   data: {
//     "rgb_color": [
 //       color1,
   //     color2,
     //   color3
    //]
//}
//}
//return msg;

