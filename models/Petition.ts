import {Signature} from "./Signature";

export class Petition {

    private title: string;
    private description: string;
    private signatures: Signature[];
    private requiredAmountOfSignatures: number;

    private id: number;
    private static idGenerator=0;

    constructor(

        title: string,
        description: string,
        requiredAmountOfSignatures: number
    ) {

        this.id = Petition.idGenerator;
        this.title = title;
        this.description = description;
        this.signatures = [];
        this.requiredAmountOfSignatures = requiredAmountOfSignatures;
        Petition.idGenerator=Petition.idGenerator+1;
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

    get getRequiredAmountOfSignatures(): number {
        return this.requiredAmountOfSignatures;
    }

    get getId(): number {
        return this.id;
    }

    addSignature(signature: Signature): void {
        this.signatures.push(signature);
    }


}
