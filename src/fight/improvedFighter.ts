import {Fighter, FighterInterface} from './fighter';

export interface ImprovedFighterInterface extends FighterInterface {
    doubleHit: (enemy: FighterInterface, point: number) => void;
}

export class ImprovedFighter extends Fighter implements ImprovedFighterInterface{
    doubleHit(enemy: FighterInterface, point: number) {
        super.hit(enemy, point * 2);
    }
}