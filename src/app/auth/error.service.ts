import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() { }

  handleError(error: HttpErrorResponse) {
    if(!error.error || !error.error.error) {
      return throwError('UNKNOWN')
    } else {
      return throwError(this.errorMessages)
    }
  }


  errorMessages = {
    UNKNOWN: 'An unknown error occured!',
    EMAIL_EXISTS : 'The email address is already in use by another account.',
    OPERATION_NOT_ALLOWED : 'Password sign-in is disabled for this project.',
    TOO_MANY_ATTEMPTS_TRY_LATER:' We have blocked all requests from this device due to unusual activity. Try again later.',
    EMAIL_NOT_FOUND:' There is no user record corresponding to this identifier. The user may have been deleted.',
    INVALID_PASSWORD:' The password is invalid or the user does not have a password.',
    USER_DISABLED: 'The user account has been disabled by an administrator.',
    INVALID_IDP_RESPONSE: 'The supplied auth credential is malformed or has expired.'
  }
}
