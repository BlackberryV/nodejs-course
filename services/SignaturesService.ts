
import {Signature} from "../models/Signature";

export class SignaturesService {
    getSignatures(): Signature[] {
        return this.signatures;
    }

    setSignatures(value: Signature[]) {
        this.signatures = value;
    }


    private signatures:Signature[];


    addSignature(newSignature: Signature): void {
        this.signatures.push(newSignature);
    }

    deleteSignature(passportId: string): void {
        this.signatures = this.signatures.filter(function (s) {
            return s.getPassportId !== passportId.toString()});

    }


    constructor() {
        this.signatures = [];
        this.signatures.push(
            new Signature('Ivan',"Ivan223@gmail.com",'345566')
        );
        this.signatures.push(
            new Signature('Ira',"Ira33333@gmail.com",'123454')
        );
    }


}