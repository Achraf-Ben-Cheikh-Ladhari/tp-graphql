/*  AUTHOR ACHRAF BEN CHEIKH LADHARI  */ 
const taskResolver = require('../taskResolver');
describe('Task Resolver', () => {
    test('should change the description of a task', () => {
        const taskId = '1';
        const newDescription = 'Updated description for task 4 LADHARI ACHRAF';
        taskResolver.changeDescription({ id: taskId, description: newDescription });
        const task = taskResolver.task({ id: taskId });
        expect(task.description).toBe(newDescription);
      });
});