/*  AUTHOR ACHRAF BEN CHEIKH LADHARI  */ 
const taskResolver = require('../taskResolver');
describe('Task Resolver', () => {

    test('should return a new task', () => {
        const newTask=taskResolver.addTask({title:'new Task', description: 'new task written by achraf ladhari',completed:false,duration:10 });
        expect(newTask).toHaveProperty('id');
        expect(newTask).toHaveProperty('title');
        expect(newTask).toHaveProperty('description');
        expect(newTask).toHaveProperty('completed');
        expect(newTask).toHaveProperty('duration');
        expect(newTask.id).toBe(taskResolver.tasks().length.toString())
      });

});