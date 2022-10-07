import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, ValidatorFn, Validators } from '@angular/forms';
import { Student } from 'src/app/models/student.interface';

@Component({
  selector: 'app-students-form',
  templateUrl: './students-form.component.html',
  styleUrls: ['./students-form.component.css']
})
export class StudentsFormComponent implements OnInit {

  @Output() addStudent: EventEmitter<any> = new EventEmitter<any>();


  addStudentForm = this.formBuilder.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    apellido: ['', [Validators.required, Validators.minLength(3)]],
    dni: ['', [Validators.required, Validators.minLength(6),this.isANumber()]], 
    legajo: ['', [Validators.required, Validators.minLength(3),this.isANumber()]],
    telefono: ['', [Validators.required, Validators.minLength(6),this.isANumber()]]
  });



  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  submitForm(): void {
    this.addStudent.emit(this.addStudentForm.value);
    this.addStudentForm.reset();
  }
  isANumber(): ValidatorFn {

    return (control: AbstractControl): { [key: string]: any } | null => {
      return (!Number.isInteger(parseInt(control.value))) ? { errorNumero: true } : null;
    }
  }
}
