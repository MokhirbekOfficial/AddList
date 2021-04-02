
// forEach

// let myForEach = (array, callback) => {
//     for(let n of array){
//        console.log(callback(n))
//     }
// }
//  let numbers = [1, 2, 3, 4, 5, 6, 7, 8]
//  let result1 = myForEach(numbers, (x)=>{
//     return x;
//  })


// fitlter

// let myFilter = (array, callback) => {
//     let newArray = []
//     for(let i of array){
//         if( callback(array[i]) != undefined){
//             newArray.push(callback(array[i]))
//         }
//     }
//     return newArray
// }
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let result2 = myFilter(numbers, (f) => {
//     if ( f > 3 && f < 7 ){
//         return f
//     }
// })
// console.log(result2)


// let myReduce = (array, callback) => {
//     let sum = 0
//     for(let i=0; i<array.length; i++){
//         sum+=callback(array[i])
//     }
//     return sum
// }
// let numbers = [1, 2, 3, 4]
// let result3 = myReduce(numbers, (x) => {
//     return x
// })
// console.log(result3)

let database = [
    {url: 'https://businessinfo.uz/static/front/images/uz-flag.jpg', country: 'Uzbekistan', info:'The Republic of Uzbekistan has its own state symbols - the flag, the emblem, and the anthem sanctioned by law. The Constitution of the Republic of Uzbekistan. Article 5.'},
    {url: 'https://cdn.pixabay.com/photo/2016/08/24/17/07/india-1617463__340.png', country: 'India', info: 'Modern humans arrived on the Indian subcontinent from Africa no later than 55,000 years ago. Their long occupation, initially in varying forms of isolation as hunter-gatherers, has made the region highly diverse, second only to Africa in human genetic diversity'},
    {url: 'https://businessinfo.uz/static/front/images/uz-flag.jpg', country: 'Uzbekistan', info:'The Republic of Uzbekistan has its own state symbols - the flag, the emblem, and the anthem sanctioned by law. The Constitution of the Republic of Uzbekistan. Article 5.'},
    {url: 'https://cdn.pixabay.com/photo/2016/08/24/17/07/india-1617463__340.png', country: 'India', info: 'Modern humans arrived on the Indian subcontinent from Africa no later than 55,000 years ago. Their long occupation, initially in varying forms of isolation as hunter-gatherers, has made the region highly diverse, second only to Africa in human genetic diversity'},
    {url: 'https://businessinfo.uz/static/front/images/uz-flag.jpg', country: 'Uzbekistan', info:'The Republic of Uzbekistan has its own state symbols - the flag, the emblem, and the anthem sanctioned by law. The Constitution of the Republic of Uzbekistan. Article 5.'},
]

let input1 = document.querySelector('.inputIMG')
let input2 = document.querySelector('.inputCounty')
let input3 = document.querySelector('.inputAbout')
let btn = document.querySelector('.btn')
let oldUl = document.querySelector('.list-item')


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

btn.addEventListener('click', () => {
    if(input1.value != '' && input2.value != '' && input3.value != ''){
        let url = input1.value
        let country = input2.value
        let info = input3.value
        let newDate = {url, country, info}
        database.push(newDate)

        display(database)

        input1.value = null
        input2.value = null
        input3.value = null
        console.log(oldUl)
    }
})