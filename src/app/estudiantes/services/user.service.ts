import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private auth: Auth) { }

  register({usuario, password}: any) {
    return createUserWithEmailAndPassword(this.auth, usuario, password);
 }
 login({ email, password }: any) {
  return signInWithEmailAndPassword(this.auth, email, password);
}

loginWithGoogle() {
  return signInWithPopup(this.auth, new GoogleAuthProvider());
}

logout() {
  return signOut(this.auth);
}

}
