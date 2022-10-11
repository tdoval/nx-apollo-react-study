import { mutationField, objectType, queryField } from 'nexus';

export const todoItemTypes = [
  objectType({
    name: 'TodoItem',
    definition(t) {
      t.model.id();
      t.model.text();
      t.model.done();
    },
  }),
  queryField((t) => {
    t.crud.todoItems();
  }),
  mutationField((t) => {
    t.crud.createOneTodoItem();
  }),
];