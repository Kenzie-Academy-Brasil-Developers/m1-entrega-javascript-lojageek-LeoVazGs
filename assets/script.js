let item = {}
let listFigure = [];
let listPainting = [];

function createActionItem(imagem, nome, valor){
    
    return {
        imagem,
        nome,
        valor
        }
    }

function createPaintingItem(imagem, nome, valor){
    
    return {
        imagem,
        nome,
        valor
        }
    }

function pushActionItem(item){
    return listFigure.push(item)
}

function pushPaintingItem(item){
    return listPainting.push(item)
}

item =pushActionItem(createActionItem("./assets/img/actions/animewoman.jpg", 'Animewoman', 'R$150,00'))
item =pushActionItem(createActionItem("./assets/img/actions/dragonballpersonagem.jpg", 'Goku', 'R$150,00'))
item =pushActionItem(createActionItem("./assets/img/actions/starwarspersonagem.jpg", 'Baby Yoda', 'R$150,00'))
item =pushPaintingItem(createPaintingItem("./assets/img/painting/clock.jpg",'Relógio','R$50,00'))
item =pushPaintingItem(createPaintingItem("./assets/img/painting/gamepad.jpg",'Gamepad','R$50,00'))
item =pushPaintingItem(createPaintingItem("./assets/img/painting/personagem.jpg",'C-3PO','R$50,00'))


let secaolistFigure = document.querySelector('.figures-flex')
let secaolistPaints = document.querySelector('.paintings-flex')



function listarFigures(figures){
    
    
    for(let i = 0; i < figures.length; i++){
    
        let figure = figures[i]
    
        let card = cardFigure(figure)


        secaolistFigure.appendChild(card)
        
    }
        
    }

listarFigures(listFigure)

function cardFigure(figure)  {
    
    let imagem = figure.imagem
    let nome = figure.nome
    let preco = figure.valor

    let li = document.createElement("li")
    let img = document.createElement("img")
    let tagname = document.createElement("h2")
    let tagpreco = document.createElement("p")
    let imgTam = document.create



    img.src = imagem
    img.alt = nome
    tagname.innerText = nome
    tagpreco.innerText = preco
    img.classList.add("card-img")

    li.appendChild(img)
    li.appendChild(tagname)
    li.appendChild(tagpreco)
    

    return li
}  
function listarPaints(paints){
    
    
    for(let i = 0; i < paints.length; i++){
    
        let paint = paints[i]
    
        let card = cardPaint(paint)


        secaolistPaints.appendChild(card)
        
    }
        
    }

listarPaints(listPainting)

function cardPaint(paint)  {
    
    let imagem = paint.imagem
    let nome = paint.nome
    let preco = paint.valor

    let li = document.createElement("li")
    let img = document.createElement("img")
    let tagname = document.createElement("h2")
    let tagpreco = document.createElement("p")
    



    img.src = imagem
    img.alt = nome
    tagname.innerText = nome
    tagpreco.innerText = preco
    img.classList.add("card-img")

    li.appendChild(img)
    li.appendChild(tagname)
    li.appendChild(tagpreco)
    

    return li
}  

