function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById ('imagem') 
    var saud = window.document.getElementById('saud')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 8
    
    msg.innerHTML = `Agora são ${hora} horas.` 
    if (hora >= 0 && hora < 12){
        img.src = 'manha_250.png'
        document.body.style.background = '#d6d7d1'
        saud.innerHTML = 'Bom Dia!'
    }else if (hora >= 12 && hora <= 18){
        img.src = 'tarde_250.png'
        document.body.style.background = '#5462a3'
        saud.innerHTML = 'Boa Tarde!'
    }else{
        img.src = 'noite_250.png'
        document.body.style.background = '#263650'
        saud.innerHTML = 'Boa Noite!'
    }
}

