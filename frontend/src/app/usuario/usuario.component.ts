import { Component } from '@angular/core';

Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})

interface Usuario {
  nombre: string;
  apellido: string;
  identificación: number;
  correoElectrónico: string;
}

export class UsuarioComponent {
  usuario : Usuario[] = [
    {
      nombre : 'Pepito' ,
      apellido : 'Perez',
      identificación : 222,
      correoElectrónico : 'pepito@perez'
    },
    {
      nombre : 'Pepa',
      apellido: 'Pedraza',
      identificación : 111,
      correoElectrónico : 'pepito@perez'
    }
  ];
}
