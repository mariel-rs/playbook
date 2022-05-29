const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]

// Imprime el nombre (propiedad name) de cada explorer en la lista
explorers.forEach(exp => console.log(exp.name))

// Imprime el stack de cada explorer
explorers.forEach(exp => console.log(exp.stack))

// Crea una nueva lista con las listas de stacks de cada explorer 
// Map creates a list by default...
const explorerStack = explorers.map((exp) => exp.stack)

// Obtén la lista de explorers que tengan en su stack "js"
const explorersJs = explorers.filter((exp) => exp.stack.includes("js"))

// Busca el primer explorer que sea de la CDMX
const explorerCdmx = explorers.find((exp) => exp.city == "CDMX")

// Obtén la suma de todos los exercises_completed
const completedExercises = explorers.reduce((acc, exp) => acc + exp.exercises_completed, 0)

// Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true
const frontEndFinished = explorers.some((exp) => exp.missions.frontend.isFinished === true)

// Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true
const onboardingFinished = explorers.every((exp) => exp.missions.onboarding.isFinished === true)