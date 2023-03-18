import { Signature } from "./Signature";

class Petition {
  private title: string;
  private description: string;
  private signatures: Signature[];
  private requiredAnountOfSignatures: number;

  constructor(
    title: string,
    description: string,
    signatures: Signature[] = [],
    requiredAnountOfSignatures: number
  ) {
    this.title = title;
    this.description = description;
    this.signatures = signatures;
    this.requiredAnountOfSignatures = requiredAnountOfSignatures;
  }

  get getTitle(): string {
    return this.title;
  }

  get getDescription(): string {
    return this.description;
  }

  get getSignatures(): Signature[] {
    return this.signatures;
  }

  get getRequiredAnountOfSignatures(): number {
    return this.requiredAnountOfSignatures;
  }

  addSignature(signature: Signature): void {
    this.signatures.push(signature);
  }
}
