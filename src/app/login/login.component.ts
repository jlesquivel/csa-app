import { Component, AfterViewChecked } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';
import { toast } from 'angular2-materialize';


declare var $: any;
declare var Materialize: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthenticationService]
})
export class LoginComponent implements AfterViewChecked {
  public token: any;
  public form: FormGroup;

  // modelo local
  public usuario = { email: '', password: '' };

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    // console.log('constructor LoginComponent');
    this.crearControles();
  }

  ngAfterViewChecked() {
    // Materialize.updateTextFields();
  }
  crearControles() {
    // fomulario
    this.form = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }

  login() {
    if (localStorage.getItem('currentUser')) {
          this.router.navigate(['/comunicados']).then(() => {});
    } else {
      this.authenticationService
        .login(this.usuario.email, this.usuario.password)
        .subscribe(
          (response) => {

            if (localStorage.getItem('currentUser')) {
              this.token = localStorage.getItem('currentUser');
              this.router.navigate(['/comunicados']).then(() => {});
            }

            let user : any = response;
            // console.log(user.success);

            if (user.success) {
              localStorage.setItem('currentUser', JSON.stringify(user));
            } else {
              toast(user['message'], 5000, 'rounded', 'top');
              localStorage.removeItem('currentUser');
            }
            // this.router.navigate([this.returnUrl]);
          },
          error => {
             console.log(error);
            //toast(error.json().estado, 15000, 'rounded');
          },

        );
    }
  }
}

