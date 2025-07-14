import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginFormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  submitData() {
    if (this.loginFormGroup.valid) {
      const username = this.loginFormGroup.get('username')?.value;
      const password = this.loginFormGroup.get('password')?.value;
      console.log('Username:', username);
      console.log('Password:', password);
      alert('Login successful!');
    } else {
      alert('Please fill in all fields.');
    }
  }

  registerAsTeacher() {
    alert('Redirecting to Teacher Registration...');
    // this.router.navigate(['register-teacher']);
  }

  registerAsStudent() {
    alert('Redirecting to Student Registration...');
    // this.router.navigate(['register-student']);
  }
}

