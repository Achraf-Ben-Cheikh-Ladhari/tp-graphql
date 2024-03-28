/*  AUTHOR ACHRAF BEN CHEIKH LADHARI  */ 
const taskResolver = require('../taskResolver');
describe('Task Resolver', () => {

  test('should return a task by id', () => {
    const task = taskResolver.task({ id: '1' });
    expect(task.id).toBe('1');
  });

  test('should return undefined if task with given id does not exist', () => {
    const task = taskResolver.task({ id: 5000 });
    expect(task).toBe(undefined);
  });

  test('should return all fields of the task', () => {
    const task = taskResolver.task({ id: '1' });
    expect(task).toHaveProperty('title');
    expect(task).toHaveProperty('description');
    expect(task).toHaveProperty('completed');
    expect(task).toHaveProperty('duration');
  });

  test('should return undefined if id argument is missing', () => {
    const task = taskResolver.task({});
    expect(task).toBeUndefined();
  });


test('should return all tasks', () => {
    const allTasks = taskResolver.tasks();
    expect(allTasks.length).toBe(3);
  });

  test('should return tasks with expected properties', () => {
    const allTasks = taskResolver.tasks();
    allTasks.forEach(task => {
      expect(task).toHaveProperty('id');
      expect(task).toHaveProperty('title');
      expect(task).toHaveProperty('description');
      expect(task).toHaveProperty('completed');
      expect(task).toHaveProperty('duration');
    });
  });

  

  


});