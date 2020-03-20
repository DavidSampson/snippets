function* k_perms(a_, k=a.length){
  const a = a_.slice().sort();
  const edge = k-1;
  const n = a.length;
  
  
  while(true){
    yield a.slice(0, k);
    // find j in (k…n-1) where aj > aedge
    let j = k;
    while(j < n && a[edge] >= a[j])
      j++;
  
    if(j < n)
      swap(a, edge, j);
    else {
      reverse(a, k, n);
      // find rightmost ascent to left of edge
      let i = edge - 1;
      while(i>=0 && a[i] >= a[i+1])
        i--;
      if(i < 0)
        // no more permutations
        return null;

      // find j in (n-1…i+1) where aj > ai
      j = n - 1;
      while(j > i && a[i] >= a[j])
        j--;

      swap(a, i, j);
      reverse(a, i+1, n);
    }
    
  }
  function swap(arr, a, b){
    let tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
  }
  function reverse(arr, from, to){
    let tmp = arr.slice(from, to);
    for(let i = to - 1; i >= from; i--){
      arr[i] = tmp[to - i - 1];
    }
  }
}
