async function injectHtml(resource, dom) {
    const res = await fetch(chrome.runtime.getURL(resource), { method: "GET" })
    const html = await res.text()
    dom.innerHTML = html
}

const target = document.getElementById("HTMLを挿入するDOM")
injectHtml("index.html", target)

var body = document.querySelector('body');
body.insertAdjacentHTML('afterbegin','<div id="dialog"><div id="float"><div id="kuina">Twitter_Yameroからの警告</div><div id="batu_hover"><button id="batu" type="button" onfocus="this.blur();"></button></div></div><div id="inline"><img id="keikoku_mark" src="./css/images/keikoku_mark" alt="keikoku_mark"><p id="main_text">ツイッターを閉じて、作業をしますか？</p></div><div id="background"><button id="ok">OK</button><button id="hai">はい(Y)</button><button id="yes">Yes</button></div></div>');
// var jquery = document.getElementById('#dialog');
// dialog.insertAdjacentHTML('afterend','<script src="https://code.jquery.com/jquery-3.3.1.js"></script>')
setInterval(function(){
    dialog.style.display = 'block';
},600);

$(window).resize(modalResize);
function modalResize(){

    var w = $(window).width();
    var h = $(window).height();
    var cw = $("#dialog").outerWidth();
    var ch = $("#dialog").outerHeight();

  //取得した値をcssに追加する
    $("#dialog").css({
        "left": ((w - cw)/2) + "px",
        "top": ((h - ch)/2) + "px"
    });

    // var a = window.parent.screen.width;
    // var b = winsow.parent.screen.height;
    // var c = document.getElementById("dialog").style.width;
    // var d = document.getElementById("dialog").style.height;

    // document.getElementById('dialog').style.left = (a-c)/2 + "px";
    // document.getElementById('dialog').style.top = (b-d)/2 + "px";
}
modalResize();

ok.addEventListener('click', function(){
    window.close();
});
hai.addEventListener('click', function(){
    window.close();
});
yes.addEventListener('click', function(){
    window.close();
});
batu.addEventListener('click', function(){
    dialog.style.display = 'none';
});