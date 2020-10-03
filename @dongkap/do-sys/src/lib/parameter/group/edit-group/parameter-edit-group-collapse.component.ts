import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

import { Observable, ReplaySubject } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'do-parameter-edit-group-collapse, [do-parameter-edit-group-collapse]',
  styleUrls: ['./parameter-edit-group-collapse.component.scss'],
  templateUrl: './parameter-edit-group-collapse.component.html',
  animations: [
    trigger('openedState', [
      state('collapsed', style(
        {
          opacity: 0,
          overflow: 'hidden',
          height: '0px',
          minHeight: '0',
          padding: '0 0 0 1.25rem',
      })),
      state('expanded', style(
        {
          opacity: 1,
          overflow: 'hidden',
          height: '*',
          padding: '0 1.25rem',
      })),
      transition('collapsed <=> expanded', animate('500ms ease-in-out')),
    ]),
  ],
})
export class ParameterEditGroupCollapseComponent {
  private openedSubject: ReplaySubject<boolean>;
  opened$: Observable<boolean>;
  openedState$: Observable<string>;

  constructor() {
    this.openedSubject = new ReplaySubject(1);
    this.openedSubject.next(false);
    this.opened$ = this.openedSubject.asObservable();
    this.openedState$ = this.opened$.pipe(map(x => x ? 'expanded' : 'collapsed'));
  }

  toggle = () => {
    this.opened$.pipe(take(1)).subscribe(x => this.openedSubject.next(!x));
  }

}
