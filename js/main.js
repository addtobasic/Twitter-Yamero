async function injectHtml(resource, dom) {
    const res = await fetch(chrome.runtime.getURL(resource), { method: "GET" })
    const html = await res.text()
    dom.innerHTML = html
}

const target = document.getElementById("HTMLを挿入するDOM")
injectHtml("index.html", target)

setInterval(function(){dialog.style.display = 'block';},60000);

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