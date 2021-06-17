var count = 1;
var lastKeyPressType='';
var house_rotate = 0;
var thisRef = {
    mouseFlag: false,
    focusElement: {}
  }
var textArray = [{
    houseDes: 'Suppose we had a nice, small box of a house. If we multiplied the width by 10, how much would the total volume increase?',
    txtBtn: 'Press the button to find out.'
},
{
    houseDes: 'Since we basically have 10 houses, the volume has increased by 10 times. Now suppose we multiplied the length of these houses by 10 times. How much will the new total volume have increased from the original house?',
    txtBtn: 'Press the button to find out.'
},
{
    houseDes: 'Now we have 100 houses, so we have 100 times the volume of the original. If the height was multiplied by 10, how much more volume would we have than with our original, single house?',
    txtBtn: 'Press the button to find out.'
},
{
    houseDes: "Now that we've multiplied each of the three dimensions by 10, we have 1000 houses. Do you know what this is equivalent to?",
    txtBtn: 'Press the button to find out.'
},
{
    houseDes: "Our 1,000 small houses are equivalent to one big house.<br> The big house has 1000 times more volume than the small house.<br> The scale of this big house to our small house is 10:1.",
    txtBtn: 'Press the button for Next Page to move on.'
}
];
var houseRotateZ=['-130px','-90px','-90px','-60px','-60px','-90px','-90px','-130px'];
var houseRotateX=['-6.25','-25.25','-30.25','-38.25','-47.25','-64.25','-69.25','-76.25']
var cube = document.querySelector('.cube');
var radioGroup = document.querySelector('.radio-group');
var currentClass = '';
let deg1 = 0;
let deg2 = 0;
let degTB = 0;
let degRL = 0;
var houseZ=-100;
var countTopBottom=0;
var houese_dimension = {
    length: '30',
    width: '30',
    height: '30',
    floorArea: '900',
    doorWidth: '5',
    doorHeight: '20',
    doorArea: {
        LH: '1',
        BH: '100'
    },
    windowWidth: '7.5',
    windowHeight: '10',
    windowArea: {
        LH: '0.75',
        BH: '75'
    },
    houseVolume: {
        LH: '27',
        BH: '27000'
    }
};

var houseBH = {
    length: '',
    width: '',
    height: '',
    floorArea: '',
    doorWidth: '',
    doorHeight: '',
    doorArea: {
        LH: '',
        BH: ''
    },
    windowWidth: '',
    windowHeight: '',
    windowArea: {
        LH: '',
        BH: ''
    },
    houseVolume: {
        LH: '',
        BH: ''
    }

}
var arr1=[];
var arr2=[];
var arr3=[];

function nextBtn(event) {
    // document.querySelector('.next-btn').focus();
    setTimeout(() => {
        document.querySelector('.next-btn').style.opacity = '1';
        document.querySelector('.house-des').innerHTML = textArray[count - 1].houseDes;
        document.querySelector('.txt-for-btn').innerHTML = textArray[count - 1].txtBtn;
        document.querySelector('.house-des').style.visibility = 'visible';
        document.querySelector('.txt-for-btn').style.visibility = 'visible';
        // if (event.key === 'Enter' || event.keyCode === 13){
            // document.querySelector('.next-btn').focus();
        // }
        
    }, 500)
    if (count == 1) {
        count++
        houseWidth();

    }
    else if (count == 2) {
        count++;
        houseLenght();
    }
    else if (count == 3) {
        count++;
        houseHeight();
    }
    else if (count == 4) {
        count++;
        document.getElementById('complete-Home-Img').style.display = 'block';
        document.querySelector('.next-btn').innerHTML = 'Next Page';
    }
    else if (count == 5) {
        document.querySelector('.page-1').classList.add("hide");
        document.querySelector('.page-2').classList.remove("hide");
        document.querySelector('.wrapper').style.backgroundImage = "url('./image/scalehouse_BG_out.jpg')";
        $(function(){
            var lastKey = new Date(),
                lastClick = new Date();
          console.log(lastKey)
            $(document).on( "focusin", function(e){
                $(".non-keyboard-outline").removeClass("non-keyboard-outline");
                var wasByKeyboard = lastClick < lastKey
                if( wasByKeyboard ) {
                    $( e.target ).addClass( "non-keyboard-outline");
                }
                
            });
            
            $(document).on( "click", function(){
                lastClick = new Date();
                // console.log(lastClick)
            });
            $(document).on( "keydown", function() {
                lastKey = new Date();
                // console.log(lastClick)
            });
          });
    }

    document.querySelector('.house-des').style.visibility = 'hidden';
    document.querySelector('.txt-for-btn').style.visibility = 'hidden';
    // document.querySelector('.next-btn').style.visibility = 'hidden';
    document.querySelector('.next-btn').style.opacity = '0';
    
    
}

