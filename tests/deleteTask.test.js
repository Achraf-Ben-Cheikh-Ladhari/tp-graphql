/*  AUTHOR ACHRAF BEN CHEIKH LADHARI  */ 
const taskResolver = require('../taskResolver');
describe('Task Resolver', () => {
    test('should return an empty array if there are no tasks', () => {
        taskResolver.deleteTask({ id: '1' });
        taskResolver.deleteTask({ id: '2' });
        taskResolver.deleteTask({ id: '3' });
        const allTasks = taskResolver.tasks();
        expect(allTasks.length).toBe(0);
      });
});