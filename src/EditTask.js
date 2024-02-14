import DeleteTask from "./DeleteTask";

function EditTask({
	onEditClick,
	tasks,
	setTasks,
	selectedTask,
	editing,
	setCreateVisible,
	handleDelete,
}) {
	const getEditButtonText = () => {
		if (!editing) {
			setCreateVisible(true);
			return "Edit";
		} else if (selectedTask.length === 0) {
			return "Close";
		}
	};

	return (
		<>
			{
				selectedTask.length === 0 ? 
				<button className="edit-btn" onClick={onEditClick}>
					{getEditButtonText()}
					</button> 
				: <DeleteTask handleDelete={handleDelete} selectedTask={selectedTask}/>
			}
		</>
	);
}

export default EditTask;
