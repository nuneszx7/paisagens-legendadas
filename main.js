'use strict'

const imagens = [
    {
        nome: 'Georgia',
        url: './img/georgia.jpg' 
    },
    {
        nome: 'Ibiza',
        url: './img/ibiza.avif'
    },
    {
        nome: 'Bali',
        url: './img/bali.jpg'
    },
    {
        nome: 'Estonia',
        url: './img/estonia.jpg'
    },
    {
        nome: 'Monaco',
        url: './img/monaco.webp'
    },
    {
        nome: 'Tailandia',
        url: './img/tailandia.avif'
    },
    {
        nome: 'Mykonos',
        url: './img/mykonos.jpg'
    },
    {
        nome: 'Islandia',
        url: './img/islandia.jpg'
    }
]


function criarImagem (srcImagem){
    const galeria = document.getElementById('galeria')
    const imagem = document.createElement('img')
    imagem.src = srcImagem.url  
    galeria.appendChild(imagem)

}


function carregarImagens () {
    
    
    
    // let contador = 0
    // while(contador <= 8){

    //     contador++
    // }

    imagens.forEach (criarImagem)


}

carregarImagens()