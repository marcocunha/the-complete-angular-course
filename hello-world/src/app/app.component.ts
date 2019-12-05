import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world';
  post = {
    title: "Title",
    isFavorite: true
  }
  courses = [1,2,3];
  viewMode = 'map';

  onFavoriteChange(eventArgs: FavoriteChangedEventArgs) {
    console.log("Favorite changed: ", eventArgs.newValue);
  }

  coursesAvailable() {
    return this.courses.length > 0;
  }
}
