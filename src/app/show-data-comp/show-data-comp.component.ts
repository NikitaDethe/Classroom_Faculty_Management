import { Component } from '@angular/core';
import { JavaserviceService } from '../javaservice.service';

@Component({
  selector: 'app-show-data-comp',
  templateUrl: './show-data-comp.component.html',
  styleUrls: ['./show-data-comp.component.css']
})
export class ShowDataCompComponent {

  constructor(private service:JavaserviceService){}

  info:any
  ngOnInit()
  {
    this.service.getCourses().subscribe((data)=>{
      console.log(data)
      this.info=data

    })
  }

  deleteCourse(id:any)
  {
    this.service.deleteCourse(id).subscribe((data)=>{
      
      this.getCourses();
      
    })
  }

  getCourses()
  {
    this.service.getCourses().subscribe((data)=>{
      this.info=data
    })
  }
}
