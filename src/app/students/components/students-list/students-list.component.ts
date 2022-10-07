import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {

  @Input() students:any[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
