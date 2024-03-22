// taskResolver.js
let tasks = [
    {
    id: '1',
    title: 'Développement Front-end pour Site E-commerce',
    description: 'Créer une interface utilisateur réactive en utilisant React et Redux pour un site e-commerce.',
    completed: false,
    duration:10
    },
    {
    id: '2',
    title: 'Développement Back-end pour Authentification Utilisateur',
    description: 'Implémenter un système authentification et autorisation pour une application web en utilisant Node.js, Express, et Passport.js',
    completed: false,
    duration:5
    },
    {
    id: '3',
    title: 'Tests et Assurance Qualité pour Application Web',
    description: 'Développer et exécuter des plans de test et des cas de test complets.',
    completed: false,
    duration: 3
    }
    ];
    const taskResolver = {
    task: ({ id }) => tasks.find(task => task.id === id),
    tasks: () => tasks,
    addTask: ({ title, description, completed,duration }) => {
    const task = {
    id: String(tasks.length + 1),
    title,
    description,
    completed,
    duration
    };
    tasks.push(task);
    return task;
    },
    completeTask: ({ id }) => {
    const taskIndex = tasks.findIndex(task => task.id === id);
    if (taskIndex !== -1) {
    tasks[taskIndex].completed = true;
    return tasks[taskIndex];
    }
    return null;
    },
    changeDescription:({id,description})=>{
        const taskIndex=tasks.findIndex(task=>task.id===id)
        if(taskIndex!==-1){
            tasks[taskIndex].description=description
            return tasks[taskIndex];
        }
        return null
    },
    deleteTask: ({ id }) => {
        const taskIndex = tasks.findIndex(task => task.id === id);
        if (taskIndex !== -1) {
            taskDeleted=tasks[taskIndex];
          tasks.splice(taskIndex, 1);
          return taskDeleted;
        }
        return null;
      },
    };
    module.exports = taskResolver;