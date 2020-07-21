import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-pure-inbox-screen',
    template: `
    <div *ngIf="error" class="page lists-show">
      <div class="wrapper-message">
        <span class="icon-face-sad"></span>
        <div class="title-message">Oh no!</div>
        <div class="subtitle-message">Something went wrong</div>
      </div>
    </div>

    <div *ngIf="!error" class="page lists-show">
      <nav>
        <h1 class="title-page">
          <span class="title-wrapper">{{title}}</span>
        </h1>
      </nav>
      <app-task-list [task]="task"></app-task-list>
    </div>
  `,
})
export class PureInboxScreenComponent implements OnInit {

    @Input() title: any;
    @Input() task: any;
    @Input() error: any;

    constructor() { }

    ngOnInit() { }
}