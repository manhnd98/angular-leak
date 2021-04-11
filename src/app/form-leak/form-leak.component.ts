import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-leak',
  templateUrl: './form-leak.component.html',
  styleUrls: ['./form-leak.component.scss']
})
export class FormLeakComponent implements OnInit {

  comp: 'component1' | 'component2' = 'component1';

  constructor() { }

  ngOnInit(): void {
  }


  changeComponent(comp: 'component1' | 'component2') {
    this.comp = comp;
  }

}
