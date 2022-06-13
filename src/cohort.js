const Student = require('./student')

class Cohort {
  constructor(name) {
    this.name = name
    this.students = []
  }

  // (array.length - 1) - that's always the last element in our array

  get() {
    return this
  }

  addStudent(name, email, githubUser) {
    const student = new Student(name, email, githubUser)
    this.students.push(student)
    return student
  }
}

module.exports = Cohort
