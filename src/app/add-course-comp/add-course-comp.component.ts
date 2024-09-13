import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { JavaserviceService } from '../javaservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-course-comp',
  templateUrl: './add-course-comp.component.html',
  styleUrls: ['./add-course-comp.component.css']
})
export class AddCourseCompComponent {

  course={
    id:0,
    title:'',
    description:''
  }
// when we want click on button redirect to another component of page then we used private router in constructor
// and navigate with path  which are written in app routing module comp.
  constructor(private service:JavaserviceService,private router:Router){}
  onSubmit()
  {
    this.service.addCourse(this.course).subscribe({
      next:(data)=>{
        this.router.navigate(['/courselist'])
      },
      error:(error)=>{
        alert(error)
      }
    })

     
    }
  }
