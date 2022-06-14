const Cohort = require('./cohort')

class CohortManager {
  constructor() {
    this.cohorts = []
  }

  // I tend to write a 'getter' for all my classes, which just returns the instance.
  // this is just a 'nice to have' - it's not totally necessary ;)
  get() {
    return this
  }

  createCohort(name) {
    const cohort = new Cohort(name)
    this.cohorts.push(cohort)
    return cohort
  }

  removeCohort(name) {}

  getCohort(name) {
    for (let i = 0; i < this.cohorts.length; i++) {
      const cohort = this.cohorts[i]
      const myName = cohort.name
      if (name === myName) return cohort
    }
  }
}

module.exports = CohortManager
