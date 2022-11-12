const express = require('express');
const { faker } = require('@faker-js/faker/locale/ru');

const app = express();

const createUser = function(){
    const [userName, userSurname] = faker.name.fullName().split(' ');

    return {
        name: userName,
        surname: userSurname,
        address: "г. " + faker.address.cityName() + ", " + faker.address.streetAddress() + ", " + faker.address.secondaryAddress(),
        vehicle: faker.vehicle.vehicle(),
        phone: faker.phone.number()
    }
}

let users = [];

Array.from({ length: 100 }).forEach(() => {
    users.push(createUser())
})


app.get('/users', (req, res) => {
    res.send(users);
})

app.listen(3000, (suc, err) => {
    console.log('started')
})