function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert("[ERRO] Verifique os dados e tente novamente")
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        var mensagem = document.createElement('p'); // Cria um elemento <p> para a mensagem
        img.setAttribute('id', 'foto'); // Adiciona o id "foto" ao <img>
        
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >=0 && idade < 10){
                img.setAttribute('src','crianca.jpg');
                mensagem.innerHTML = 'Você é um menino muito esperto!';

            }else if (idade < 21){
                img.setAttribute('src','adolescente.png');
                mensagem.innerHTML = 'Ainda é muito novo mas pensa que não.';

            }else if (idade < 50){
                img.setAttribute('src','adulto.png');
                mensagem.innerHTML = 'Sofre com a CLT.';

            }else if (idade >= 50 && idade < 80){
                img.setAttribute('src','idoso.png');
                mensagem.innerHTML = 'O mais novo aposentado!';

            }else if (idade >= 80 && idade < 120){
                img.setAttribute('src','muito-velho2.png');
                mensagem.innerHTML = 'Provavelmente você seja o Homem mais velho do mundo.';

            }else if (idade >= 120 && idade < 200){
                img.setAttribute('src','tartaruga.png');
                mensagem.innerHTML = 'Você é uma tartaruga muito velha!';
            
            }else if (idade >= 200 && idade < ano){
                img.setAttribute('src','imortal.png');
                mensagem.innerHTML = 'Com ajuda de magos e feiticeiros você conseguiu alcançar a imortalidade';   
            }

        }else if(fsex[1].checked){
            genero = 'Mulher'

            if (idade >=0 && idade < 10){
                img.setAttribute('src','menina.png');
                mensagem.innerHTML = 'Você é um menina muito esperta!';

            }else if (idade < 21){
                img.setAttribute('src','adolescenteMenina.png');
                mensagem.innerHTML = ' aquela que sabe tudo da vida, menos onde deixou o carregado.';

            }else if (idade < 50){
                img.setAttribute('src','mulher.png');
                mensagem.innerHTML = 'Senhora dos negócios.';

            }else if (idade >= 50 && idade < 80){
                img.setAttribute('src','idosa.png');
                mensagem.innerHTML = 'Senhora já aposentada.';

            }else if (idade >= 80 && idade < ano){
                img.setAttribute('src','idosa.png')
                mensagem.innerHTML = 'Você é a mulher mais velha do mundo!:)'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectei um ${genero} com ${idade} anos.`
        res.appendChild(img)
        res.appendChild(mensagem); // Adiciona a mensagem ao resultado
        
    }
}