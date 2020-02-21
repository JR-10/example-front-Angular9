import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service.ts.service';
import { IUsuarios } from 'src/app/models/usuarios.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  usuarioDataResponse: IUsuarios[]; // variable para guardar la respuesta del servicio

  constructor(
    private usuariosService: UsuariosService, // llamado al Usuario service
  ) { }

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(){
    this.usuariosService.getAllUsuarios().subscribe((res) => {
      this.usuarioDataResponse = res.body;
      console.log('USUARIOS', this.usuarioDataResponse);
    });
  }

}
