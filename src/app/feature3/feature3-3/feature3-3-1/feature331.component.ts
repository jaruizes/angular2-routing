import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'feature331',
  templateUrl: './feature331.component.html'
})
export class Feature331Component implements OnInit {

  id:number;

  ngOnInit() {
    console.log('init!!!');
  }

  constructor(_route: ActivatedRoute) {
    _route.params.subscribe(params=> {
      this.id = params["id"];
    });
    console.log('constructor!!!');
  }
}

