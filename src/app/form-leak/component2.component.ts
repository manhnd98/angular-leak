import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-component-2',
  template: `<div>Current component 2</div>

  `,
  styles: [``]
})
export class Component2Component {
  private form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      control1: [''],
      control2: ['']
    });

    this.form.controls.control1.valueChanges.subscribe({
      next: () => {},
      complete: () => {},
      error: () => {}
    });

    this.form.controls.control2.valueChanges.subscribe({
      next: () => {},
      complete: () => {},
      error: () => {}
    });
  }


  ngOnInit() {
    this.form.controls.control1.setValue('Hello');
    this.form.controls.control2.setValue('Hello');
  }
}
