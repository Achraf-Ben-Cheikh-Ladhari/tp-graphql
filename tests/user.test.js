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

  test('should return an array of tasks', () => {
    const allTasks = taskResolver.tasks();
    expect(Array.isArray(allTasks)).toBe(true);
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

  test('should return an empty array if there are no tasks', () => {
    taskResolver.deleteTask({ id: '1' });
    taskResolver.deleteTask({ id: '2' });
    taskResolver.deleteTask({ id: '3' });
    const allTasks = taskResolver.tasks();
    expect(allTasks.length).toBe(0);
  });

  test('should return a copy of the tasks array', () => {
    const allTasks = taskResolver.tasks();
    allTasks.push({ id: '4', title: 'New Task', description: 'Description', completed: false, duration: 2 });
    const newAllTasks = taskResolver.tasks();
    expect(newAllTasks.length).toBe(1);
  });

  test('should change the description of a task', () => {
    const taskId = '4';
    const newDescription = 'Updated description for task 4 LADHARI ACHRAF';
    taskResolver.changeDescription({ id: taskId, description: newDescription });
    const task = taskResolver.task({ id: taskId });
    expect(task.description).toBe(newDescription);
  });
});