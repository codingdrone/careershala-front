import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { Meta } from '@angular/platform-browser';
import { Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { data } from 'jquery';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {
 
  id = '';
  sub_title = '';
  key = '';
  image = '';
  sub_description = '';
  duration = '';
  days = '';
  effort = '';
  language = '';
  certification = '';
  price = '';
  expert = '';
  detailed_description ='';
  benifits = '';
  target_audience = '';
  topics ='';
  value_propostion = '';
  student_category = '';
  outcomes ='';
  titletag = '';
  descriptiontag = '';
  keywordtag = '';
  //userData: any;
  currentJustify = 'center';

  constructor(private route: ActivatedRoute,private meta: Meta, private titleService: Title, private http:HttpClient) {
  }
  getDetailCourses() {
    return this.http.get<any>(`https://dashboard.careernaksha.com/courses/?key=${this.key}`);
  }
   ngOnInit(): void {

      this.key = this.route.snapshot.params.key;
      this.getDetailCourses().subscribe(data => {
        console.log('---data Course detail---', data);
        this.setTitle(data[0].titletag);
        this.sub_title = data[0].sub_title;
       // this.imageUrl = `https://dashboard.careernaksha.com${data[0].blog_image.url}`;
        this.sub_description = data[0].sub_description ;
        this.duration = data[0].duration;
        this.days = data[0].days;
        this.effort = data[0].effort;
        this.benifits = data[0].benifits;
        this.certification = data[0].certification;
        this.language = data[0].language;
        this.price = data[0].price;
        this.expert = data[0].expert;
        this.detailed_description = data[0].detailed_description;
        this.target_audience = data[0].target_audience;
        this.topics = data[0].topics;
        this.value_propostion = data[0].value_proposition;
        this.student_category = data[0].student_category;
        this.outcomes = data[0].outcomes;
        this.image = data[0].image;
        //this.subimageUrl = `https://dashboard.careernaksha.com${data[0].blog_subimage.url}`;
  //https://dashboard.careernaksha.com
        this.titletag = data[0].titletag;
        this.descriptiontag = data[0].descriptiontag;
        this.keywordtag = data[0].keywordtag;
  
        //this.meta.updateTag({ name: 'description', content: this.titletag });
        //this.meta.updateTag({ name: 'author', content: this.author});
        this.meta.updateTag({ name: 'keywords', content: this.keywordtag });
        this.meta.updateTag({ name: 'description', content: this.descriptiontag });
        console.log(this.titletag);  
      });
    }
    public setTitle(titletag: string) {
      this.titleService.setTitle(titletag);
      window.scroll(0, 0);
    }
  }