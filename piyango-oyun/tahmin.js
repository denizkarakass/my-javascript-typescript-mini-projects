

let sayiüret = Math.random()
let sayiko = (sayiüret*100)+10
let sayi = parseInt(sayiko)
console.log(sayi)

let birlerbas = sayi % 10
let onlarbas = parseInt (sayi / 10)

console.log(birlerbas)
console.log(onlarbas)

let tahmin = parseInt( prompt("Sayı tahmini giriniz?"))
console.log(tahmin)

let tahminbir =  tahmin % 10
let tahminon = parseInt(tahmin / 10 )

console.log(tahminbir)
console.log(tahminon)

if(tahmin == sayi){
    //alert("Tebrikler 10 k kazandınız")
    console.log("tebrikler 10 k")
}else if(birlerbas === tahminbir || onlarbas === tahminon  ){
    console.log("Tebrikler 5 k")
}else if(birlerbas === tahminon || onlarbas === tahminbir ){
    console.log("Tebrikler 1 k")
}
