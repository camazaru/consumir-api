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

  form: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router
    ) {
      this.form= new FormGroup({
        usuario: new FormControl(),
        password: new FormControl()
     })
    }

  ngOnInit(): void {
  }

  onRegister() {
    this.userService.register(this.form.value)
    .then(response => {
      console.log(response);
      this.router.navigate(['/login'])
    })
    .catch(error => console.log(error))
  }

}