function houseWidth() {
    for (let x = 0; x < 10; x++) {
        setTimeout(() => {
            var board = document.createElement('img');
            board.setAttribute("src", "./image/House_icon.png");
            board.className = "house-unit" + x;
            document.querySelector('.house-block0').appendChild(board);
            document.querySelector('.house-unit' + x).style.left = -38 * x + 435 + 'px';
        }, 50 * x)

    }
    document.getElementById('widthImg').style.top = '423px';
    document.getElementById('widthImg').style.left = '283px';
    document.getElementById('widthImg').style.display = 'block';
}

function houseLenght() {
    for (let j = 1; j < 10; j++) {
        setTimeout(() => {
            let i = document.querySelector('.section-2');
            var d = document.querySelector('.house-block0');
            var cln = d.cloneNode(true);
            i.appendChild(cln).className = 'house-block' + j;
            document.querySelector('.house-block' + j).style.top = 100 + (1 - 4 * j) + 'px';
            document.querySelector('.house-block' + j).style.left = 14 * j + 175 + 'px';
        }, 50 * j)
    }
    document.querySelector('.section-2').style.top = '40px';
    document.getElementById('widthImg').style.top = '460px';
    document.getElementById('widthImg').style.left = '408px';
    document.getElementById('lengthImg').style.top = '300px';
    document.getElementById('lengthImg').style.left = '118px';
    document.getElementById('lengthImg').style.display = 'block';

}

function houseHeight() {
    for (let j = 1; j < 10; j++) {
        setTimeout(() => {
            let i = document.querySelector('.section-wrapper');
            var d = document.querySelector('.section-2');
            var cln = d.cloneNode(true);
            i.appendChild(cln).className = 'section-2' + j;
            document.querySelector('.section-2' + j).style.position = 'relative';
            document.querySelector('.section-2' + j).style.top = 75 + (1 - 33 * j) + 'px';
        }, 50 * j)
    }
    document.getElementById('lengthImg').style.top = '343px';
    document.querySelector('.section-2').style.top = '75px';
    document.getElementById('widthImg').style.top = '495px';
    document.getElementById('heightImg').style.display = 'block';
    document.querySelector('#heightImg').style.top = '-7px';
}

function mouseOver(ev) {
    document.getElementById(ev.target.id).src = "./image/A_H_Btn.png";
}

function mouseOut(ev) {
    document.getElementById(ev.target.id).src = "./image/A_Btn.png";
}

function clickIns(event) {
    document.getElementById('overlay').style.display = 'block';
    document.querySelector('.page-2').style.backgroundColor = ' rgba(0,0,0,0.5)';
    document.querySelector('.house-3d').style.zIndex = "-1";
    document.querySelector('.section-3').style.zIndex = "-1";
    document.querySelector('.instructions-btn').style.zIndex = "-1";
    document.querySelector('.house-table').style.zIndex = "-1";

    if (lastKeyPressType === 'Enter'){
        setTimeout(()=>{
            document.querySelector('#close-overlay').focus();
            lastKeyPressType=''
        },300)
        
        console.log(event)
    }
    // if(event.detail === 0) {
    //     // keypress
        
    // } else {
    //     // mouse event
    //     console.log(event.detail,'hello')
    // }

}


function overlayClose() {
    // document.querySelector("#cal").setAttribute('tabindex','0');
    document.getElementById("overlay").style.display = "none";
    document.querySelector('.page-2').style.backgroundColor = 'transparent';
    document.querySelector('.house-3d').style.zIndex = "1";
    document.querySelector('.section-3').style.zIndex = "1";
    document.querySelector('.instructions-btn').style.zIndex = "1";
    document.querySelector('.house-table').style.zIndex = "1";
    if (lastKeyPressType === 'Enter'){
        setTimeout(()=>{
            document.querySelector('#ins').focus();
        },300)
        
    }
    
}

