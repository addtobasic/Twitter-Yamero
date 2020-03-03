const keikokuURL = chrome.extension.getURL('images/keikoku_mark');
const keikokuTag = `<img id="keikoku_mark" src="${keikokuURL}">`;
const batuURL = chrome.extension.getURL('images/batuhover.png');
const batuTag = `<img id="batu" src="${batuURL}">`;

function dialogResize(){
    var w = $(window).width();
    var h = $(window).height();
    var cw = $("#dialog").outerWidth();
    var ch = $("#dialog").outerHeight();

    $("#dialog").css({
        "left": ((w - cw)/2) + "px",
        "top": ((h - ch)/2) + "px"
    });
}

async function injectHtml(resource, dom) {
    const res = await fetch(chrome.runtime.getURL(resource), { method: "GET" })
    const html = await res.text()
    dom.innerHTML = html
}

const target = document.getElementById("")
injectHtml("index.html", target)

var body = document.querySelector('body');
body.insertAdjacentHTML('afterbegin','<div id="dialog"><div id="float"><div id="kuina">Twitter_Yameroからの警告</div><div id="inline"><p id="main_text">ツイッターを閉じて、作業をしますか？</p></div><div id="background"><a href="https://www.google.com/"><button id="ok">OK</button></a><a href="https://www.google.com/"><button id="hai">はい(Y)</button></a><a href="https://www.google.com/"><button id="yes">Yes</button></a></div></div>');

inline.insertAdjacentHTML('afterbegin',keikokuTag);
kuina.insertAdjacentHTML('beforeend',batuTag);

setInterval(function(){
    dialog.style.display = 'block';
},10000);//10秒
    
dialogResize();

batu.addEventListener('click', function(){
    dialog.style.display = 'none';
});