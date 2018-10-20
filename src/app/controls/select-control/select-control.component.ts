import { Component, OnInit, Input } from '@angular/core';
import { FormControlName, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-select-control',
  templateUrl: './select-control.component.html',
  styleUrls: ['./select-control.component.css']
})
export class SelectControlComponent implements OnInit {
  @Input() items: object[];
  @Input() placeholder: string;
  @Input() formGroup: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
