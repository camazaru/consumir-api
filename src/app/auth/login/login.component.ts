import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,  } from '@angular/forms';
import { UserService } from '../../estudiantes/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router
    ) {
      this.formLogin= new FormGroup({
        usuario: new FormControl(),
        password: new FormControl()
     })
    }

  ngOnInit(): void {
  }

  onSubmit() {

  
    this.userService.login(this.formLogin.value)
    
      .then(response => {
        console.log(response);
        this.router.navigate(['/inicio']);
      })
      .catch(() => this.router.navigate(['/registro']));
      
  }

  onClick() {
    this.userService.loginWithGoogle()
      .then(response => {
        console.log(response);
        this.router.navigate(['/inicio']);
      })
      .catch(error => console.log(error)
      )
      
  }

}
