var erro = 0

function jogar() {
    var c1 = document.getElementById('l1')
    var l1 = c1.value
    var c2 = document.getElementById('l2')
    var l2 = c2.value
    var c3 = document.getElementById('l3')
    var l3 = c3.value
    var c4 = document.getElementById('l4')
    var l4 = c4.value
    var c5 = document.getElementById('l5')
    var l5 = c5.value
    var c6 = document.getElementById('l6')
    var l6 = c6.value
    var c7 = document.getElementById('l7')
    var l7 = c7.value
    var c8 = document.getElementById('l8')
    var l8 = c8.value
    var c9 = document.getElementById('l9')
    var l9 = c9.value
    var c10 = document.getElementById('l10')
    var l10 = c10.value
    var testl = document.getElementById('letra')
    var tl = testl.value
    var img = document.getElementById('forca')
 
    if (tl == l1 || tl == l2 || tl == l3 || tl == l4 || tl == l5 || tl == l6 || tl == l7 || tl == l8 || tl == l9 || tl == l10) {
        if (tl == l1 && c1.style.color != 'black') {
            c1.style.color = 'black'
        }

        else if (tl == l2 && c2.style.color != 'black') {
            c2.style.color = "black"
        }
        
        else if (tl == l3 && c3.style.color != 'black') {
            c3.style.color = "black"
        }
        else if (tl == l4 && c4.style.color != 'black') {
            c4.style.color = "black"
        }    
        else if (tl == l5 && c5.style.color != 'black') {
            c5.style.color = "black"
        }
        else if (tl == l6 && c6.style.color != 'black') {
            c6.style.color = "black"
        }    
        else if (tl == l7 && c7.style.color != 'black') {
            c7.style.color = "black"
        }
        else if (tl == l8 && c8.style.color != 'black') {
            c8.style.color = "black"
        }    
        else if (tl == l9 && c9.style.color != 'black') {
            c9.style.color = "black"
        }
        else if (tl == l10 && c10.style.color != 'black') {
            c10.style.color = "black"
        }    
    }
    else {
        erro++
        switch (Number(erro)) {
            case 1 : 
                img.src = 'imagens/mf1.png'
                breake
            case 2 :
                img.src = 'imagens/mf2.png'
                breake
            case 3 : 
                img.src = 'imagens/mf3.png'
                breake
            case 4 :
                img.src = 'imagens/mf4.png'
                breake
            case 5 :
                img.src = 'imagens/mf5.png'
                breake
            case 6 :
                img.src = 'imagens/mf6.png'
                breake
            default :
            alert(`Perdeu!!! A palavra era: ${l1}${l2}${l3}${l4}${l5}${l6}${l7}${l8}${l9}${l10}`)
            window.location.href = "pg2.html"
        }
        
    } 
    
}
