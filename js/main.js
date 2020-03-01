const imageURL = chrome.extension.getURL('images/keikoku_mark');
const imageTag = `<img id="keikoku_mark" src="${imageURL}">`;

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

const target = document.getElementById("HTMLを挿入するDOM")
injectHtml("index.html", target)

var body = document.querySelector('body');
body.insertAdjacentHTML('afterbegin','<div id="dialog"><div id="float"><div id="kuina">Twitter_Yameroからの警告</div><div id="batu_hover"><button id="batu" type="button" onfocus="this.blur();"></button></div></div><div id="inline"><p id="main_text">ツイッターを閉じて、作業をしますか？</p></div><div id="background"><a href="https://www.google.com/"><button id="ok">OK</button></a><a href="https://www.google.com/"><button id="hai">はい(Y)</button></a><a href="https://www.google.com/"><button id="yes">Yes</button></a></div></div>');


inline.insertAdjacentHTML('afterbegin',imageTag);


setInterval(function(){
    dialog.style.display = 'block';
},10000);

dialogResize();

// ok.addEventListener('click', function(){
//     window.close();
// });
// hai.addEventListener('click', function(){
//     window.close();
// });
// yes.addEventListener('click', function(){
//     window.close();
// });
batu.addEventListener('click', function(){
    dialog.style.display = 'none';
});