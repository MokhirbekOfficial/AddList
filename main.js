


let input1 = document.querySelector('.inputIMG')
let input2 = document.querySelector('.inputCounty')
let input3 = document.querySelector('.inputAbout')
let btn = document.querySelector('.btn')
let oldUl = document.querySelector('.list-item')
let newForm = document.querySelector('.wrapper')


function display (src){
    oldUl.innerHTML = null
    for(let date of src){
        let newli = document.createElement('li')
        newli.classList.add('item')
        let newImg = document.createElement('img')
        newImg.classList.add('flag')
        newImg.setAttribute('src', date.url)
        newImg.setAttribute('width', '300')
        newImg.setAttribute('height', '200')
        newImg.setAttribute('alt', 'Flag')
        let newDiv = document.createElement('div')
        newDiv.classList.add('warpper2')
        let newH2 = document.createElement('h2')
        newH2.classList.add('countyName')
        newH2.textContent = date.country
        let newP = document.createElement('p')
        newP.classList.add('info')
        newP.textContent = date.info
        newDiv.appendChild(newH2)
        newDiv.appendChild(newP)
        newli.appendChild(newImg)
        newli.appendChild(newDiv)
        oldUl.appendChild(newli)
    }
}

display(database);

newForm.addEventListener('submit', (event) => {
    event.preventDefault()
    let url = input1.value
    let country = input2.value
    let info = input3.value
    let newDate = {url, country, info}
    database.push(newDate)
    display(database)
    let stringed = JSON.stringify(database)
    window.localStorage.setItem('LocalData', stringed)
    input1.value = null
    input2.value = null
    input3.value = null
})