function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById ('imagem') 
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.` 
    if (hora >= 0 && hora < 12){
        //BOM DIA!
        img.src = 'modelo/imagens/manha_250.png'
        document.body.style.background = '#d6d7d1'
    }else if (hora >= 12 && hora <= 18){
        //BOA TARDE!
        img.src = 'modelo/imagens/tarde_250.png'
        document.body.style.background = '#5462a3'
    }else{
        //BOA NOITE!
        img.src = 'modelo/imagens/noite_250.png'
        document.body.style.background = '#263650'
    }
}

