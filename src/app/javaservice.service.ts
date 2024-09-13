import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JavaserviceService {

  constructor(private http:HttpClient) { }

  apiurl="http://localhost:8080/course"

  getCourses():Observable<any>
  {
    return this.http.get(this.apiurl)
  }

  addCourse(course:any):Observable<any>
  {
   return this.http.post(this.apiurl,course)
  }

  deleteCourse(id:any):Observable<any>
  {
    return this.http.delete(`${this.apiurl}/${id}`)
  }

  getCourse(id:any):Observable<any>
  {
    return this.http.get(`${this.apiurl}/${id}`)
  }

  updateCourse(course:any)
  {
    return this.http.put(this.apiurl,course)
  }
}
