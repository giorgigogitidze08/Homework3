//1

function myfunction(a, b, ...others) {
    let multiple = 1;
    for (i of others) {
        multiple *=i;
    }
    return [a + b, multiple];
}

console.log(myfunction(3,4,5,6,7));

//2

const user={
    name: 'Giorgi'
}

const{adress:{city} = {city:'Tbilisi'}}=user;
console.log(city);


//3 

const newUser = {
    name: "giorgi",
    address: {
        city: 'Tbilisi'
    }
} 

const newUser2={...newUser};
newUser2.address.city="batumi";

console.log(newUser.name, newUser2.address.city);