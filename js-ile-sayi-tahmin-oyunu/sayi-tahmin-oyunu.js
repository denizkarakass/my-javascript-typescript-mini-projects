
var hak= 5;
var tahmin, sayac=0;
var sayi= Math.floor((Math.random()*10)+1);  // rasgele sayı oluşturuyoruz her seferinde
// console.log(sayi);  

while(hak>0){
    hak--;
    sayac++; 
    tahmin= Number(prompt('Bir sayı giriniz.'));

    if(sayi== tahmin){
        console.log(`Tebrikler ${sayac} defada bildiniz.`);
        console.log(`puanınız: ${100-(20)*(sayac-1)}`)
        break;
    }else if(sayi<tahmin){
        console.log('Tahmininizi azaltınız.');
    }else{
        console.log('Tahmininizi arttırınız.');
    }

    if(hak==0){
        console.log('hakkınız bitti cevap: '+ sayi + ' idi.');
    }
}
