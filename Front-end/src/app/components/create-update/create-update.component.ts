import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {StudentService} from '../../shared/student.service';
import {Student} from '../../student';
@Component({
  selector: 'app-create-update',
  templateUrl: './create-update.component.html',
  styleUrls: ['./create-update.component.css']
})
export class CreateUpdateComponent implements OnInit {
  private student:Student;
  constructor(private studentService:StudentService, private router:Router) { }

  ngOnInit() {
    this.student=this.studentService.getter();
  }
  createOrUpdate(){
    if(this.student._id==undefined){
    this.studentService.createStudent(this.student).subscribe(
      data=>{
        console.log(data);
        this.router.navigate(['/']);
      },
      error=>{
        console.log(error);
      }
    )
    }else{
      this.studentService.updateStudent(this.student).subscribe(
        data=>{
          console.log(data);
          this.router.navigate(['/']);
        },
        error=>{
          console.log(error);
        }
      )

    }
  }
}
