import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface student {
  id: number; 
  name: string;
  age: number;
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private apiUrl = 'http://localhost:8080/api/students'; // Replace with your API URL
  constructor(private http: HttpClient) { }

  getStudents(): Observable<student[]> {
    return this.http.get<student[]>(this.apiUrl);
  }

}
