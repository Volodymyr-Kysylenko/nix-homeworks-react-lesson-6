import { createSlice, combineReducers } from '@reduxjs/toolkit';

import todos from './todos';

const initialTodos = todos();
export const todosSlice = createSlice({
  name: 'todos',
  initialState: {value: initialTodos},
  reducers: {
    addTodos: (state, action) => {
      state.value = [action.payload, ...state.value];
    },
    removeTodos: (state, action) => {
      state.value = [...state.value.filter((todo) => todo.id !== action.payload)];
    },
    updateTodos: (state, action) => {
      state.value = [...state.value.map((todo) =>
        (todo.id === action.payload.id) ? { ...todo, [action.payload.prop]: action.payload.val } : { ...todo }
      )];
    },
    replaceTodos: (state, action) => {
      state.value = action.payload;
    }
  }
});
export const { addTodos, removeTodos, updateTodos, replaceTodos } = todosSlice.actions;
export const selectTodos= (state) => state.todos.value;

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {value: false},
  reducers: {
    changeFilter: (state, action) => {
      state.value = action.payload;
    }
  }
});
export const { changeFilter } = filterSlice.actions;
export const selectFilter = (state) => state.filter.value;

export const createParamSlice = createSlice({
  name: 'createParam',
  initialState: {value: null},
  reducers: {
    changeCreateParam: (state, action) => {
      state.value = action.payload;
    }
  }
});
export const { changeCreateParam } = createParamSlice.actions;
export const selectCreateParam = (state) => state.createParam.value;

export const updateParamSlice = createSlice({
  name: 'updateParam',
  initialState: {value: null},
  reducers: {
    changeUpdateParam: (state, action) => {
      state.value = action.payload;
    }
  }
});
export const { changeUpdateParam } = updateParamSlice.actions;
export const selectUpdateParam = (state) => state.updateParam.value;

export const formSlice = createSlice({
  name: 'form',
  initialState: {value: false},
  reducers: {
    controlForm: (state, action) => {
      state.value = action.payload;
    }
  }
});
export const { controlForm } = formSlice.actions;
export const selectForm = (state) => state.form.value;

export const titleSlice = createSlice({
  name: 'title',
  initialState: {value: ''},
  reducers: {
    createTitle: (state, action) => {
      state.value = action.payload;
    }
  }
});
export const { createTitle } = titleSlice.actions;
export const selectTitle= (state) => state.title.value;

export const taskSlice = createSlice({
  name: 'task',
  initialState: {value: ''},
  reducers: {
    createTask: (state, action) => {
      state.value = action.payload;
    }
  }
});
export const { createTask } = taskSlice.actions;
export const selectTask = (state) => state.task.value;

// export const taskTitleSlice = createSlice({
//   name: 'taskTitle',
//   initialState: {value: ''},
//   reducers: {
//     createTitle: (state, action) => {
//       state.value = action.payload;
//     }
//   }
// });
// export const { createTitle } = taskTitleSlice.actions;
// export const selectTitle= (state) => state.title.value;

export default combineReducers({
  filter: filterSlice.reducer,
  createParam: createParamSlice.reducer,
  updateParam: updateParamSlice.reducer,
  todos: todosSlice.reducer,
  form: formSlice.reducer,
  title: titleSlice.reducer,
  task: taskSlice.reducer
});
