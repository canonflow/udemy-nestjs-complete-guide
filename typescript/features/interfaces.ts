interface Vehicle {
    name: string;
    year: number;
    broken: boolean;
}

const oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true
};

const printVehicle = (vehicle: Vehicle): void => {
    console.log(`Name: ${vehicle.name}\nYear: ${vehicle.year}\nBroken? ${vehicle.broken}`)
}

printVehicle(oldCivic);