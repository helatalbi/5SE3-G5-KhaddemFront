export enum Option {
    GAMIX = 'GAMIX',
    SE = 'SE',
    SAE = 'SAE',
    INFINI = 'INFINI'
  }
  
  export class Etudiant {
    idEtudiant!: number;
    prenomE!: string;
    nomE!: string;
    op!: Option;
  
  }
  