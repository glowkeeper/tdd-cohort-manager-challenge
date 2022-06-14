class Student {
  constructor(studentDetails) {
    const { name, email, githubUser } = studentDetails
    this.name = name
    this.email = email
    this.githubUser = githubUser
  }

  // I tend to write a 'getter' for all my classes, which just returns the instance.
  // this is just a 'nice to have' - it's not totally necessary ;)
  get() {
    return this
  }
}

module.exports = Student
