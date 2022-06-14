const CohortManager = require('../src/cohortManager')

describe('Cohort', () => {
  // eslint-disable-next-line no-unused-vars
  let cohortManager
  beforeEach(() => {
    cohortManager = new CohortManager()
  })

  it('can create a cohort with a cohort name', () => {
    const expected = { name: 'Cohort 1000023', students: [] }
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

  it('can remove a cohort by name', () => {})
})
