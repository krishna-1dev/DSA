function vote(name, age) {
  if(age>=18) {
    return `${name} is a valid voter`;
  } else {
    return `${name} is not a valid voter`;
  };
};
console.log(vote("krishna",19));

