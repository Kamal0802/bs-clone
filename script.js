

function copy(){
    var text=document.getElementById('url');
    text.select();
    navigator.clipboard.writeText(text.value);
}