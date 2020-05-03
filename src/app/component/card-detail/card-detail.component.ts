import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../course.service';
import { Course } from '../../course';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {
  course: Course = null;
  courses:Course[] = [];
  currentJustify = 'center';
  constructor(private route: ActivatedRoute,private courseservice:CourseService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log('params- ');
      console.log(params);

      this.course = new Course();
      this.course.key = params.key;
      this.course.id = params.key;


      this.courseservice.getCourse(params.key).subscribe(response =>
        {
          this.courses = response.courses.map(item =>
          {
             let course = new Course();
             course.id =  item.id;
             course.title = item.title;
             course.key= item.key;
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

             //course.startDates = item.startDates;
             //course.promoVideo=  item.promoVideo;
             //course.promoImage=  item.promoImage;
             //course.educator=  item.educator;
             //course.requirements=  item.requirements;
             //course.weeklyHours =  item.weeklyHours;
             course.image =  item.image;
             course.overview =  item.overview;
             return course;
            });
            console.log('courses- ');
            console.log(this.courses);
            this.course=this.courses.filter(a => a.id == params.key)[0];
            console.log('course- ');
            console.log(this.course);
        });
      })


  }
  }

