function calculateCI(p,r,t,n) {
  let A = p*Math.pow((1+r/(100*n)),n*t);
  let CI = A - p;
  return CI;
};
let result = calculateCI(10000,5,2,4);
console.log("Compound Interest:", result.toFixed(2));
