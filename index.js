// Code your solution here
function findMatching(drivers,name ="Bobby"){
    const result = drivers.filter(names => names === name || names === name.toLowerCase() )
    return result; 
}
const fuzzyMatch = (drivers,name) =>  drivers.filter(names => names.substr(0,name.length) === name)

function matchName(drivers,name){
    return drivers.filter(drivers => drivers.name == name);
}

