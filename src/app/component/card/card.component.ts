import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../course.service';
import { Course } from '../../course';


@Component({
  templateUrl: 'card.component.html'
})
export class CardsComponent implements OnInit {
  courses:Course[] = [];
  constructor(private courseService:CourseService) {

  }


  ngOnInit() {

    this.courseService.getCourses().subscribe(response =>
      {
        this.courses = response.courses.map(item =>
        {
           let course = new Course();
           course.id =  item.id;
           course.cardTitle= item.cardTitle;
           course.title = item.title;
           course.content = item.content;
             course.description=  item.description;
             course.duration=  item.duration;
            course.days= item.days;
            course.language=item.language;
            course.certification=item.certification;
            course.price=  item.price;
            course.expert=  item.expert;
            course.detailed_description=item.detailed_description;
            course.benefits=item.benefits;
            course.target_audience= item.target_audience;
            course.topics=  item.topics;
            course.value_proposition= item.value_proposition;
           course.promoVideo=  item.promoVideo;
           course.promoImage=  item.promoImage;
           course.educator=  item.educator;
           course.image=  item.image;
           course.overview=  item.overview;
           course.key=item.key;
           return course;
          });
          console.log('courses- ');
          console.log(this.courses);
      });
  }
}
