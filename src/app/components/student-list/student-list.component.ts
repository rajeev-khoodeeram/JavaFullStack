import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';  

interface Student {
  id: number;
  name: string;
  age: number;
}

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.scss'
})

export class StudentListComponent implements OnInit {
  students: Student[] = [];

  constructor(private studentService: StudentService) { 
    // Initialize the students array
    
    
  }

  ngOnInit(): void {
     this.studentService.getStudents().subscribe(data => {
      this.students = data;
      console.log('Students fetched:', this.students);
    }, error => {
      console.error('Error fetching students:', error);
    });
  }
}
