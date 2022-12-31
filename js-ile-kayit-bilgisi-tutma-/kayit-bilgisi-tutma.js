
var student_info = {
    id : '494',
    isim: 'deniz',
    soyisim: 'karakaş',
    kayit_yili: 2021,
    harc_parasi: 1800,
    ogrenci_sinav_sonuclari:
    [
        {
           id: '494_1',
           sinav_adi: 'ara sınav 1',
           puani: 70,
           ucret:50,
           detay:['pazartesi sınav oldu','hoca xx' ]

         },
         {
             id:'494_2',
             sinav_adi: 'final',
             puani: 75,
             ucret: 50,
             detay:['perşembe sınav oldu','hoca yy' ]

         }
    ]

}
console.log(student_info);



var ödenen_para= student_info.harc_parasi + student_info.ogrenci_sinav_sonuclari[0].ucret + student_info.ogrenci_sinav_sonuclari[1].ucret ;
console.log(ödenen_para);

var kayit_süresi =  2022 - student_info.kayit_yili;
console.log(kayit_süresi);