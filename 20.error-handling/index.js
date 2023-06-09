import Car from './classes/car.js'

const carList = [];
const carHonda = new Car('Honda', 'red', 'sedan', 2000);
const carAvanza = new Car('Toyota', 'red', 'MVP', 1500);
const carXenia = new Car('Daihatsu', 'red', 'sedan', 1050);

carList.push(carHonda,carAvanza,carXenia);
console.log(carList);

function findTypeCarByBrand(brand) {
    try {
        const foundedCar = carList.find(function(car) {
            return car.brand === brand;
        })
    
        return foundedCar.type;
    } catch (err) {
        if(err.name === 'TypeError'){
            return 'brand not found';
        }
    }

}
console.log('=============find car=============')
console.log(findTypeCarByBrand('Hondaa'))
console.log('harusnya tereksekusi')