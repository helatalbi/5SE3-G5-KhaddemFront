import { Etudiant } from './Etudiant';
import { DetailEquipe } from './DetailEquipe';
import { Niveau } from './Niveau';
export class Equipe {
  idEquipe!: number;
  nomEquipe!: string;
  niveau!: Niveau;
  etudiants!: Etudiant[];
  detailEquipe!: DetailEquipe;
}
