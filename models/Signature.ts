import { User } from "./User";

export class Signature extends User {
  private passportId: string;

  constructor(name: string, email: string, passportId: string) {
    super(name, email);
    this.passportId = passportId;
  }

  get getPassportId(): string {
    return this.passportId;
  }
}
