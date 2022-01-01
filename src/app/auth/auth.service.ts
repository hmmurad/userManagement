import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { catchError } from 'rxjs/operators'
import { ErrorService } from './error.service';

export interface AuthRes {
  idToken:	string,	
email:	string,	
refreshToken: string,	
expiresIn	:string,	
localId	:string	,
registered?: boolean
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiKey: 'AIzaSyDwPvzztnCNcGjFfL3Z-pkbDFHcNFjIngs'

  constructor(private http: HttpClient, private errorService: ErrorService) { }

  signUp(email: string, password: string) {
    this.http.post<AuthRes>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.apiKey}`, {
      email: email,
      password: password,
      returnSecureToken: true
    })
  }
  signIn(email: string, password: string) {
    this.http.post<AuthRes>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.apiKey}`, {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(
      catchError(err => this.errorService.handleError(err))
    )
  }
}
