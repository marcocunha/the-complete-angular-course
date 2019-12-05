import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses', //<courses>
    template: `
        <h2>{{ title }}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
        <img [src]="imgUrl" />
        <br><br>
        <button (click)="onSave($event)" class="btn btn-primary" [class.active]="isActive">Save</button>
        <button [style.backgroundColor]="isActive? 'white' : 'blue' ">Test</button>
        <br><br>
        <input [(ngModel)]="email" (keyup.enter)="onKeyUp()"/>
        <br><br>
        {{ longString | summary: 10}}
    `
})
export class CoursesComponent {
    title = "List of courses";
    courses;
    imgUrl = "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
    isActive = true;
    email = "me@example.com";
    longString = "this is a very long string to show how to create a custom pipe"

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }

    onSave($event) {
        console.log("Button was clicked", $event);
    }

    onKeyUp() {
        console.log(this.email);
    }
}