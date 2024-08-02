// login.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {

    constructor(private router: Router) {}

    handleLogin(event: Event): void {
        event.preventDefault(); 

        const usuario = (event.target as HTMLFormElement).elements.namedItem('usuario') as HTMLInputElement;
        const senha = (event.target as HTMLFormElement).elements.namedItem('senha') as HTMLInputElement;

        // Validação simples
        if (usuario.value === 'admin' && senha.value === 'admin') {
            alert('Login bem-sucedido!');
            this.router.navigate(['/inicio']); 
        } else {
            alert('Usuário ou senha inválidos');
            usuario.value = '';
            senha.value = '';
        }
    }
}
