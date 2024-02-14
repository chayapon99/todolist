function TaskList({ onEdit, tasks, selectedTask, setSelectedTask, setTasks }) {
	const onChangeButton = (e, task) => {
		if (e.target.checked) {
			setSelectedTask([...selectedTask, task]);
		} else {
			setSelectedTask(
				selectedTask.filter((selected) => selected !== task)
			);
		}
	};

	return (
		<>
			{tasks.length === 0 ? (
				<p className="no-tasks">
					You currently have no tasks. Create one now...
				</p>
			) : (
				tasks.map((task) => (
					<>
						<div className="task-list-container">
							<li key={task} className={"task"}>
								{/* <p>{task.id}</p> */}
								{!onEdit ? (
									<ul className="task-list">{task}</ul>
								) : (
									<label className="task-list-edit">
										<input
											type="checkbox"
											// checked={selectedTask.includes(
											// 	task
											// )}
											onChange={(e) =>
												onChangeButton(e, task)
											}
										/>
										{task}
									</label>
								)}
							</li>
						</div>
					</>
				))
			)}
			{/* {<p>{tasks.map((t) => console.log(t))}</p>} */}
		</>
	);
}

export default TaskList;
