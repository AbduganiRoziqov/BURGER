let arr = []
const list = document.getElementById('ul')

const a = id => {
    if (arr.length == 10) {
        alert('Aka qimmat bop ketdi ')
    }
    const item = document.createElement('li')
    const img = document.createElement('img')
    item.className = 'item'
    item.id = id
    img.id = id
    arr.map(e => {
        img.src = e?.src
    })

    item.addEventListener('click', e => {
        e.preventDefault()
        arr = arr.filter(w => w?.id != e.target.id) 
        e.target.style = 'display: none'
    })

    item.appendChild(img)
    list.appendChild(item)
}


const saladAdd = () => {
    const newObj = {
        id: arr.at(-1)?.id + 1 || 1,
        src: 'https://mpng.subpng.com/20180309/pre/kisspng-hamburger-iceberg-lettuce-vegetable-vector-painted-vegetables-5aa2a412cca0d9.5925393915206082748382.jpg'
    }
    arr.push(newObj)
    a(newObj.id)
}

const poshtAdd = () => {
    const newObj = {
        id: arr.at(-1)?.id + 1 || 1,
        src: 'https://previews.123rf.com/images/anatolir/anatolir2007/anatolir200702210/152187367-burger-meat-icon-cartoon-style.jpg'
    }
    arr.push(newObj)
    a(newObj.id)
}

const sirAdd = () => {
    const newObj = {
        id: arr.at(-1)?.id + 1 || 1,
        src: 'https://www.onlygfx.com/wp-content/uploads/2021/01/cartoon-cheese-1.png'
    }
    arr.push(newObj)
    a(newObj.id)
}

const pamidorAdd = () => {
    const newObj = {
        id: arr.at(-1)?.id + 1 || 1,
        src: 'https://w7.pngwing.com/pngs/1011/362/png-transparent-plum-tomato-hamburger-vegetable-food-tomato-natural-foods-food-orange.png'
    }
    arr.push(newObj)
    a(newObj.id)
}
const piyozAdd = () => {
    const newObj = {
      id: arr.at(-1)?.id + 1 || 1,
      src: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngegg.com%2Fen%2Fsearch%3Fq%3Donion%2BSlice&psig=AOvVaw2XbpA9ki9DGXFqgtuXQ3lS&ust=1673049843184000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLDCmr_SsfwCFQAAAAAdAAAAABAE",
    };
    arr.push(newObj)
    a(newObj.id)
}