function changeSide(ev) {
    document.getElementById(ev.target.id).src = "./image/A_Click_Btn.png";
    var showClass = 'show-' + ev.target.id;
    if (currentClass) {
        cube.classList.remove(currentClass);
    }
    cube.classList.add(showClass);
    currentClass = showClass;
    if (ev.target.id == 'right-arrow') {
        deg1 = deg1 - 90;
        degRL = deg1;
        $('.cube').css({ 'transform': 'translateZ(-130px) rotateX(' + degTB + 'deg) rotateY(' + deg1 + 'deg)' })

    }
    else if (ev.target.id == 'left-arrow') {
        deg1 = deg1 + 90;
        degRL = deg1;
        $('.cube').css({ 'transform': 'translateZ(-130px) rotateX(' + degTB + 'deg) rotateY(' + deg1 + 'deg)' })

    }
    else if (ev.target.id == 'top-arrow' && countTopBottom<8) {
        // if(countTopBottom==1){
        //     $('.internal--left').css({
        //         'transform': 'rotateY(-90deg) translateZ(159px)'
        //     })
        //     $('.cube__face--left').css({
        //         'transform': 'rotateY(-90deg) translateZ(160px)'
        //     })
        // }
        // if(countTopBottom==2){
        //     $('.internal--left').css({
        //         'transform': 'rotateY(-90deg) translateZ(164px)'
        //     })
        //     $('.cube__face--left').css({
        //         'transform': 'rotateY(-90deg) translateZ(165px)'
        //     })
        // }
        deg2 = houseRotateX[countTopBottom];
        degTB = deg2; 
                $('.cube').css({ 'transform': 'translateZ('+houseRotateZ[countTopBottom]+') rotateX(' + houseRotateX[countTopBottom]+ 'deg) rotateY(' + degRL + 'deg)' })
            countTopBottom++;
    }
    else if (ev.target.id == 'down-arrow' && countTopBottom>0) {
        // if(countTopBottom==1){
        //     $('.internal--left').css({
        //         'transform': 'rotateY(-90deg) translateZ(159px)'
        //     })
        //     $('.cube__face--left').css({
        //         'transform': 'rotateY(-90deg) translateZ(160px)'
        //     })
        // }
        // if(countTopBottom==2){
        //     $('.internal--left').css({
        //         'transform': 'rotateY(-90deg) translateZ(164px)'
        //     })
        //     $('.cube__face--left').css({
        //         'transform': 'rotateY(-90deg) translateZ(165px)'
        //     })
        // }
        countTopBottom--
        deg2 = houseRotateX[countTopBottom];
        degTB = deg2;
        $('.cube').css({ 'transform': 'translateZ('+houseRotateZ[countTopBottom]+') rotateX(' + deg2 + 'deg) rotateY(' + degRL + 'deg)' })

    }

}

