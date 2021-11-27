import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@modules/auth/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  errorSession: boolean = false
  formLogin: FormGroup = new FormGroup({});

  constructor(
    private _authService: AuthService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formLogin = new FormGroup(
      {
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]),
      },
    );
  }

  sendLogin() {
    const { email, password } = this.formLogin.value;
    this._authService.sendCredentials(email, password).subscribe(
      (data) => {
        console.log("Correcto",data);
        
      },
      (err) => {
        this.errorSession = true;
        console.log(err);
        
      }
    )
  }

}
