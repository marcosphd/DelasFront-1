import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogin } from '../model/UserLogin';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private  http: HttpClient
  ) { }

  entrar(userLogin: UserLogin): Observable<UserLogin>{
    return this.http.post<UserLogin>('https://delasbackend.herokuapp.com/usuarios/logar', userLogin)
  }

  cadastrar(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>('https://delasbackend.herokuapp.com/usuarios/cadastrar', usuario)
    
  }

  getByIdUser(id: number): Observable<Usuario>{
    return this.http.get<Usuario>(`https://delasbackend.herokuapp.com/usuarios/${id}`)
  }
  
}
