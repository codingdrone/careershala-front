import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../course.service';
import { Course } from '../../course';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { Meta } from '@angular/platform-browser';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {
  course: Course = null;
  courses:Course[] = [];
  currentJustify = 'center';

  constructor(private route: ActivatedRoute,private courseService:CourseService,private meta: Meta, private titleService: Title) {

    // this.meta.addTag({ name: 'description', content: 'Online live courses for school students, college students, graduates, professionals for practical skill based training through CareerShala'});
    // this.meta.addTag({ name: 'author', content: 'www.careernaksha.com' });
    // this.meta.addTag({ name: 'keywords', content: 'online, live, courses, school, college, students, graduates, skill, training, careershala' });
    // this.setTitle('CareerShala | Online Live Courses | Practical Skill Training');

  }

    ngOnInit(): void {
      this.route.params.subscribe(params => {
      console.log('params- ');
      console.log(params);

      this.course = new Course();
      this.course.key = params.key;
      this.course.id = params.id;


      this.courseService.getCourse(params.key).subscribe(response =>
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
            this.course=this.courses.filter(a => a.key == params.key)[0];
            console.log('course- ');
            console.log(this.course);

            this.meta.addTag({ name: 'description', content:'this.course.description' }, true);
            this.meta.addTag({ name: 'author', content: 'www.careernaksha.com' });
            this.meta.addTag({ name: 'keywords', content: 'online, live, courses, school, college, students, graduates, skill, training, careershala' });
            this.setTitle(this.course.title);

        });
      })
   }

   public setTitle( newTitle: string) {
      this.titleService.setTitle( newTitle );
      window.scroll(0, 0);
    }

    scroll(){
      window.scroll(0, 0);
    }
  }

