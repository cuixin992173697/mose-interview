function permute( num ) {
   
  let path = [];
  let res = [];
  let used = [];
   
  function traceTrack(){
    //path已经达到num长度时
    if(path.length == num.length){
      res.push([...path]);
      return;
    }
    for(let i=0; i<num.length; i++){
      if(i!=0 && num[i]==num[i-1] && !used[i-1])
        continue;
       
      if(!used[i]){
        path.push(num[i]);
        used[i] = true;
        traceTrack();
        used[i] = false;
        path.pop();
      }
    }
  }
   
  traceTrack();
  return res;
}