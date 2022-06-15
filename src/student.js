class Student {
  constructor(studentDetails) {
    const { name, email, githubUser } = studentDetails
    this.name = name
    this.email = email
    this.githubUser = githubUser
  }

  getName() {
    return this.name
  }

  getEmail() {
    return this.email
  }

  getGithubUser() {
    return this.githubUser
  }
}

module.exports = Student
