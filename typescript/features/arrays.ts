const carMarkers: string[] = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const twoDString: string[][] = []
const carsByMake = [
    ['f150'],
    ['corolla'],
    ['camaro'],
]

// Help with inference when extracting values
const car = carMarkers[0];
const myCar = carMarkers.pop();

// Prevent incompatible values
// @ts-ignore
// carMarkers.push(10);

// Help with 'map'
carMarkers.map((car: string): string => {
    return car.toUpperCase();
});

// Flexible types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2030-10-10');
importantDates.push(new Date());


