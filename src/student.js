class Student {
  constructor(name, email, githubUser) {
    this.name = name
    this.email = email
    this.githubUser = githubUser
  }

  // (array.length - 1) - that's always the last element in our array

  get() {
    return this
  }
}

module.exports = Student
