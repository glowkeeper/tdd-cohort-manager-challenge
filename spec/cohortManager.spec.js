const CohortManager = require('../src/cohortManager')

describe('Cohort', () => {
  // eslint-disable-next-line no-unused-vars
  let cohortManager
  beforeEach(() => {
    cohortManager = new CohortManager()
  })

  it('can create a cohort with a cohort name', () => {
    const expected = { name: 'Cohort 6', students: [] }
    const result = cohortManager.createCohort(expected.name)

    // console.log('cohort', result)

    // two ways to test.
    /* expect(result).toEqual(
      jasmine.objectContaining({
        name: expected.name,
        students: expected.students
      })
    ) */
    // or
    expect(result.name).toEqual(expected.name)
    expect(result.students).toEqual(expected.students)
  })

  it('can remove a cohort by name', () => {
    // set up
    const expected = true
    // execute
    cohortManager.createCohort('Cohort 6')
    const result = cohortManager.removeCohort('Cohort 6')
    // verify
    expect(result).toEqual(expected)
    expect(cohortManager.cohorts.length).toEqual(0)
  })

  it('can get cohort by name', () => {
    // set up
    const expected = cohortManager.createCohort('Cohort 6')
    // execute
    const result = cohortManager.searchForCohort('Cohort 6')
    // verify
    expect(result).toEqual(expected)
  })

  it('can add a student to a cohort', () => {
    // create required data structures
    const student = {
      name: 'Steve',
      email: 'steve@blah.com',
      githubUser: 'glowkeeper'
    }

    const cohortName = 'Cohort 6'

    const expected = {
      name: cohortName,
      students: [student]
    }

    // execute code
    const thisCohort = cohortManager.createCohort(expected.name)
    // console.log('my cohort', thisCohort)
    thisCohort.addStudent(student)

    // match expectations
    expect(thisCohort.name).toEqual(expected.name)
    expect(thisCohort.students[0].name).toEqual(student.name)
    expect(thisCohort.students[0].email).toEqual(student.email)
    expect(thisCohort.students[0].githubUser).toEqual(student.githubUser)
  })

  it('can remove a student from a cohort', () => {
    // set up
    const student = {
      name: 'Steve',
      email: 'steve@blah.com',
      githubUser: 'glowkeeper'
    }

    const cohortName = 'Cohort 6'

    const expected = {
      name: cohortName,
      students: []
    }

    // execute code
    const thisCohort = cohortManager.createCohort(expected.name)
    // console.log('my cohort', thisCohort)
    thisCohort.addStudent(student)
    thisCohort.removeStudent(student)
    // verify
    expect(thisCohort.name).toEqual(expected.name)
    expect(thisCohort.students.length).toEqual(expected.students.length)
  })

  it('can search for student', () => {
    // set up
    const student = {
      name: 'Steve',
      email: 'steve@blah.com',
      githubUser: 'glowkeeper'
    }

    const cohortName = 'Cohort 6'
    const expected = true

    // execute code
    const thisCohort = cohortManager.createCohort(cohortName)
    // console.log('my cohort', thisCohort)
    thisCohort.addStudent(student)
    const foundStudent = thisCohort.searchForStudent(student)
    // verify
    expect(expected).toEqual(foundStudent)
  })

  it('can return error if student not found', () => {
    // set up
    const addedStudent = {
      name: 'Steve',
      email: 'steve@blah.com',
      githubUser: 'glowkeeper'
    }

    const searchedStudent = {
      name: 'John',
      email: 'john@blah.com',
      githubUser: 'johnblah'
    }

    const cohortName = 'Cohort 6'
    const expected = false

    // execute code
    const thisCohort = cohortManager.createCohort(cohortName)
    // console.log('my cohort', thisCohort)
    thisCohort.addStudent(addedStudent)
    const foundStudent = thisCohort.searchForStudent(searchedStudent)
    // verify
    expect(expected).toEqual(foundStudent)
  })
})