function checkAnswer() {
    houseBH.length = document.querySelector("table tr:nth-child(2) td:nth-child(3)").firstElementChild.value;
    houseBH.width = document.querySelector("table tr:nth-child(3) td:nth-child(3)").firstElementChild.value;
    houseBH.height = document.querySelector("table tr:nth-child(4) td:nth-child(3)").firstElementChild.value;
    houseBH.floorArea = document.querySelector("table tr:nth-child(5) td:nth-child(3)").firstElementChild.value;
    houseBH.doorWidth = document.querySelector("table tr:nth-child(6) td:nth-child(3)").firstElementChild.value;
    houseBH.doorHeight = document.querySelector("table tr:nth-child(7) td:nth-child(3)").firstElementChild.value;
    houseBH.doorArea.LH = document.querySelector("table tr:nth-child(8) td:nth-child(2)").firstElementChild.value;
    houseBH.doorArea.BH = document.querySelector("table tr:nth-child(8) td:nth-child(3)").firstElementChild.value;
    houseBH.windowWidth = document.querySelector("table tr:nth-child(9) td:nth-child(3)").firstElementChild.value;
    houseBH.windowHeight = document.querySelector("table tr:nth-child(10) td:nth-child(3)").firstElementChild.value;
    houseBH.windowArea.LH = document.querySelector("table tr:nth-child(11) td:nth-child(2)").firstElementChild.value;
    houseBH.windowArea.BH = document.querySelector("table tr:nth-child(11) td:nth-child(3)").firstElementChild.value;
    houseBH.houseVolume.LH = document.querySelector("table tr:nth-child(12) td:nth-child(2)").firstElementChild.value;
    houseBH.houseVolume.BH = document.querySelector("table tr:nth-child(12) td:nth-child(3)").firstElementChild.value;
    if (houseBH.length !== '') {
        if (houese_dimension.length == houseBH.length) {
            document.querySelector("table tr:nth-child(2) td:nth-child(1)").firstElementChild.src = './image/C2.png';
        }
        else {
            document.querySelector("table tr:nth-child(2) td:nth-child(1)").firstElementChild.src = './image/C3.png';
        }
    }
    else {
        document.querySelector("table tr:nth-child(2) td:nth-child(1)").firstElementChild.src = './image/C1.png';
    }
    if (houseBH.width !== '') {
        if (houese_dimension.width == houseBH.width) {
            document.querySelector("table tr:nth-child(3) td:nth-child(1)").firstElementChild.src = './image/C2.png';
        }
        else {
            document.querySelector("table tr:nth-child(3) td:nth-child(1)").firstElementChild.src = './image/C3.png';
        }
    }
    else {
        document.querySelector("table tr:nth-child(3) td:nth-child(1)").firstElementChild.src = './image/C1.png';
    }
    if (houseBH.height !== '') {
        if (houese_dimension.height == houseBH.height) {
            document.querySelector("table tr:nth-child(4) td:nth-child(1)").firstElementChild.src = './image/C2.png';
        }
        else {
            document.querySelector("table tr:nth-child(4) td:nth-child(1)").firstElementChild.src = './image/C3.png';
        }
    }
    else {
        document.querySelector("table tr:nth-child(4) td:nth-child(1)").firstElementChild.src = './image/C1.png';
    }

    if (houseBH.floorArea !== '') {
        if (houese_dimension.floorArea == houseBH.floorArea) {
            // document.querySelector('.floor').style.display = 'block';
            document.querySelector("table tr:nth-child(5) td:nth-child(1)").lastElementChild.src = './image/C2.png';
        }
        else {
            document.querySelector("table tr:nth-child(5) td:nth-child(1)").lastElementChild.src = './image/C3.png';
        }
    }
    else {
        document.querySelector("table tr:nth-child(5) td:nth-child(1)").lastElementChild.src = './image/C1.png';
    }
    if (houseBH.floorArea !== '' && houseBH.height !== '' && houseBH.width !== '' && houseBH.length !== '') {
        if(houese_dimension.floorArea == houseBH.floorArea && houese_dimension.height == houseBH.height && houese_dimension.width == houseBH.width && houese_dimension.length == houseBH.length){
            document.querySelector('.floor').style.display = 'block';
        }
        
    }
    if (houseBH.doorWidth !== '') {
        if (houese_dimension.doorWidth == houseBH.doorWidth) {
            document.querySelector("table tr:nth-child(6) td:nth-child(1)").firstElementChild.src = './image/C2.png';
        }
        else {
            document.querySelector("table tr:nth-child(6) td:nth-child(1)").firstElementChild.src = './image/C3.png';
        }
    }
    else {
        document.querySelector("table tr:nth-child(6) td:nth-child(1)").firstElementChild.src = './image/C1.png';
    }

    if (houseBH.doorHeight !== '') {
        if (houese_dimension.doorHeight == houseBH.doorHeight) {
            document.querySelector("table tr:nth-child(7) td:nth-child(1)").firstElementChild.src = './image/C2.png';
        }
        else {
            document.querySelector("table tr:nth-child(7) td:nth-child(1)").firstElementChild.src = './image/C3.png';
        }
    }
    else {
        document.querySelector("table tr:nth-child(7) td:nth-child(1)").firstElementChild.src = './image/C1.png';
    }
    if (houseBH.doorArea.LH !== '' && houseBH.doorArea.BH !== '') {
        if (houese_dimension.doorArea.LH == houseBH.doorArea.LH && houese_dimension.doorArea.BH == houseBH.doorArea.BH) {
            document.querySelector("table tr:nth-child(8) td:nth-child(1)").lastElementChild.src = './image/C2.png';
        }
        else {
            document.querySelector("table tr:nth-child(8) td:nth-child(1)").lastElementChild.src = './image/C3.png';
        }
    }

    if (houseBH.doorWidth !== '' && houseBH.doorHeight !== '' && houseBH.doorArea.LH !== '' && houseBH.doorArea.BH !== '') {
        if(houese_dimension.doorArea.LH == houseBH.doorArea.LH && houese_dimension.doorArea.BH == houseBH.doorArea.BH && houese_dimension.doorHeight == houseBH.doorHeight && houese_dimension.doorWidth == houseBH.doorWidth)
        {
        document.querySelector('.wall-drop').style.display = 'block';
    }
    }

    else {
        document.querySelector("table tr:nth-child(8) td:nth-child(1)").lastElementChild.src = './image/C1.png';
    }

    if (houseBH.windowWidth !== '') {
        if (houese_dimension.windowWidth == houseBH.windowWidth) {
            document.querySelector("table tr:nth-child(9) td:nth-child(1)").firstElementChild.src = './image/C2.png';
        }
        else {
            document.querySelector("table tr:nth-child(9) td:nth-child(1)").firstElementChild.src = './image/C3.png';
        }
    }
    else {
        document.querySelector("table tr:nth-child(9) td:nth-child(1)").firstElementChild.src = './image/C1.png';
    }
    if (houseBH.windowHeight !== '') {
        if (houese_dimension.windowHeight == houseBH.windowHeight) {
            document.querySelector("table tr:nth-child(10) td:nth-child(1)").firstElementChild.src = './image/C2.png';
        }
        else {
            document.querySelector("table tr:nth-child(10) td:nth-child(1)").firstElementChild.src = './image/C3.png';
        }
    }
    else {
        document.querySelector("table tr:nth-child(10) td:nth-child(1)").firstElementChild.src = './image/C1.png';
    }

    if (houseBH.windowArea.LH !== '' && houseBH.windowArea.BH !== '') {
        if (houese_dimension.windowArea.LH == houseBH.windowArea.LH && houese_dimension.windowArea.BH == houseBH.windowArea.BH) {
            document.querySelector("table tr:nth-child(11) td:nth-child(1)").lastElementChild.src = './image/C2.png';
        }
        else {
            document.querySelector("table tr:nth-child(11) td:nth-child(1)").lastElementChild.src = './image/C3.png';
        }
    }
    else {
        document.querySelector("table tr:nth-child(11) td:nth-child(1)").lastElementChild.src = './image/C1.png';
    }

    if (houseBH.houseVolume.LH !== '' && houseBH.houseVolume.BH !== '') {
        if (houese_dimension.houseVolume.LH == houseBH.houseVolume.LH && houese_dimension.houseVolume.BH == houseBH.houseVolume.BH) {
            document.querySelector("table tr:nth-child(12) td:nth-child(1)").lastElementChild.src = './image/C2.png';
        }
        else {
            document.querySelector("table tr:nth-child(12) td:nth-child(1)").lastElementChild.src = './image/C3.png';
        }
    }
    else {
        document.querySelector("table tr:nth-child(12) td:nth-child(1)").lastElementChild.src = './image/C1.png';
    }
    if (houseBH.houseVolume.LH !== '' && houseBH.houseVolume.BH !== '' && houseBH.windowArea.LH !== '' && houseBH.windowArea.BH !== '' && houseBH.windowWidth !== '' && houseBH.windowHeight !== '') {
        if(houese_dimension.houseVolume.LH == houseBH.houseVolume.LH && houese_dimension.houseVolume.BH == houseBH.houseVolume.BH && houese_dimension.windowArea.LH == houseBH.windowArea.LH && houese_dimension.windowArea.BH == houseBH.windowArea.BH && houese_dimension.windowHeight == houseBH.windowHeight && houese_dimension.windowWidth == houseBH.windowWidth ){
            document.querySelector('.inner-wall').style.display = 'block';
        }  
    }
}

