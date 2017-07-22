import { Fighter, FighterInterface } from './fighter';
import { ImprovedFighter, ImprovedFighterInterface } from './improvedFighter';

interface FightInterface {
    fighter: FighterInterface;
    improvedFighter: ImprovedFighterInterface;
    startFight: () => void;
}

export class Fight implements FightInterface {
    fighter: FighterInterface;
    improvedFighter: ImprovedFighterInterface;
    private points: number[];
    constructor() {
        this.fighter = new Fighter('Apophis', 21, 4000);
        this.improvedFighter = new ImprovedFighter('Teal\'c', 13, 4500);
        this.points = this.generatePoints();        
    }

    // created and used to completely randomize scenarios
    protected generatePoints() {
        const pointsArr: number[] = [];
        for (let i = 0; i < 10; i++) {
            const randomNumber: number = Math.random();
            pointsArr.push(Math.floor(randomNumber * 20));
        }
        return pointsArr;
    }

    startFight() {
        this.fight(this.fighter, this.improvedFighter, this.points);
    }

    private fight(fighter: FighterInterface, improvedFighter: ImprovedFighterInterface, points: number[]) {
        let winner: FighterInterface;
        while (true) {
            const randomPointNumber: number = Math.floor(Math.random() * points.length);
            fighter.hit(improvedFighter, points[randomPointNumber]);

            if (improvedFighter.health <= 0) {
                winner = fighter;
                break;
            }

            // 50% chance to doublehit - improved fighter indeed!
            if (Math.random() >= 0.5) {
                improvedFighter.hit(fighter, points[randomPointNumber]);
            } else {
                improvedFighter.doubleHit(fighter, points[randomPointNumber]);
            }

            if (fighter.health <= 0) {
                winner = improvedFighter;
                break;
            }
        }
        document.body.innerHTML += `And the winner is ${winner.name}. In the bloodiest battle of all times he defeated his mighty opponent! Congratulations to him!`
    }
}