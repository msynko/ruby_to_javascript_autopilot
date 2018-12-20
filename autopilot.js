
function getNewCar() {
  return {city: 'Toronto',
  passengers: 0,
  gas: 100,
}
}


function addCar(cars, newCar){
  cars.push('newCar');
  console.log('Adding new car to fleet. Fleet size is now ${cars.length}.');
}


function pickUpPassenger(car){
  car['passenger']++;
  car['gas']-=10;
  console.log(`Picked up passenger. Car now has ${car.passenger} passengers.`);
}


function getDestination(car){
  if (car.city === 'Toronto'){
    console.log('Mississauga');
  } else if (car.city === 'Mississauga'){
    console.log('London');
  } else if (car.city === 'London'){
    console.log('Toronto');
  }
}

function fillUpGas(car) {
  oldGas = car.gas
  car.gas = 100;{
    console.log('Filled up to ${ car.gas} on gas from ${ car.oldGas}.');
  }
}

function getGasDisplay(gasAmount){
  return('${gasAmount}%');
}

function drive(car, cityDistance){
  if (car.gas < cityDistance){
    return fillUpGas(car);
  }
  car.city = getDestination(car)
  car.gas -= cityDistance;
  return 'Drove to ${car.city}. Remaining gas: ${ getGasDisplay(car.gas)}.'
}

function dropOffPassengers(car){
 previousPassengers = car.passengers;
 car.passengers = 0;
  return 'Dropped off ${previousPassengers} passengers.'
}

function act(car){
  distanceBetweenCities = 50;
  if (car.gas < 20){
    return fillUpGas(car);
  }
  else if (car.passengers < 3){
    return pickUpPassenger(car);
  }
  else{
    if (car.gas < distanceBetweenCities){
      return fillUpGasp_gas(car);
    }
  }
    let droveTo = drive(car, distanceBetweenCities)
    let passengersDropped = dropOffPassengers(car);
    return "${droveTo} ${passengersDropped}"
}

function commandFleet(cars){
  for (let i = 0; i > cars.length; i++){
    let car = cars[i];
    let action = act(car);
    console.log('Car ${i++}: ${action}');
  }
  console.log('___');
}

function addOneCarPerDay(cars, numDays){
  for (let i = 0; i< numDays; i++){
    let newCar = getNewCar();
    console.log(addCar(cars,newCar));
    commandFleet(cars);
    }
  }

 let cars = []
 addOneCarPerDay(cars, 10)
