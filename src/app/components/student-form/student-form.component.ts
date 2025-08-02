import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student/student.module';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.scss'
})
export class StudentFormComponent implements OnInit {
  studentForm!: FormGroup;
  isSaving: boolean = false;
  successMessage: string = '';
  errorMessage: string = '';


  constructor(private fb: FormBuilder,  private studentService: StudentService, private router : Router) { }

  ngOnInit(): void {
    // Initialization logic if needed
    this.studentForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(18), Validators.max(50)]],
    });    
  }

  get f() {
    return this.studentForm.controls;

  }

  onSubmit(): void {

    this.isSaving = true;
    this.successMessage = '';
    this.errorMessage = '';

    if (this.studentForm.invalid) {
      this.isSaving = false;
      this.errorMessage = 'Please fill in all required fields correctly.';
      console.error('Form is invalid:', this.studentForm.errors);
      
      this.studentForm.markAllAsTouched(); // Mark all fields as touched to show validation error
      return;
    }


    const studentData : Student = this.studentForm.value;

    this.studentService.createStudent(studentData).subscribe(
      {
        next: (student) => {
          this.isSaving = false;
          this.successMessage = 'Student created successfully!';
          console.log('Student created successfully:', student);
          this.router.navigate(['/students']); // Navigate to student list after successful creation
          setTimeout(() => {
          this.router.navigate(['/students']);
        }, 2000);
        },
      
      error: (error) => {
        this.isSaving = false;
        this.errorMessage = 'Failed to create student. Please try again.';
        console.error('Error creating student:', error);
      }
    });
  }

}
