var data="dog";
var newdata=[];
for(i=0;i<data.length;i++){
  for(j=i+1;j<data.length+1;j++){
    var pushit=newdata.push(data.slice(i,j))

  }
}
console.log(newdata);
console.log(data.slice(0,1));
console.log("new line added");
console.log("Number 2 commit");
console.log("Number 3 commit");
console.log("Number 4 commit");
console.log("New branch");
