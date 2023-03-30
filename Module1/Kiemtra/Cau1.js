let temp;
let point = [4,5,6,8,11,12,10];
for (let i = 0; i < point.length; i++) {
    for(let j = i+1; j < point.length; j++) {
        if (point[i] > point[j]) {
            temp = point[i];
            point[i] = point[j];
            point[j] = temp;
        }
    }
}
document.getElementById("result").innerHTML = " kết quả là :"  +point[point.length-3]