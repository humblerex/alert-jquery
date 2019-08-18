var hrxAlert = {
    SUCCESS: 'success',
    WARNING: 'warning',
    DANGER: 'danger',
    container:'alert-container',
    cshow:'alert-show',
    cright:'alert-right',
    cleft:'alert-left',
    ctop:'alert-top',
    cdown:'alert-down',
    csuccess:'alert-success',
    cwarning:'alert-warning',
    cdanger:'alert-danger'
};
var Animation = {
    SLIDEIN: 'slidein'
};
var Position = {
    RIGHT: 'right',
    LEFT: 'left',
    TOPLEFT: 'top-left',
    TOPRIGHT: 'top-right',
    BOTTOMRIGHT: 'bottom-right',
    BOTTOMLEFT: 'bottom-left'
};

$.alert = (options) => {

    var defOpt = {
        message: '',
        type: hrxAlert.SUCCESS,
        animation: Animation.SLIDEIN,
        position: Position.RIGHT,
        destroy: 2
    };

    if ($('.alert-container').length == 0)
        $("body").append('<div class="alert-container"></div>');

    var settings = $.extend({}, defOpt, options);

    var alertContainer = $('.alert-container')[0];
    var alertMessageWrap = $('<div class="alert-message-wrap"></div>');
    var alertMessage = $('<p class="alert-message"></p>');

    $(alertMessage).text(settings.message);
    $(alertMessage).appendTo(alertMessageWrap);
    $(alertMessageWrap).appendTo(alertContainer);
    if (settings.position.includes('bottom'))
        $(alertContainer).append(alertMessageWrap);
    else
        $(alertContainer).prepend(alertMessageWrap);

    addType(alertMessageWrap, settings.type);
    addPosition(alertContainer, settings.position);

    setTimeout(function () {
        showAlert(alertMessageWrap, settings.animation);
    }, 100);
        destroyAlert(alertMessageWrap,Number(settings.destroy));
};

$.modal = (options) => {
    var defOpt = {
        title : 'Modal title',
        message:'Here goes message',
    };
    if ($('.modal-container').length == 0)
        $("body").append('<div class="modal-container"></div>');

    var settings = $.extend({}, defOpt, options);

    
}

//Utility functions
function showAlert(ele, anim) {
    addAnimation(ele, anim);
    addClass(ele, hrxAlert.cshow);
}

function addPosition(ele, pos) {
    switch (pos) {
        case "top-right":
            addMClass(ele, 'alert-right,alert-top');
            break;
        case "bottom-right":
            addMClass(ele, 'alert-right,alert-bottom');
            break;
        case "top-left":
            addMClass(ele, 'alert-left,alert-top');
            break;
        case "bottom-left":
            addMClass(ele, 'alert-left,alert-bottom');
            break;

    }
}

function addType(ele, type) {
    switch (type) {
        case hrxAlert.SUCCESS:
            addClass(ele, hrxAlert.csuccess);
            break;
        case hrxAlert.DANGER:
            addClass(ele, hrxAlert.cdanger);
            break;
        case hrxAlert.WARNING:
            addClass(ele, hrxAlert.cwarning);
            break;
    }
}


function addAnimation(ele, anim) {
    switch (anim) {
        case "slidein":
            addClass(ele, 'alert-slide-in');
            break;
        case "fadein":
            addClass(ele, 'alert-fade-in');
            break;
    }
}

function destroyAlert(ele, time) {
    setTimeout(function () {
        hideAlert(ele);
        removeAnimation(ele);
        setTimeout(function(){
            $(ele).remove();
        },100);
        
    }, time * 1000);
}

function hideAlert(ele){
    removeClass(ele,hrxAlert.cshow);
}

function removeAnimation(ele){
    removeMClass(ele,'alert-slide-in,alert-fade-in');
}

function addClass(ele, cls) {
    $(ele).addClass(cls);
}
function removeClass(ele, cls) {
    $(ele).removeClass(cls);
}

function addMClass(ele, cls) {
    var c = cls.split(',')
    c.forEach(element => {
        addClass(ele,element);
    });
}
function removeMClass(ele, cls) {
    var c = cls.split(',')
    c.forEach(element => {
        removeClass(ele,element);
    });
}