const Potion = require('./Potion');

function Enemy(name, weapon) {
  this.name = name;
  this.weapon = weapon;
  this.potion = new Potion();

  this.health = Math.floor(Math.random() * 10 + 85);
  this.strength = Math.floor(Math.random() * 5 + 5);
  this.agility = Math.floor(Math.random() * 5 + 5);
}

Enemy.prototype.getHealth = function() {
    return `${this.name}'s health is now ${this.health}!`;
}

Enemy.prototype.isAlive = function() {
    return this.health > 0;
}

Enemy.prototype.reduceHealth = function(health) {
    if (health > this.health) {
        this.health = 0;
    } else {
        this.health -= health;
    }
}

Enemy.prototype.getAttackValue = function() {
    const min = this.strength - 5;
    const max = this.strength + 5;

    return Math.floor(Math.random() * (max - min) + min);
}

Enemy.prototype.getDescription = function() {
    return `A ${this.name} holding a ${this.weapon} has appeared!`;
};

module.exports = Enemy;