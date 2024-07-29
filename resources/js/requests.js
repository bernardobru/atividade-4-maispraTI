/* function request(url) {
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
} */
function getContent(url) {
    window.document.getElementById('content').innerHTML = '';
    const ajax = new XMLHttpRequest();
    ajax.open('GET', url);
    ajax.onreadystatechange = () => {
        if(ajax.readyState === 4 && ajax.status >= 200 && ajax.status <= 299) {
            ajax.onload = () => {
                const data = ajax.responseText;
                document.getElementById('content').innerHTML = data;
            }
        } 
        if(ajax.status === 404) {
            console.error(`O arquivo não foi encontrado:\n ${ajax.status}`);
            document.getElementById('content').innerHTML = 
            `<div>
            <h1>ERRO 404</h1>
            <p>O arquivo não foi encontrado, reporte esse erro ao <a href="mailto:desenvolvedor@empresa.com">desenvolvedor</a></p>
            </div>`;
        }
    }
    ajax.send();
   
}