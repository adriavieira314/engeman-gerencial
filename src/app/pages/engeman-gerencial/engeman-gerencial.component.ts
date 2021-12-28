import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-engeman-gerencial',
  templateUrl: './engeman-gerencial.component.html',
  styleUrls: ['./engeman-gerencial.component.css']
})
export class EngemanGerencialComponent implements OnInit {
  search: string = '';
  dados_os: any[] = [
    {
      "os": '1234',
      "dataInicio": '21/12/2021',
      "horaInicio": '20:32',
      "dataFim": '21/12/2021',
      "horaFim": '20:32',
      "totalHoras": '09:00',
      "funcionarios": 'Adria',
      "matricula": '7997',
      "descricao": 'Construção layout inicial do engeman gerencial',
    },
    {
      "os": '5678',
      "dataInicio": '22/12/2021',
      "horaInicio": '20:32',
      "dataFim": '22/12/2021',
      "horaFim": '20:32',
      "totalHoras": '09:00',
      "funcionarios": 'Levy',
      "matricula": '8181',
      "descricao": 'Construção layout inicial do engeman gerencial',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
