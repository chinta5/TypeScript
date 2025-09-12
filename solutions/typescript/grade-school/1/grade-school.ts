export class GradeSchool {
  private roaster: Map<number, Set<string>> = new Map();

  add(name: string, grade: number): void {
    const stud = name.trim();
    if (!stud) throw new Error('Invalid');

    // Remove student from any existing grade (ensures uniqueness)
    for (const students of this.roaster.values()) {
      students.delete(stud);
    }

    // Add to new grade
    if (!this.roaster.has(grade)) {
      this.roaster.set(grade, new Set());
    }
    this.roaster.get(grade)!.add(stud);
  }

  grade(grad: number): string[] {
    const stude = this.roaster.get(grad);
    if (!stude) return [];
    return Array.from(stude).sort();
  }

  roster(): { [key: number]: string[] } {
    const obj: { [key: number]: string[] } = {};
    const sortgr = Array.from(this.roaster.keys()).sort((a, b) => a - b);

    for (const x of sortgr) {
      obj[x] = this.grade(x);
    }

    return obj;
  }
}
