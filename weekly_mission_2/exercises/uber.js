// Uber example

const profile = {
    firstName: "Jane",
    lastName: "Doe",
    rating: 4.5,
    lastTrip: new Date(2022, 2, 28, 08, 13, 30, 0),
    totalTrips: 12
}

const travel = {
    requestTime: new Date(2022, 2, 28, 07, 50, 00, 0),
    from: "55.918892665046506, -3.1614004390235015",
    to: "55.95099522938188, -3.3609704046316886",
    driver: "Piotr M",
    pickupTime: new Date(2022, 2, 28, 08, 13, 30, 0),
    estimatedArrivalTime: new Date(2022, 2, 28, 08, 30, 00, 0),
}
console.log(travel.pickupTime)