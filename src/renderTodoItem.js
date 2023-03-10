import { TodoManager } from "./TodoManager";

export const renderTodoItem = (todo) => {
	const content = document.getElementById("content");

	const todoObject = document.createElement("div");
	todoObject.id = "todo-item";

	// div for title and delete button
	const headRow = document.createElement("div");
	headRow.className = "todo-head-row";

	const title = document.createElement("div");
	title.id = "todo-title";
	title.textContent = todo.title;

	const deleteBTN = document.createElement("button");
	deleteBTN.id = "todo-delete-btn";
	deleteBTN.textContent = "X";
	deleteBTN.addEventListener("click", () => {
		TodoManager.removeTodo(todo);
	});

	headRow.appendChild(title);
	headRow.appendChild(deleteBTN);

	const details = document.createElement("div");
	details.id = "todo-info";
	details.textContent = todo.info;

	const date = document.createElement("div");
	date.id = "todo-date";
	date.textContent = todo.date;

	// bottom row with prioritie, project, edit
	const bottomRow = document.createElement("div");
	bottomRow.id = "todo-bottomRow";

	const prio = document.createElement("div");
	prio.id = "todo-prio";
	prio.textContent = todo.prio;

	const project = document.createElement("div");
	project.id = "todo-project";
	project.textContent = todo.project;

	const editBtn = document.createElement("button");
	editBtn.id = "todo-edit";
	editBtn.classList = "edit-btn";
	editBtn.textContent = "Edit";
	editBtn.addEventListener("click", () => {
		TodoManager.editTodo(todo);
	});

	bottomRow.appendChild(prio);
	bottomRow.appendChild(project);
	bottomRow.appendChild(editBtn);

	todoObject.appendChild(headRow);
	todoObject.appendChild(details);
	todoObject.appendChild(date);
	todoObject.appendChild(bottomRow);

	content.appendChild(todoObject);
};
