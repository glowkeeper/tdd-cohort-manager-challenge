const Cohort = require('./cohort')

class CohortManager {
  constructor() {
    this.cohorts = []
  }

  // (array.length - 1) - that's always the last element in our array

  createCohort(name) {
    const cohort = new Cohort(name)
    this.cohorts.push(cohort)
    return cohort
  }

  getCohort(name) {
    for (let i = 0; i < this.cohorts.length; i++) {
      const cohort = this.cohorts[i]
      const myName = cohort.name
      if (name === myName) return cohort
    }
  }
}

module.exports = CohortManager
