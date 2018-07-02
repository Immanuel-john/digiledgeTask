import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {StudentService} from '../../shared/student.service';
import {Student} from '../../student';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router, private studentService:StudentService) { }

  ngOnInit() {
  }

  newStudent(event: any){
    event.preventDefault();
    this.studentService.setter(new Student());
    this.router.navigate(['/createUpdate']);
  }
}
