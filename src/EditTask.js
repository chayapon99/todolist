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
		} else if (editing && selectedTask.length !== 0) {
			handleDelete();
			return "Delete";
		}
	};

	return (
		<>
			<button className="edit-btn" onClick={onEditClick}>
				{getEditButtonText()}
			</button>
		</>
	);
}

export default EditTask;
