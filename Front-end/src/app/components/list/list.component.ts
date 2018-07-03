import { Component, OnInit } from '@angular/core';
import {StudentService} from '../../shared/student.service';
import {Student} from '../../student';
import { Router} from '@angular/router';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  private students:Student[];
  constructor(private _studentService:StudentService, private router:Router) { }

  ngOnInit() {
    this.readStudents();
  }

  readStudents(){
    this._studentService.readStudents().subscribe(
      data=>{
        console.log(data);
        this.students=data['msg'];
      },
      error=>{
        console.log(error);
      }
    )
  }

  doUpdate(student){
    this._studentService.setter(student);
    this.router.navigate(['/createUpdate']);
  }

  doDelete(student){
    this._studentService.deleteStudent(student._id).subscribe(
      data=>{
          for(var i=0;i<this.students.length;i++){
            if(this.students[i]._id==student._id)
             
            this.students.splice(this.students.indexOf(student),1);
            
          }
      },
      error=>{
       // console.log(error);
      }
    )
  }
}
