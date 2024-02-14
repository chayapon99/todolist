function DeleteTask({handleDelete, selectedTask}) {
    return (
		<>
			<button className="delete-btn" onClick={handleDelete}>
				{selectedTask.length !== 0 ? "Delete" : "" }
			</button>
		</>
	);
}

export default DeleteTask;