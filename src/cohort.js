const Student = require('./student')

class Cohort {
  constructor(name) {
    this.name = name
    this.students = []
  }

  getName() {
    return this.name
  }

  getStudents() {
    return this.students
  }

  addStudent(studentDetails) {
    const student = new Student(studentDetails)
    this.students.push(student)
    return student
  }

  searchForStudent(studentDetails) {
    const found = this.students.some(
      (student) =>
        student.name === studentDetails.name &&
        student.email === studentDetails.email &&
        student.githubUser === studentDetails.githubUser
    )
    return found
  }

  removeStudent(studentDetails) {
    const found = this.searchForStudent(studentDetails)
    if (found) {
      const filtered = this.students.filter(
        (student) =>
          student.name !== studentDetails.name &&
          student.email !== studentDetails.email &&
          student.githubUser !== studentDetails.githubUser
      )
      this.students = filtered
    }
    return found
  }
}

module.exports = Cohort
