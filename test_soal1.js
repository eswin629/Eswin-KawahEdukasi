/*
Nama : Eswin Napitupulu
Alamat Email: winnapitupulu@gmail.com
Waktu Mulai :
Waktu Selesai :
*/

var data1 = [1, 1, 1, 2, 2, 4, 1, 1 ];
var data2 = [2, 1, 2, 2, 2, 8, 1, 1 ];
var data3 = [3, 3, 3, 3, 2, 4, 1, 1 ];
var data4 = data1.concat(data2);
var data5 = data4.concat(data3);
var nilai ;
var count = {};
for(var i=0;i<=data5.length;i++){
    nilai = data5[i];
    count[nilai] = count[nilai] ? count[nilai] + 1 : 1;
}
var hasil = (`total data paling banyak keluar adalah `+ 1 +` `+ `dengan jumlah`+` `+ count[1])
console.log(hasil)


