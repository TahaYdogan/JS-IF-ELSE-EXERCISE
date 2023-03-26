// 1- bir sayinin 10-50 arasinda olup olmadigini kontrol ediniz
/*
 let sayi1 = 60;
  if((sayi1>10 && sayi1<50)){
    console.log("sayi 10 ila 50 arasinda");

  }
  else{
    console.log("sayi 10 ila 50 arasinda degildir");
  }
  */
  
// 2- Bir sayinin pozitif  tek sayi olup olmadigini kontrol ediniz
/* sayi = 20; 
if((sayi % 2 == 1 && sayi > 0 ) ){
    console.log("sayilarr");
}
else{
    console.log("sayi tek degildir")
}
*/


// 3- x,y,x sayilarinin buyukluk karsilastirmalarini yapiniz

/* let x = 10, y = 20, z = 30;
if (x > y && x > z){
    console.log("x en buyuktur")
} else if(y > x && y > z){
    console.log(" y en buyuktur")
}
else if(z > x && z > y){
    console.log(" z en buyuktur")
} else {
    console.log("sayilar esit")
}

*/

// 4- 2 vize (%40) ve 1 final(%60) notuna gore hesaplanan ortalama icin;
    // a- eger ortalama 50 ve ustundeyse gecti  degilse kaldi yazsin
    //b- gecemek icin ortalaam 50 bile olsa final notu en az 50 olmalidir
    //c- finalden 70 alindiginda ortalama 50`nin altinda bile olsa dersten gecilsin
let vize1 = 60;
let vize2 = 60;

let final = 49;

let ortalama =((vize1 + vize2) / 2) * 0.4 + final * 0.6;

console.log("Ortalamaniz" + ortalama);
/* A sikki 
if(ortalama >= 50){
    console.log("Gectiniz")
} else {
    console.log("Kaldiniz")
}
*/

/*  B sikki 
if(ortalama >= 50 && final >= 50){
    console.log("Gectiniz")
} else {
    console.log("Kaldiniz")
}

*/

if(ortalama >= 50 || final >= 70){
    console.log("Gectiniz")
} else {
    console.log("Kaldiniz")
}







