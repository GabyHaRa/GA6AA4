import { Component } from '@angular/core';

Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})

interface usuarioInterfaz {
  nombre: string;
  apellido: string;
  identificación: number;
  correoElectrónico: string;
  IsLoggedIn: boolean;
}

/*export class UsuarioComponent {
  usuarios : usuarioInterfaz[] = [
    {
      nombre : 'Pepito' ,
      apellido : 'Perez',
      identificación : 222,
      correoElectrónico : 'pepito@perez',
      IsLoggedIn : true
    },
    {
      nombre : 'Pepa',
      apellido: 'Pedraza',
      identificación : 111,
      correoElectrónico : 'pepita@pedraza',
      IsLoggedIn : true
    }
  ];

  greet(){
    alert("Hola");
  }
}*/
