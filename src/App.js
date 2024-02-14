import { useEffect, useState } from "react";
import EditTask from "./EditTask";
import "./styles.css";
import PopupOnCreate from "./PopupOnCreate";
import TaskList from "./TaskList";

function App() {
	const [tasks, setTasks] = useState([]);
	const [editing, setEditing] = useState(false);
	const [selectedTask, setSelectedTask] = useState([]);
	const [createVisible, setCreateVisible] = useState(true);

	useEffect(() => {
		console.log("Selected Task: ", selectedTask);
	}, [selectedTask]);

	const handleEditButton = () => {
		setCreateVisible(false);
		setEditing(!editing);
	};

	const handleDeleteButton = () => {
		setEditing(!editing);

		// Filter out the selected tasks

		const updatedTasks = tasks.filter(
			(task) => !selectedTask.includes(task)
		);
		setTasks(updatedTasks);
		setSelectedTask([]); // Clear the selected tasks
	};

	return (
		<>
			<h1 className="header">Your To-do List</h1>
			<div className="task-content">
				{console.log("onEdit value: ", editing)}
				<TaskList
					onEdit={editing}
					tasks={tasks}
					selectedTask={selectedTask}
					setSelectedTask={setSelectedTask}
					setTasks={setTasks}
				/>
			</div>
			<div className="default-btn">
				<PopupOnCreate
					tasks={tasks}
					setTasks={setTasks}
					visible={createVisible}
				/>
				<EditTask
					onEditClick={handleEditButton}
					tasks={tasks}
					setTasks={setTasks}
					selectedTask={selectedTask}
					editing={editing}
					setCreateVisible={setCreateVisible}
					handleDelete={handleDeleteButton}
				/>
			</div>
		</>
	);
}

export default App;
