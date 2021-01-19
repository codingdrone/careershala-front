import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../course.service';
import { Course } from '../../course';
import { HttpClient } from '@angular/common/http';


@Component({
  templateUrl: 'card.component.html'
})
export class CardsComponent implements OnInit {

  courses = [];

  //courses:Course[] = [];
  constructor(private courseService:CourseService,private http:HttpClient) {

  }

  getCourses(){
    return this.http.get<any>('https://dashboard.careernaksha.com/courses')
   }

  ngOnInit() {

    this.getCourses().subscribe(data => {
      console.log("---data courses---",data);
      this.courses=data;
    });
  }
}
