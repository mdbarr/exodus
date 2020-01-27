'use strict';

class Person {
  constructor ({
    name, gender, age
  }) {
    this.name = name;
    this.gender = gender;
    this.age = age;

    this.health = 100;
    this.happiness = 100;

    this.occupation = '';

    this.spouse = null;
  }
}

class Ship {
  constructor ({
    name, type
  }) {
    this.name = name;
    this.type = type;

    this.crew = {
      individuals: [],
      capacity: 100
    };

    this.food = {
      value: 100,
      capacity: 100,
      rate: 1
    };

    this.fuel = {
      value: 100,
      capacity: 100
    };

    this.propulsion = {
      max: 100,
      min: 10,
      rate: 1
    };

    this.production = {
      food: {
        rate: 1,
        materials: null
      },
      parts: {
        rate: 1,
        materials: 'ore'
      }
    };
  }
}

module.exports = {
  Person,
  Ship
};