function changeFloor(e) {
    console.log('change floor function open')
    // document.getElementById('floor-select').firstElementChild.style.display = 'none';
    document.querySelector('#grass').focus();
    // $('option').focus();
    switch (e.target.value) {
        case 'grass':
            document.querySelector('#grass').focus();
            document.querySelector('.cube__face--bottom').style.backgroundImage = "url('./image/F2.png')";
            break;
        case 'tiles':
            document.querySelector('.cube__face--bottom').style.backgroundImage = "url('./image/F3.png')";
            break;
        case 'hardWood':
            document.querySelector('.cube__face--bottom').style.backgroundImage = "url('./image/F4.png')";
            break;
        case 'carpet':
            document.querySelector('.cube__face--bottom').style.backgroundImage = "url('./image/F1.png')";
            break;

        default:
            break;
    }
}

function changeWall(e) {
    document.getElementById('wall-select').firstElementChild.style.display = 'none';
    switch (e.target.value) {
        case 'wood':
            document.querySelector('.cube__face--front').style.backgroundImage = "url('./image/D5.png')";
            document.querySelector('.cube__face--left').style.backgroundImage = "url('./image/W6.png')";
            document.querySelector('.cube__face--right').style.backgroundImage = "url('./image/W6.png')";
            document.querySelector('.cube__face--back').style.backgroundImage = "url('./image/W6.png')";
            break;
        case 'brick':
            document.querySelector('.cube__face--front').style.backgroundImage = "url('./image/D3.png')";
            document.querySelector('.cube__face--left').style.backgroundImage = "url('./image/W5.png')";
            document.querySelector('.cube__face--right').style.backgroundImage = "url('./image/W5.png')";
            document.querySelector('.cube__face--back').style.backgroundImage = "url('./image/W5.png')";
            break;
        case 'vinyl':
            document.querySelector('.cube__face--front').style.backgroundImage = "url('./image/D2.png')";
            document.querySelector('.cube__face--left').style.backgroundImage = "url('./image/W4.png')";
            document.querySelector('.cube__face--right').style.backgroundImage = "url('./image/W4.png')";
            document.querySelector('.cube__face--back').style.backgroundImage = "url('./image/W4.png')";
            break;
        case 'stucco':
            document.querySelector('.cube__face--front').style.backgroundImage = "url('./image/D1.png')";
            document.querySelector('.cube__face--left').style.backgroundImage = "url('./image/W3.png')";
            document.querySelector('.cube__face--right').style.backgroundImage = "url('./image/W3.png')";
            document.querySelector('.cube__face--back').style.backgroundImage = "url('./image/W3.png')";
            break;
        case 'cheese':
            document.querySelector('.cube__face--front').style.backgroundImage = "url('./image/D6.png')";
            document.querySelector('.cube__face--left').style.backgroundImage = "url('./image/W1.png')";
            document.querySelector('.cube__face--right').style.backgroundImage = "url('./image/W1.png')";
            document.querySelector('.cube__face--back').style.backgroundImage = "url('./image/W1.png')";
            break;

        default:
            break;
    }
}

