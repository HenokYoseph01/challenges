function insertion(n, arr){
  const last = arr[n-1];
  for(let i=n-2; i>=0; i--){
    if(last>arr[i]){
        arr[i+1] = last
        console.log(...arr)
        break;
    }
    arr[i+1] = arr[i]
    console.log(...arr);
  }
}
