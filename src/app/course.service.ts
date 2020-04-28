import { Injectable } from '@angular/core';
import { observable, Observable, of } from 'rxjs';
import { Course } from './course';

import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class CourseService {

    constructor(private http: HttpClient){ }

   public getCourses(): Observable<any>{
       return this.http.get('../assets/courses.json');

    }

    public getCourse(key: string): Observable<any>{
        return  this.http.get('../assets/courses.json');
    }
}
