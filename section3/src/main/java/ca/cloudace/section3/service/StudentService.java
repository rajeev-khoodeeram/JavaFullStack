package ca.cloudace.section3.service;


import org.springframework.stereotype.Service;
import ca.cloudace.section3.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import ca.cloudace.section3.model.Student;
import java.util.List;

@Service
public class StudentService {

    @Autowired
    private StudentRepository studentRepository;

    /**
     * Retrieves all students from the database.
     *
     * @return a list of all students
     */
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    
    
    /**
     * Saves a student entity to the database.
     *
     * @param student the student entity to save
     */
    public void saveStudent(Student student) {
        studentRepository.save(student);
    }

    
}
