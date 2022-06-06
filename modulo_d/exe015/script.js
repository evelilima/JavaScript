function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 12){
                img.setAttribute('src', 'criança_menino_250.png')

            }else if (idade < 21){
                img.setAttribute('src', 'jovem_homem_250.png')

            }else if (idade < 50){
                img.setAttribute('src', 'adulto_homem_250.png')

            }else {
                img.setAttribute('src', 'idoso_250.png')

            }
        } else if (fsex[1].checked) {
            gênero ='Mulher'
            if (idade >= 0 && idade < 12){
                img.setAttribute('src', 'criança_menina_250.png')

            }else if (idade < 21){
                img.setAttribute('src', 'jovem_mulher_250.png')

            }else if (idade < 50){
                img.setAttribute('src', 'adulto_mulher_250.png')

            }else {
                img.setAttribute('src', 'idosa_250.png')

            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}