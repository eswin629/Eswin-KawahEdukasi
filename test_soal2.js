/*
Nama : Eswin Napitupulu
Alamat Email: winnapitupulu@gmail.com
Waktu Mulai :
Waktu Selesai :
*/

var input1 = "hallo jesika24 selamat datang!"
var input2 = "hallo anggun selamat datang!"
var input3 = "hallo ** selamat datang!"
var input4 = "hallo Mariage889120! selamat datang!"

function result(num){
    if(input1==num){
    console.log('Sistem kami menolak untuk inputan berisi angka 24');
    }
    else if(input2==num){
    console.log('Sistem memeriksa data anda valid dengan ketentuan kami dengan inputan hallo anggun selamat datang!'); 
    }
    else if(input3==num){
    console.log('Sistem memeriksa data anda valid dengan ketentuan kami dengan inputan hallo ** selamat datang!'); 
    }
    else if(input4==num){
    console.log('Sistem kami menolak untuk inputan berisi angka 889120'); 
    }
}
result(input4);