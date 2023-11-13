import { Component } from '@angular/core';
import {Equipe} from "../../models/Equipe";
import {EquipeService} from "../../services/equipe.service";

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css']
})
export class EquipeComponent {
  equipes: Equipe[] = [];
  selectedEquipe: Equipe | null = null;
  newEquipe: Equipe = new Equipe();
  showAddForm: boolean = false; // Add this line

  constructor(private equipeService: EquipeService) { }

  ngOnInit(): void {
    this.getEquipes();
  }

  getEquipes(): void {
    this.equipeService.getEquipes()
      .subscribe(Equipes => this.equipes = Equipes);
  }

  onSelect(Equipe: Equipe): void {
    this.selectedEquipe = Equipe;
  }

  addEquipe(): void {
    this.equipeService.addEquipe(this.newEquipe)
      .subscribe(Equipe => {
        this.equipes.push(Equipe);
        this.newEquipe.nomEquipe=""; // Clear the form
      });
  }

  updateEquipe(Equipe: Equipe): void {
    this.equipeService.updateEquipe(Equipe)
      .subscribe(() => {
        // Update the student in the local list if needed

      });
    window.location.reload();
  }

  deleteEquipe(Equipe: Equipe): void {
    this.equipeService.deleteEquipe(Equipe.idEquipe)
      .subscribe(() => {

      });
    window.location.reload();

  }
  toggleAddForm() { // Add this method
    this.showAddForm = !this.showAddForm;
  }
}
