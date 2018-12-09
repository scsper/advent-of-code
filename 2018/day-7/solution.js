function getTuple (line) {
  const splitLine = line.split(' ')

  return [splitLine[1], splitLine[7]]
}

function getInstructionList (lines) {
  const dependencyMap = {}
  const inverseDependencyMap = {}
  const noDependencies = new Set()
  const instructionList = []

  lines.forEach(line => {
    const tuple = getTuple(line)

    const stepDependedOn = tuple[0]
    const step = tuple[1]

    if (!dependencyMap[step]) {
      dependencyMap[step] = new Set()
    }

    if (!inverseDependencyMap[stepDependedOn]) {
      if (!dependencyMap[stepDependedOn]) {
        noDependencies.add(stepDependedOn)
      }
      inverseDependencyMap[stepDependedOn] = new Set()
    }

    noDependencies.delete(step)
    dependencyMap[step].add(stepDependedOn)
    inverseDependencyMap[stepDependedOn].add(step)
  })

  while (noDependencies.size) {
    const noDependenciesList = [...noDependencies]
    noDependenciesList.sort()

    console.log(noDependenciesList)
    console.log(dependencyMap)

    const step = noDependenciesList[0]

    instructionList.push(step)
    noDependencies.delete(step)

    if (inverseDependencyMap[step]) {
      inverseDependencyMap[step].forEach(key => {
        dependencyMap[key].delete(step)

        if (!dependencyMap[key].size) {
          noDependencies.add(key)
          delete dependencyMap[key]
        }
      })

      delete inverseDependencyMap[step]
    }
  }

  console.log(instructionList)

  return instructionList.join('')
}

module.exports = {
  getInstructionList
}