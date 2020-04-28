import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../course.service';
import { Course } from '../../course';

@Component({
  templateUrl: 'card.component.html'
})
export class CardsComponent implements OnInit {
  courses:Course[] = [];
  constructor(private courseService:CourseService) {}


  ngOnInit() {

    this.courseService.getCourses().subscribe(response =>
      {
        this.courses = response.courses.map(item =>
        {
           let course = new Course();
           course.id =  item.id;
           course.title = item.title;
           course.startDates = item.startDates;
           course.topics=  item.topics;
           course.promoVideo=  item.promoVideo;
           course.promoImage=  item.promoImage;
           course.educator=  item.educator;

           course.weeklyHours=  item.weeklyHours;
           course.image=  item.image;
           course.duration=  item.duration;
           course.overview=  item.overview;
           course.description=  item.description;
           course.fee=  item.fee;
           return course;
          });
          console.log('courses- ');
          console.log(this.courses);
      });
  }
}
