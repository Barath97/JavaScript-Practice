 const arr= ["BMW","Audi","Tata"];

arr.push("volvo");

for(i=0;i<arr.length;i++){
    console.log(arr[i]);
}

arr.pop();

for(i=0;i<arr.length;i++){
    console.log(arr[i]);
}

console.log(arr.toString());
