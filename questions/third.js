function areaOfTriangle(a,b,c) {
  let S = (a+b+c)/2;
  let Area = Math.sqrt(S*(S-a)*(S-b)*(S-c));
  return Area.toFixed(2);
}
console.log(areaOfTriangle(100,150,200));