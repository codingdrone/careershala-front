import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../course.service';
import { Course } from '../../course';
import { Meta } from '@angular/platform-browser';
import { Title } from '@angular/platform-browser';

@Component({
  templateUrl: 'card.component.html'
})
export class CardsComponent implements OnInit {
  courses:Course[] = [];
  constructor(private courseService:CourseService,private meta: Meta, private titleService: Title) {
  
  this.meta.addTag({ name: 'description', content: 'Online live courses for school students, college students, graduates, professionals for practical skill based training through CareerShala'});
  this.meta.addTag({ name: 'author', content: 'www.careernaksha.com' });
  this.meta.addTag({ name: 'keywords', content: 'online, live, courses, school, college, students, graduates, skill, training, careershala' });
  this.setTitle('CareerShala | Online Live Courses | Practical Skill Training');
  }


  ngOnInit() {

    this.courseService.getCourses().subscribe(response =>
      {
        this.courses = response.courses.map(item =>
        {
           let course = new Course();
           course.id =  item.id;
           course.title = item.title;
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
  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
    window.scroll(0, 0);
  }

scroll(){
  window.scroll(0, 0);
}
}
