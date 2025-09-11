export class Robot {
  private static usedNames = new Set<string>();
  private _name: string | null = null;

  public get name(): string {
    if (this._name === null) {
      this._name = Robot.generateUniqueName();
    }
    return this._name;
  }

  public resetName(): void {
    this._name = Robot.generateUniqueName();
  }

  public static releaseNames(): void {
    Robot.usedNames.clear();
  }

  private static generateUniqueName(): string {
    let name: string;
    do {
      name = Robot.randomName();
    } while (Robot.usedNames.has(name));
    Robot.usedNames.add(name);
    return name;
  }

  private static randomName(): string {
    const letters = () =>
      String.fromCharCode(65 + Math.floor(Math.random() * 26));
    const digits = () =>
      Math.floor(Math.random() * 10).toString();
    return `${letters()}${letters()}${digits()}${digits()}${digits()}`;
  }
}
