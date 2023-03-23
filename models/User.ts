export class User {
  private name: string;
  private email: string;


  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;

  }

  get getName(): string {
    return this.name;
  }

  get getEmail(): string {
    return this.email;
  }


}
