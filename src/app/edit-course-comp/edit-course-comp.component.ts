import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JavaserviceService } from '../javaservice.service';

@Component({
  selector: 'app-edit-course-comp',
  templateUrl: './edit-course-comp.component.html',
  styleUrls: ['./edit-course-comp.component.css']
})
export class EditCourseCompComponent {

  constructor(private route:ActivatedRoute,private service:JavaserviceService, private r:Router){}

  newid:any
course={
  id:0,
  title:'',
  description:''
}
  ngOnInit()
  {
    this.route.paramMap.subscribe((params)=>{
      this.newid=params.get('id')
      this.getCourse()
    })

  }

  getCourse()
  {
    this.service.getCourse(this.newid).subscribe((data)=>{
      this.course=data
      console.log(this.course)
    })
  }
  updateCourse()
  {
    this.service.updateCourse(this.course).subscribe((data)=>{
      this.r.navigate(['/courselist'])

    })
  }
}
