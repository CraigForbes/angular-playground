import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      country: new FormControl(''),
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  });

  profileFormfb = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });

  addAlias() {
    //this.profileFormfb.aliases.push(this.fb.control(''));
  }

  // this.loginForm = this._formBuilder.group({
  //   email   : ['', [Validators.required, Validators.email]],
  //   password: ['', Validators.required]
  // });

  name = new FormControl('');

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  updateName() {
    this.name.setValue('Nancy');
  }

  // setValue() patchValue()
  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }

  updateProfilefb() {
    this.profileFormfb.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

  onSubmitfb() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileFormfb.value);
  }

}
