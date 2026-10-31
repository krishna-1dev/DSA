function circle(radius) {
  let circumference = 2*Math.PI*radius;
  let area = Math.PI*radius*radius;
  return[
    Number(circumference.toFixed(2)),
    Number(area.toFixed(2))
  ];
};
console.log(circle(5));