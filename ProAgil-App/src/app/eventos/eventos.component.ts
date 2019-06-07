import { Component, OnInit, TemplateRef } from '@angular/core';
import { EventoService } from '../_services/evento.service';
import { Evento } from '../_models/Evento';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

    eventos: Evento[];
    imagemLargura = 50;
    imagemMargem = 2;
    mostrarImagem = false;
    _filtroLista = '';
    eventosFiltrados: Evento[];
    modalRef: BsModalRef;

    get filtroLista(): string{
      return this._filtroLista;
    }

    set filtroLista(value: string){
      this._filtroLista = value;
      this.eventosFiltrados = this.filtroLista ? this.filtrarEventos(this.filtroLista) : this.eventos;
    }

    openModal(template: TemplateRef<any>){
      this.modalRef = this.modalService.show(template);
    }

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

  constructor(
    private eventoService: EventoService
    , private modalService: BsModalService
  ) { }

  ngOnInit() {
    this.getEventos();
  }

  filtrarEventos(filtrarPor: string): Evento[]  {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.eventos.filter(
      evento => evento.tema.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    );
  }

  alternarImagem() {
    this.mostrarImagem = !this.mostrarImagem;
  }

  getEventos() {
    this.eventoService.getEvento().subscribe(
      (_eventos: Evento[]) => {
        console.log(_eventos);
        this.eventos = _eventos;
        this.eventosFiltrados = this.eventos;
      },
      error => {
        console.log(error);
      }
    );
  }

}
