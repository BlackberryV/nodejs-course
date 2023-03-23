import {Petition} from "../models/Petition";
import {Signature} from "../models/Signature";

export class PetitionsService {
    getPetitions(): Petition[] {
        return this.petitions;
    }

    private petitions: Petition[];


    addPetition(newPetition: Petition): void {
        this.petitions.push(newPetition);
    }

    deletePetition(idNumber: number): void {
        this.petitions = this.petitions.filter(function (p) {
            return p.getId !== idNumber
        });

    }
    vote (id:number,signature: Signature):void{
        const petition = this.petitions.find(function (p) {
            return p.getId == id});
        if(petition){
            petition.addSignature(signature);
        }else {
            console.log('petition not found')
        }
    }

    constructor() {
        this.petitions = [];
        this.petitions.push(new Petition(
            'Заборона проводити 6 пар в один день ',
            'Прохання заборонити пари',
            12));

        this.petitions.push(new Petition(
            'Заборона очного навчання',
            'ЗА ДИСТАНЦІЙКУ!',

            232));

    }


}