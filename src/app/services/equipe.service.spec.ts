import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {EquipeService} from './Equipe.service';
import {Equipe} from '../models/Equipe';
import {Niveau} from '../models/Niveau';
import {DetailEquipe} from "../models/DetailEquipe";

describe('EquipeService', () => {
  let equipeService: EquipeService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EquipeService],
    });

    equipeService = TestBed.inject(EquipeService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(equipeService).toBeTruthy();
  });

  it('should return a list of Equipes when calling getEquipes', () => {
    const mockEquipes: Equipe[] = [
      { idEquipe: 1, nomEquipe: 'Equipe 1', niveau: Niveau.EXPERT, etudiants: [], detailEquipe: new DetailEquipe() },
      { idEquipe: 2, nomEquipe: 'Equipe 2', niveau: Niveau.EXPERT, etudiants: [], detailEquipe: new DetailEquipe() },
    ];

    equipeService.getEquipes().subscribe((equipes) => {
      expect(equipes).toEqual(mockEquipes);
    });

    const req = httpTestingController.expectOne(`${equipeService['baseUrl']}/retrieve-all-equipes`);
    expect(req.request.method).toBe('GET');
    req.flush(mockEquipes);
  });

  it('should return a single Equipe when calling getEquipe', () => {
    const mockEquipe: Equipe = { idEquipe: 1, nomEquipe: 'Equipe 1', niveau: Niveau.EXPERT, etudiants: [], detailEquipe: new DetailEquipe() };
    const equipeId = 1;

    equipeService.getEquipe(equipeId).subscribe((equipe) => {
      expect(equipe).toEqual(mockEquipe);
    });

    const req = httpTestingController.expectOne(`${equipeService['baseUrl']}/retrieve-equipe/${equipeId}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockEquipe);
  });


  it('should add a new Equipe when calling addEquipe', () => {
    const newEquipe: Equipe = { idEquipe: 3, nomEquipe: 'New Equipe', niveau: Niveau.EXPERT, etudiants: [], detailEquipe: new DetailEquipe() };

    equipeService.addEquipe(newEquipe).subscribe((equipe) => {
      expect(equipe).toEqual(newEquipe);
    });

    const req = httpTestingController.expectOne(`${equipeService['baseUrl']}/add-equipe`);
    expect(req.request.method).toBe('POST');
    req.flush(newEquipe);
  });

  it('should update an Equipe when calling updateEquipe', () => {
    const updatedEquipe: Equipe = { idEquipe: 1, nomEquipe: 'Updated Equipe', niveau: Niveau.EXPERT, etudiants: [], detailEquipe: new DetailEquipe() };

    equipeService.updateEquipe(updatedEquipe).subscribe((equipe) => {
      expect(equipe).toEqual(updatedEquipe);
    });

    const req = httpTestingController.expectOne(`${equipeService['baseUrl']}/update-equipe`);
    expect(req.request.method).toBe('PUT');
    req.flush(updatedEquipe);
  });


});
