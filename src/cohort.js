const Student = require('./student')

class Cohort {
  constructor(name) {
    this.name = name
    this.students = []
  }

  // I tend to write a 'getter' for all my classes, which just returns the instance.
  // this is just a 'nice to have' - it's not totally necessary ;)
  get() {
    return this
  }

  addStudent(studentDetails) {
    const student = new Student(studentDetails)
    this.students.push(student)
    return student
  }
}

module.exports = Cohort
