import { Component, OnInit } from '@angular/core';
declare var $ :any;
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

  //Table DATA
  //datatable custom json data
     
  public tabledata = [
    {os: '1478', dataInicio:'2021-12-20', horaInicio: '20:32', dataFim: '2021-12-20', horaFim: '20:32', totalHoras: '09:00', funcionarios: 'Adria', matricula: '1587', descricao: 'Construção layout inicial do engeman gerencial' },
    {os: '4597', dataInicio:'2021-12-17', horaInicio: '20:32', dataFim: '2021-12-17', horaFim: '20:32', totalHoras: '09:00', funcionarios: 'Abel', matricula: '4795', descricao: 'Construção layout inicial do engeman gerencial' },
    {os: '1257', dataInicio:'2021-12-17', horaInicio: '20:32', dataFim: '2021-12-17', horaFim: '20:32', totalHoras: '09:00', funcionarios: 'Carlos', matricula: '1256', descricao: 'Construção layout inicial do engeman gerencial' },
    {os: '0058', dataInicio:'2021-12-17', horaInicio: '20:32', dataFim: '2021-12-17', horaFim: '20:32', totalHoras: '09:00', funcionarios: 'Wendel', matricula: '7412', descricao: 'Construção layout inicial do engeman gerencial' },
    {os: '8965', dataInicio:'2021-12-14', horaInicio: '20:32', dataFim: '2021-12-14', horaFim: '20:32', totalHoras: '09:00', funcionarios: 'Levy', matricula: '0025', descricao: 'Construção layout inicial do engeman gerencial' },
    {os: '1596', dataInicio:'2021-12-13', horaInicio: '20:32', dataFim: '2021-12-13', horaFim: '20:32', totalHoras: '09:00', funcionarios: 'Roberto', matricula: '3698', descricao: 'Construção layout inicial do engeman gerencial' },
    {os: '5796', dataInicio:'2021-12-13', horaInicio: '20:32', dataFim: '2021-12-13', horaFim: '20:32', totalHoras: '09:00', funcionarios: 'Yngra', matricula: '1587', descricao: 'Construção layout inicial do engeman gerencial' },
    {os: '2546', dataInicio:'2021-12-11', horaInicio: '20:32', dataFim: '2021-12-11', horaFim: '20:32', totalHoras: '09:00', funcionarios: 'Matheus', matricula: '2365', descricao: 'Construção layout inicial do engeman gerencial' },
    {os: '3214', dataInicio:'2021-12-09', horaInicio: '20:32', dataFim: '2021-12-09', horaFim: '20:32', totalHoras: '09:00', funcionarios: 'Sofia', matricula: '9682', descricao: 'Construção layout inicial do engeman gerencial' },
    {os: '8962', dataInicio:'2021-12-01', horaInicio: '20:32', dataFim: '2021-12-01', horaFim: '20:32', totalHoras: '09:00', funcionarios: 'Bruna', matricula: '4736', descricao: 'Construção layout inicial do engeman gerencial' },
  ];

  dtOptions: DataTables.Settings = {};
  ngOnInit() {
    this.dtOptions = {
      language: {
        searchPlaceholder: 'Filtrar',
        search: 'Filtrar por OS, Funcionários ou Matrícula'
      }
    };
    //datepicker on change
    $('.dateadded').on( 'change', function (ret :any) {

      var v = ret.target.value  // getting search input value
      
      $('#dataTables-example').DataTable().columns(3).search(v).draw();
    });
  }

}
