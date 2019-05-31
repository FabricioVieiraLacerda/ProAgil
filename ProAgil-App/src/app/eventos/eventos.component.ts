import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  eventos: any;
    /* para testes
    = [
      {
        EventoId: 1,
        Tema: 'Angular',
        Local: 'Porto Alegre'
      },
      {
        EventoId: 2,
        Tema: '.Net Core',
        Local: 'São Paulo'
      },
      {
        EventoId: 3,
        Tema: 'Angular & .Net Core',
        Local: 'New York'
      }
    ];
    */

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getEventos();
  }

  getEventos() {
    this.http.get('http://localhost:5000/api/values').subscribe(
      response => {
        console.log(response);
        this.eventos = response;
      },
      error => {
        console.log(error);
      }
    );
  }

}
