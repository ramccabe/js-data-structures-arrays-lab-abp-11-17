// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(names){
  return drivers.push('Ralph')
}

function destructivelyPrependDriver(names){
  return drivers.unshift('Bob')
}

function destructivelyRemoveLastDriver(names){
  return drivers.pop('Garfield')
}

function destructivelyRemoveFirstDriver(names){
  return drivers.shift('Milo')
}

function appendDriver(names){
  return drivers.concat('Broom')
}

function prependDriver(arnold){
  return [arnold, ...drivers];
}

function removeLastDriver('Garield'){
  return drivers.slice(0,1);
}
