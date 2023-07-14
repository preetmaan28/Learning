var data="dog";
var newdata=[];
for(i=0;i<data.length;i++){
  for(j=i+1;j<data.length+1;j++){
    var pushit=newdata.push(data.slice(i,j))

  }
}
console.log(newdata);
console.log(data.slice(0,1));