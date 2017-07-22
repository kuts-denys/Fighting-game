
export interface FighterInterface {
    health: number;
    power: number;
    name: string;
    setDamage: (damage: number) => void;
    hit: (enemy: FighterInterface, point: number) => void;
}

export class Fighter implements FighterInterface {
    health: number;
    power: number;
    name: string;
    constructor(name: string, power: number = 15, health: number = 5000) {
        this.name = name;
        this.power = power;
        this.health = health;
    }

    setDamage(damage: number) {
        this.health = this.health - damage;
        if (this.health <= 0) {
            document.body.innerHTML += `${this.name}'s health dropped to 0. He is defeated! <br>`;
        } else {
            document.body.innerHTML += `${this.name}'s health: ${this.health} <br>`;
        }
    }

    hit(enemy: FighterInterface, point: number) {
        const damage: number = point * this.power;
        enemy.setDamage(damage);
    }
}



