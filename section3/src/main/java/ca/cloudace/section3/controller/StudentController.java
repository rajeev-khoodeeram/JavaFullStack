package ca.cloudace.section3.controller;


import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import ca.cloudace.section3.model.Student;
import jakarta.validation.Valid;

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
        return "students"; // will map to students.html
    }


 @GetMapping("/studentss")
    public String listStudentWithThyme(Model model) {
            students = List.of(
                new Student(1L, "Alice", 23),
                new Student(2L, "Bob", 30),
                new Student(3L, "Carol", 25)
        );
        model.addAttribute("students", students);
        return "studentss"; // will map to students.html
    }

    @GetMapping("/students/new")
    public String showForm(Model model) {
        model.addAttribute("student", new Student());
        return "form-student";
    }

    @PostMapping("/student-registration")
    public String handleForm(@Valid @ModelAttribute Student student, BindingResult result, Model model) {
        // Save or process the student here
        //model.addAttribute("student", student);

        if (result.hasErrors()) {
        model.addAttribute("message", "Form submission errors!");    
        }
        else
        {
        model.addAttribute("student", new Student());
        model.addAttribute("message", "Student registered successfully!");
        }
        return "form-student"; // Redirect to the students list page
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
