const onOff = document.querySelector('button#OnOff')
const lamp = document.querySelector('img#lampada')
const texto = document.querySelector('p#texto')

onOff.addEventListener('click', lampOnOff)
lamp.addEventListener('mouseover', ligar)
lamp.addEventListener('mouseleave', desligar)
lamp.addEventListener('dblclick', quebrar)

function lampOnOff() {
    if (onOff.textContent == 'Ligar') {
        ligar()
        onOff.textContent = 'Desligar'
    } else {
        desligar()
        onOff.textContent = 'Ligar'
    }
}

function seEstaQuebrada() {
    return lamp.src.indexOf('quebrada') > -1
}

function ligar() {
    if (!seEstaQuebrada()) {
        lamp.src = './img/ligada.jpg'
    }
}

function desligar() {
    if (!seEstaQuebrada()) {
        lamp.src = './img/desligada.jpg'
    }
}

function quebrar() {
    lamp.src = './img/quebrada.jpg'
    texto.innerHTML = 'Quebrou!!! <br> Recarregue a página para <br> consertar a lâmpada! &#128531;'
}