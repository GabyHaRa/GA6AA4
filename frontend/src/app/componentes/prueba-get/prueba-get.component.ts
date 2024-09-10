import { Component, OnInit } from '@angular/core';
import {UserServiceService, UserServiceService} from '../../servicios/user-service.service'


@Component({
  selector: 'app-prueba-get',
  standalone: true,
  imports: [],
  templateUrl: './prueba-get.component.html',
  styleUrl: './prueba-get.component.css'
})

export class PruebaGetComponent implements OnInit{
  constructor( private userService: UserServiceService){}
  ngOnInit(): void {
    this.userService.ConsultarClientes().subscribe(datos => {
      console.log(datos);
    });
  }
}
