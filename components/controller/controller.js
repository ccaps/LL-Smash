

//
// BUILD CONTROLLER FUNCTION
//

function buildControllerQuiz(q)
{
    var container = "";
    var videosrc = q.video;
    var result1 = q.answer[0];
    var result2 = q.answer[1];
    var result3 = q.answer[2];
    var question = q.question;

    var controller =
        '<div id="controller_container">'
        + '<img src="img/controller.png" alt="" class="controller">'
        + '<img src="img/A.png" alt="" class="key button button_a" data-key="a">'
        + '<img src="img/B.png" alt="" class="key button button_b" data-key="b">'
        + '<img src="img/X.png" alt="" class="key button button_x" data-key="x">'
        + '<img src="img/Y.png" alt="" class="key button button_y" data-key="y">'
        + '<img src="img/stick.png" alt="" class="stick">'
        + '<div class="key stick__cta stick__cta--left" data-key="left"></div>'
        + '<div class="key stick__cta stick__cta--right" data-key="right"></div>'
        + '<div class="key stick__cta stick__cta--up" data-key="up"></div>'
        + '<div class="key stick__cta stick__cta--down" data-key="down"></div>'
        + '</div>';

    var controller_icons =
        '<div class="controller_icons" hidden="true">'
        +'<img data-key="a" class="img-responsive" src="../../src/images/controler/a.png" alt="A-Button" width="100%"/>'
        +'<img data-key="b" class="img-responsive" src="../../src/images/controler/b.png" alt="A-Button" width="100%"/>'
        +'<img data-key="x" class="img-responsive" src="../../src/images/controler/x.png" alt="A-Button" width="100%"/>'
        +'<img data-key="y" class="img-responsive" src="../../src/images/controler/y.png" alt="A-Button" width="100%"/>'
        +'<img data-key="left" class="img-responsive" src="../../src/images/controler/left.png" alt="A-Button" width="100%"/>'
        +'<img data-key="right" class="img-responsive" src="../../src/images/controler/right.png" alt="A-Button" width="100%"/>'
        +'<img data-key="up" class="img-responsive" src="../../src/images/controler/up.png" alt="A-Button" width="100%"/>'
        +'<img data-key="down" class="img-responsive" src="../../src/images/controler/down.png" alt="A-Button" width="100%"/>'
        +'</div>';

    var display_container =
        '<div id="display_container">'
        +'<span class="display__field field_1" data-result="'+result1+'"></span>'
        +'<span class="display__field field_2" data-result="'+result2+'"></span>'
        +'<span class="display__field field_3" data-result="'+result3+'"></span>'
        +'</div>';

    var video_container =
        '<div id ="video_container">'
        +'<video controls width="500px">'
        +'<source src="' + videosrc + '" type="video/mp4">'
        +'</video>'
        +'</div>';

    document.querySelector(container).innerHTML = controller + controller_icons + video_container + display_container ;
}

//buildControllerQuiz('body', '../../src/videos/controls/airdodge.mp4', 'right', 'left', 'a' );



//
// CHECK RESULTS
//

var key = document.getElementsByClassName("key");

var clickButton = function() {
    var data_key = this.getAttribute("data-key");
    var key_img = document.querySelector('.controller_icons>img[data-key="'+data_key+'"]');
    key_img = key_img.outerHTML;

    var display_fields = document.querySelectorAll(".display__field");

    var field = [];
    for (var i = 0; i < display_fields.length; i++){
        field[i] = display_fields[i];
        if(!field[i].innerHTML){
            field[i].innerHTML = key_img;
            field[i].dataset.key = data_key;
            break;
        } else {
            console.log("feld " +i+ " ist bereits gefüllt")
        }

        console.log(display_fields)

        if(i + 1 == (display_fields.length)){
            checkResult(field[i]);
        }
    }
};

for (var i = 0; i < key.length; i++) {
    key[i].addEventListener('click', clickButton, false);
}


function checkResult(field){
    if(field.dataset.key === field.dataset.result){
        console.log("richtig")
    } else {
        console.log("falsch")
    }
}


//
//
// STICK MOVES

var stick = document.getElementsByClassName("stick")[0];
var stick_boxes = document.getElementsByClassName("stick__cta");
var stick_left = document.getElementsByClassName("stick__cta--left")[0];
var stick_right = document.getElementsByClassName("stick__cta--right")[0];
var stick_up = document.getElementsByClassName("stick__cta--up")[0];
var stick_down = document.getElementsByClassName("stick__cta--down")[0];

stick_left.onmouseover = function(){
    moveStick(stick, "x", -10 )
};
stick_right.onmouseover = function(){
    moveStick(stick, "x", 10 )
};
stick_up.onmouseover = function(){
    moveStick(stick, "y", -10 )
};
stick_down.onmouseover = function(){
    moveStick(stick, "y", 10 )
};

for (index = 0; index < stick_boxes.length; ++index) {
    stick_boxes[index].onmouseout = function(){
        stick.style.transform = "translateX(0)"
    }
}

function moveStick(stick, axis, translation){
    stick.style.transform = "translate" + axis.toUpperCase() + "(" + translation + "px)";
}