function changeInnerWall(e) {
    document.getElementById('inner-wall-select').firstElementChild.style.display = 'none';
    switch (e.target.value) {
        case 'pink':
            document.querySelector('.internal--front').style.backgroundImage = "url('./image/P9.png')";
            document.querySelector('.internal--left').style.backgroundImage = "url('./image/P5.png')";
            document.querySelector('.internal--right').style.backgroundImage = "url('./image/P5.png')";
            document.querySelector('.internal--back').style.backgroundImage = "url('./image/P5.png')";
            break;
        case 'green':
            document.querySelector('.internal--front').style.backgroundImage = "url('./image/P10.png')";
            document.querySelector('.internal--left').style.backgroundImage = "url('./image/P6.png')";
            document.querySelector('.internal--right').style.backgroundImage = "url('./image/P6.png')";
            document.querySelector('.internal--back').style.backgroundImage = "url('./image/P6.png')";
            break;
        case 'art':
            document.querySelector('.internal--front').style.backgroundImage = "url('./image/P11.png')";
            document.querySelector('.internal--left').style.backgroundImage = "url('./image/P3.png')";
            document.querySelector('.internal--right').style.backgroundImage = "url('./image/P2.png')";
            document.querySelector('.internal--back').style.backgroundImage = "url('./image/P1.png')";
            break;
        case 'ugly':
            document.querySelector('.internal--front').style.backgroundImage = "url('./image/P8.png')";
            document.querySelector('.internal--left').style.backgroundImage = "url('./image/P4.png')";
            document.querySelector('.internal--right').style.backgroundImage = "url('./image/P4.png')";
            document.querySelector('.internal--back').style.backgroundImage = "url('./image/P4.png')";
            break;
        default:
            break;
    }
}

