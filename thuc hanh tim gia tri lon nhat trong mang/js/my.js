let array = [1,3,5,6,8,14,36,7];
let max = array[0];
for(let i=1;i<array.length;i++){
    if(array[i]>max){
        max=array[i];
    }
}
document.write('gia tri lon nhat trong mang la: '+max);