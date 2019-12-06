import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { catchError, map } from 'rxjs/operators';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { Observable } from 'rxjs';
import { AlreadyExistsError } from '../common/already-exists-error';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    
    constructor(private url: string, private http: Http) { }

    getAll() {
        return this.http.get(this.url).pipe(
            catchError(this.handleError)
        );
    }

    create(resource) {
        return this.http.post(this.url, JSON.stringify(resource)).pipe(
            catchError(this.handleError)
        );
    }

    update(resource) {
        return this.http.put(this.url + '/' + resource.id, JSON.stringify(resource)).pipe(
            catchError(this.handleError)
        );
    }

    delete(id) {
        return this.http.delete(this.url + '/' + id).pipe(
            catchError(this.handleError)
        );
    }

    private handleError(error: Response) {
        if (error.status === 404) {
            return Observable.throw(new NotFoundError());
        }
        if (error.status === 400) {
            return Observable.throw(new AlreadyExistsError(error.json()));
        }
        return Observable.throw(new AppError(error));
    }
}