//calculator
dragElement(document.querySelector(".dragable-cal"));
document.getElementById('result-display').value='0';
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  elmnt.addEventListener('touchstart', dragMouseDown)
  elmnt.addEventListener('touchend', elementDrag)
  if (document.getElementById('drag')) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById('drag').onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function calculatorValue(e){
    var arithmatic=e.target.innerHTML;
    if(arithmatic=='x'){
        arithmatic='*'
    }
    if(arr1.length<14 && arithmatic!=='M' && arithmatic!=='MC' && arithmatic!=='C'&& arithmatic!=='+' && arithmatic!=='-' && arithmatic!=='*' && arithmatic!=='/' && arithmatic!=='%' && arr2.length<1 && arithmatic!=='=' && arithmatic!=='√'){
            arr1.push(arithmatic);
            document.getElementById('result-display').value=arr1.join('');
        }
        else if(arr2.length<2 && ( arithmatic=='M' || arithmatic =='MC' || arithmatic =='C' || arithmatic =='+' || arithmatic =='-' || arithmatic =='*' || arithmatic =='/' || arithmatic =='%')){
            arr2.splice(0,1,arithmatic); 
            document.getElementById('result-display').value='';
        }
        else if(arr2.length>0 && arr1.length<14 && arithmatic!=='M' && arithmatic!=='MC' && arithmatic!=='C'&& arithmatic!=='+' && arithmatic!=='-' && arithmatic!=='*' && arithmatic!=='/' && arithmatic!=='%' && arithmatic!=='='){
            arr3.push(arithmatic);  
            document.getElementById('result-display').value=arr3.join('')
        }
        if(arithmatic=='='){ 
            input1=arr1.join('');
            input2=arr3.join('');
            if(input1.length>0 && input2.length>0){
                output=eval("(" + input1 + ")" + arr2[0] + "(" + input2 + ")");
            }
            else{
                output='0'
            }   
            document.getElementById('result-display').value=Math.round((output+Number.EPSILON)*100000)/100000;
            arr1=[];
            arr2=[];
            arr3=[];
        }
        if(arithmatic=='C'){
            arr1=[];
            arr2=[];
            arr3=[];
            document.getElementById('result-display').value='0';
        }
        if(arithmatic=='√'){
            input1=arr1.join('');
            output=Math.sqrt(input1);
            document.getElementById('result-display').value=output;
            arr1=[];
        }
    }

function closeCal(){
document.querySelector('.dragable-cal').style.display='none';
if (lastKeyPressType === 'Enter'){
    setTimeout(()=>{
        document.querySelector('#cal').focus();
    },300)
}
}

function openCal(){
    document.querySelector('.dragable-cal').style.display='block';
    // document.querySelector('#close-cal').focus();
    if (lastKeyPressType === 'Enter'){
        setTimeout(()=>{
            document.querySelector('#close-cal').focus();
        },300)
    }
}

function addAccessibility() {
    console.log('accessibility')
    $(document).on('mousedown', () => {
      thisRef.mouseFlag = true;
    });
  
    $(document).on('mouseup', () => {
      thisRef.mouseFlag = false;
    });
  
    $('[tabindex]').focus((e) => {
      thisRef.focusElement = e.target;
      if (thisRef.mouseFlag == true) {
        $(thisRef.focusElement).css({
          'outline': 'none'
        });
        return;
      }
    //  setTimeout(()=>{
        $(thisRef.focusElement).css({
            'outline-color': 'yellow',
            'outline-style': 'solid',
            'outline-width': '5px'
          });
    //  },500)
    //   if(thisRef.focusElement.className!=='next-btn'){
    //     console.log('if condition')
    //     // $(thisRef.focusElement).trigger("click");
    //     $(thisRef.focusElement.className).off("click");
    // }
      $(thisRef.focusElement).keypress(function (event) {
        if(thisRef.focusElement.className!='next-btn'){
        if (event.key === 'Enter' || event.keyCode === 13) {
            lastKeyPressType='Enter';
            console.log(thisRef.focusElement.className)
          $(thisRef.focusElement).trigger("click");
        //   handleSpecialCases(event);
        }
        else{
            lastKeyPressType='';  
        }
    }
      });
    });
    $('[tabindex]').focusout((e) => {
      $(e.target).off('keypress');
      $(thisRef.focusElement).css({
        'outline': 'none'
      });
    });
  };

  $(document).ready(function () {
    addAccessibility();
  });


  document.body.style.webkitTouchCallout='none';
$(document).ready(function()
{
    $('img').bind('contextmenu', function(e){
        return false;
    }); 
});
$( document ).on( "taphold", function(e) {
        $('img').bind('contextmenu', function(e){
        return false;
    });
})

