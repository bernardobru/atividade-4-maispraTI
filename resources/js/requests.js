function request(url) {
    document.getElementById('content').innerHTML = '';
    if(!document.getElementById('loading')) {
        const imgLoading = document.createElement('img');
        imgLoading.id = 'loading';
        imgLoading.src = '../slick/ajax-loader.gif';
        imgLoading.className = 'rounded mx-auto d-block';
        document.getElementById('content').appendChild(imgLoading);
    }
    const ajax = new XMLHttpRequest();
    ajax.open('GET', url)
    ajax.onreadystatechange = () => {
        if(ajax.readyState === 4 && ajax.status === 200) {
            document.getElementById('content').innerHTML = ajax.responseText;
        }
        if(ajax.readyState == 4 && ajax.status == 404) {
            document.getElementById('content').innerHTML = 'Erro 404';
        }   
    }
    ajax.send();
}
function request2(url) {
    document.getElementById('content').innerHTML = '';
    const content = fetch(url)
    .then((response))
}