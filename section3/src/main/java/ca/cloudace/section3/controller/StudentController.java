package ca.cloudace.section3.controller;


import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import ca.cloudace.section3.model.Student;

@Controller
public class StudentController {
    private  List<Student> students ;

    public StudentController() {
        this.students = new ArrayList<>();
    }

    public void addStudent(Student student) {
        students.add(student);
    }

    @GetMapping("/students")
    public String listStudents(Model model) {
            students = List.of(
                new Student(1L, "Alice", 23),
                new Student(2L, "Bob", 30),
                new Student(3L, "Carol", 25)
        );
        model.addAttribute("students", students);
        return "studentss"; // will map to students.html
    }

    public void removeStudent(Student student) {
        students.remove(student);
    }

    public Student findStudentByName(String name) {
        for (Student student : students) {
            if (student.getName().equals(name)) {
                return student;
            }
        }
        return null;
    }
    
}
