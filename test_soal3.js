/*
Nama : Eswin Napitupulu
Alamat Email: winnapitupulu@gmail.com
Waktu Mulai :
Waktu Selesai :
*/

//pertama
function star(num){
    var hasil = '';
    
    for(i=0;i<=num;i++){
        for(j=0;j<=i;j++){
            hasil += '* ';
        }
        hasil += '\n'
    }
    return hasil;
}
console.log(star(3));

//kedua

function star2(num2){
    var hasil = '';
    
    for(i=0;i<=num2;i++){
        for(j=num2;j>=i;j--){
            hasil += '  ';
        }
          for(k=0;k<=i;k++){
             hasil +='* ';
        }
        hasil += '\n'
    }
    return hasil;
}
console.log(star2(5));