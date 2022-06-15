const Cohort = require('./cohort')

class CohortManager {
  constructor() {
    this.cohorts = []
  }

  getCohorts() {
    return this.getCohorts
  }

  createCohort(name) {
    const cohort = new Cohort(name)
    this.cohorts.push(cohort)
    return cohort
  }

  searchForCohort(name) {
    return this.cohorts.find((cohort) => cohort.name === name)
  }

  removeCohort(name) {
    const cohortName = this.searchForCohort(name)
    if (cohortName) {
      const filtered = this.cohorts.filter((cohort) => cohort.name !== name)
      this.cohorts = filtered
      return true
    }
    return false
  }
}

module.exports = CohortManager
