import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LookupService } from '../../services/lookup.service';

@Component({
  selector: 'app-select-form',
  templateUrl: './select-form.component.html',
  styleUrls: ['./select-form.component.css']
})
export class SelectFormComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private lookupService: LookupService) { }

  countries$ = this.lookupService.getCountries();
  heroes$ = this.lookupService.getHeroes();

  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    country: ['', [Validators.required]],
    hero: ['', [Validators.required]]
  });

  ngOnInit() {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

}
