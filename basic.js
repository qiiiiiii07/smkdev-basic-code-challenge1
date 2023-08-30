let tagihan =parseInt(prompt('masukan nilai tagihan :'))  // variable tagihan menggunakan promt agar nilai tagihan bebas dimasukan oleh user
let tip;


if(tagihan > 50 && tagihan < 300){
  tip = tagihan * 0.15 // 15% dari tagihan
} else if( tagihan > 300){
  tip = tagihan * 0.2 //20% dari tagihan
} else{
  alert('tidak ada tagihan') //jika nilai tagihan tidak sesuai dengan kondisi
}

let total = tagihan + tip

console.log (`tagihannya ${tagihan}, tipnya ${tip},total tagihannya ${total}`)


//maaf kak baru belajar 2 minggu an,jadi codenya masi kurang rapi dan kurang efisien :)