// import {stringInclues} from '../util/common';

// export const FILTER_ALL = 'all';
// export const FILTER_ACTIVE = 'active';
// export const FILTER_COMPLETED = 'completed';

// export function applyFilter(list, filter) {
//     switch (filter) {
//         case FILTER_COMPLETED:
//             return list.filter(item => item.completed === true);

//         case FILTER_ACTIVE:
//             return list.filter(item => item.completed !== true);

//         default:
//             return list;
//     }
// }

// export function search(list, query) {
//     let q = query.trim().toLowerCase();

//     return list.filter(({text}) => stringInclues(text.toLowerCase(), q));
// }


// export function getOptions() {
//     return {
//         [FILTER_ALL]: 'All',
//         [FILTER_ACTIVE]: 'Active',
//         [FILTER_COMPLETED]: 'Completed'
//     };
// }

// import React, { Component } from 'react';
// import CheckBox from '../components/ui/CheckBox'
// import { applyFilter, search, getOptions, FILTER_COMPLETED, FILTER_ACTIVE, FILTER_ALL } from './filters';

// class TaskApp extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       tasks: [
//         { id: 1, text: 'Learn React', completed: false },
//         { id: 2, text: 'Build a Todo App', completed: true },
//         { id: 3, text: 'Write Unit Tests', completed: false },
//       ],
//       filter: FILTER_ALL,
//       query: '',
//     };
//   }

//   handleTaskChange(id, completed) {
//     this.setState((prevState) => {
//       const tasks = prevState.tasks.map((task) =>
//         task.id === id ? { ...task, completed } : task
//       );
//       return { tasks };
//     });
//   }

//   render() {
//     const { tasks, filter, query } = this.state;
//     const filteredTasks = applyFilter(tasks, filter);
//     const searchedTasks = search(filteredTasks, query);

//     return (
//       <div>
//         {/* Search */}
//         <input
//           type="text"
//           placeholder="Search tasks..."
//           value={query}
//           onChange={(e) => this.setState({ query: e.target.value })}
//         />

//         {/* Filters */}
//         <div>
//           {Object.entries(getOptions()).map(([key, label]) => (
//             <button key={key} onClick={() => this.setState({ filter: key })}>
//               {label}
//             </button>
//           ))}
//         </div>

//         {/* Task List */}
//         <ul>
//           {searchedTasks.map((task) => (
//             <li key={task.id}>
//               <CheckBox
//                 checked={task.completed}
//                 onChange={(completed) => this.handleTaskChange(task.id, completed)}
//               />
//               {task.text}
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

// export default TaskApp;

import {stringInclues} from '../util/common';

export const FILTER_ALL = 'all';
export const FILTER_ACTIVE = 'active';
export const FILTER_COMPLETED = 'completed';
export const PRIORITY_ORDER = ['High', 'Medium', 'Low'];  // Define priority order

export function applyFilter(list, filter) {
    switch (filter) {
        case FILTER_COMPLETED:
            return list.filter(item => item.completed === true);

        case FILTER_ACTIVE:
            return list.filter(item => item.completed !== true);

        default:
            return list;
    }
}

export function search(list, query) {
    let q = query.trim().toLowerCase();

    return list.filter(({text}) => stringInclues(text.toLowerCase(), q));
}

// Sorting by Due Date
export function sortByDueDate(list, ascending = true) {
    return list.sort((a, b) => {
        const dateA = new Date(a.dueDate);
        const dateB = new Date(b.dueDate);

        return ascending ? dateA - dateB : dateB - dateA;
    });
}

// Sorting by Priority
export function sortByPriority(list) {
    return list.sort((a, b) => {
        const priorityA = PRIORITY_ORDER.indexOf(a.priority);
        const priorityB = PRIORITY_ORDER.indexOf(b.priority);
        return priorityA - priorityB;
    });
}

export function getOptions() {
    return {
        [FILTER_ALL]: 'All',
        [FILTER_ACTIVE]: 'Active',
        [FILTER_COMPLETED]: 'Completed',
        'Priority-H': 'High Priority',  // Corrected priority option
        'Priority-M': 'Medium Priority',
        'Priority-L': 'Low Priority',
        'ascending': 'Asc (Due Date)',
        'descending': 'Desc (Due Date)',
    };  
}


