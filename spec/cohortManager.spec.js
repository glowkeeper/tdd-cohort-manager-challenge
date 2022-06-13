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
})
