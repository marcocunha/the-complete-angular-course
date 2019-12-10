import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  courses$: FirebaseListObservable<any[]>;
  course$;
  author$;
  constructor(db: AngularFireDatabase) {
    this.courses$ = db.list('/courses');
    this.course$ = db.object('/courses/1').valueChanges();
    this.author$ = db.object('/authors/1').valueChanges();
  }

  add(course: HTMLInputElement) {
    this.courses$.push(course.value);
    course.value = '';
  }

}
