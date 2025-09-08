export class DnDCharacter {
  public strength: number;
  public dexterity: number;
  public constitution: number;
  public intelligence: number;
  public wisdom: number;
  public charisma: number;
  public hitpoints: number;

  public static generateAbilityScore(): number {
    // Roll 4d6, drop the lowest, sum the rest
    const rolls = Array.from({ length: 4 }, () => Math.floor(Math.random() * 6) + 1);
    const total = rolls.reduce((a, b) => a + b, 0);
    const lowest = Math.min(...rolls);
    return total - lowest; // between 3 and 18 inclusive
  }

  public static getModifierFor(abilityValue: number): number {
    // floor((score - 10) / 2)
    return Math.floor((abilityValue - 10) / 2);
  }

  constructor() {
    this.strength = DnDCharacter.generateAbilityScore();
    this.dexterity = DnDCharacter.generateAbilityScore();
    this.constitution = DnDCharacter.generateAbilityScore();
    this.intelligence = DnDCharacter.generateAbilityScore();
    this.wisdom = DnDCharacter.generateAbilityScore();
    this.charisma = DnDCharacter.generateAbilityScore();

    this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution);
  }
}
