import { useEffect, useState } from "react";

function PopupOnCreate({ tasks, setTasks, visible }) {
	const [showPopup, setShowPopup] = useState(false);
	const [newTask, setNewTask] = useState("");

	useEffect(() => {
		console.log("Tasks updated:", tasks);
	}, [tasks]);

	function TogglePopUp() {
		setShowPopup(!showPopup);
	}

	function handleAddButton(e) {
		e.preventDefault();
		if (newTask.trim() !== "") {
			addTask(newTask);
			// Clear the new task input
			setNewTask("");
			TogglePopUp();
		}
	}

	const addTask = (newTask) => {
		setTasks((prevTasks) => [...prevTasks, newTask]);
		// console.log("Task:", tasks);
	};

	// console.log("Create button visiblity: ", visible);

	return (
		<>
			{visible && (
				<button className="create-btn" onClick={TogglePopUp}>
					Create
				</button>
			)}

			<div className={`modal-overlay ${showPopup ? "show" : ""}`}></div>
			{showPopup && (
				<div className="modal-container">
					<div className="create-dial">
						<form className="create-form">
							<div className="dial-wrapper">
								<button
									className="close-btn"
									onClick={TogglePopUp}
								>
									Close
								</button>
								<input
									type="text"
									value={newTask}
									className="new-task"
									onChange={(e) => setNewTask(e.target.value)}
									placeholder="Add your task here.."
									contentEditable
								></input>
								<button
									className="add-to-list-btn"
									type="submit"
									onClick={handleAddButton}
								>
									Add to List
								</button>
							</div>
						</form>
					</div>
				</div>
			)}
		</>
	);
}

export default PopupOnCreate;
