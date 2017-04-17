import { Component } from '@angular/core';

@Component({
    selector: 'testhome',
    template: '{{name}}'
    // templateUrl: 'home.component.html'
    //x templateUrl: './assets/home/home.component.html'
})
export class TesthomeComponent { name = 'Test Home Page'; }
