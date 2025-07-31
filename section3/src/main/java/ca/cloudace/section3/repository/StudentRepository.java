package ca.cloudace.section3.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import ca.cloudace.section3.model.Student;

public interface StudentRepository extends JpaRepository<Student, Long> {
    // Additional query methods can be defined here if needed

}
