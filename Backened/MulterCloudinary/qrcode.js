import qrcode from 'qrcode';

const data = {
    name : "raj",
    branch: 'IT'
}
const stjson = JSON.stringify(data);

//to dataURL
// qrcode.toDataURL('stjson', function (err, url) {
//   console.log(url)
// })


//in terminal
// qrcode.toString(stjson,{type:"terminal"}, function (err, url) {
//   console.log(url)
// })


//to file
// qrcode.toFile('./public/qrcode/qrcode.png', stjson, function(err){
//     if(err){
//         console.log(err);
//     }
//     else console.log("QR Code generated successfully");
// })

//witch async await
const generateQR = async (file) => {
    try {
      await qrcode.toFile('./public/qrcode/qeee.png', file);
      console.log("QR Code generated successfully");
    } catch (err) {
      console.error(err)
    }
}
generateQR("https://www.youtube.com/results?search_query=chai+aur+code+backend");