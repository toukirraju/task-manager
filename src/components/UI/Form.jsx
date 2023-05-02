import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetProjectsQuery } from "../../redux/featuers/projects/projectApi";
import {
  useAddTaskMutation,
  useEditTaskMutation,
} from "../../redux/featuers/Task/taskApi";
import { useGetTeamsQuery } from "../../redux/featuers/team/teamApi";

const Form = ({ title, type, task }) => {
  const navigate = useNavigate();
  const { data: teams } = useGetTeamsQuery();
  const { data: projects } = useGetProjectsQuery();
  const [addTask, { isSuccess }] = useAddTaskMutation();
  const [editTask, { isSuccess: editSuccess }] = useEditTaskMutation();

  const [newTask, setNewTask] = useState(
    task || {
      taskName: "",
      teamMember: {
        name: "",
        avatar: "",
        id: 0,
      },
      project: {
        id: 0,
        projectName: "0",
        colorClass: "",
      },
      deadline: "",
      id: 0,
      status: "pending",
    }
  );

  const resetForm = () => {
    setNewTask({
      taskName: "",
      teamMember: {
        name: "",
        avatar: "",
        id: 0,
      },
      project: {
        id: 0,
        projectName: "0",
        colorClass: "",
      },
      deadline: "",
      id: 0,
      status: "pending",
    });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setNewTask((preValue) => {
      return {
        ...preValue,
        // [name]: value,
        [name]:
          name === "teamMember" || name === "project"
            ? JSON.parse(value)
            : value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (type === "add") {
      addTask({
        ...newTask,
        id: Math.floor(new Date().getTime().toString()),
      });
    } else {
      console.log("edit");
      editTask(newTask);
    }
  };

  useEffect(() => {
    if (isSuccess || editSuccess) {
      resetForm();
      navigate("/");
    }
  }, [isSuccess, editSuccess]);

  let teamOptions = null;
  if (teams?.length > 0) {
    teamOptions = teams?.map((team) => (
      <option
        key={team.id}
        value={JSON.stringify(team)}
        selected={newTask.teamMember.id === team.id}
      >
        {team.name}
      </option>
    ));
  }

  let projectOptions = null;
  if (projects?.length > 0) {
    projectOptions = projects?.map((project) => (
      <option
        key={project.id}
        value={JSON.stringify(project)}
        selected={newTask.project.id === project.id}
      >
        {project.projectName}
      </option>
    ));
  }

  return (
    <div className="container relative">
      <main className="relative z-20 max-w-3xl mx-auto rounded-lg xl:max-w-none">
        <h1 className="mt-4 mb-8 text-3xl font-bold text-center text-gray-800">
          {title}
        </h1>

        <div className="justify-center mb-10 space-y-2 md:flex md:space-y-0">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="fieldContainer">
              <label for="lws-taskName">Task Name</label>
              <input
                type="text"
                value={newTask.taskName}
                onChange={handleChange}
                name="taskName"
                id="lws-taskName"
                required
                placeholder="Implement RTK Query"
              />
            </div>

            <div className="fieldContainer">
              <label>Assign To</label>
              <select
                onChange={handleChange}
                name="teamMember"
                id="lws-teamMember"
                required
              >
                <option value="" hidden selected>
                  Select Team Member
                </option>
                {teamOptions}
              </select>
            </div>
            <div className="fieldContainer">
              <label for="lws-projectName">Project Name</label>
              <select
                id="lws-projectName"
                onChange={handleChange}
                name="project"
                required
              >
                <option value="" hidden selected>
                  Select Project
                </option>
                {projectOptions}
              </select>
            </div>

            <div className="fieldContainer">
              <label for="lws-deadline">Deadline</label>
              <input
                type="date"
                value={newTask.deadline}
                onChange={handleChange}
                name="deadline"
                id="lws-deadline"
                required
              />
            </div>

            <div className="text-right">
              <button type="submit" className="lws-submit">
                Save
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Form;
