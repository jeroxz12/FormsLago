import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrls: ['./students-page.component.css']
})
export class StudentsPageComponent implements OnInit {

  students:any[] = []


  constructor() { }

  ngOnInit(): void {
  }

  addStudent(evento:Event): void{
    this.students.push(evento);
  }

}
