import React from "react";
import { useSelector } from "react-redux";
import { useGetTasksQuery } from "../../redux/featuers/Task/taskApi";
import TaskItem from "../items/TaskItem";

const TaskList = () => {
  const { data: tasks, isLoading, isError } = useGetTasksQuery();
  const { filterdProject, searchKeyword } = useSelector(
    (state) => state.filter
  );

  // filter by projects
  const filterTasksByProject = (tasks, filteredProject) => {
    if (filteredProject) {
      return tasks.filter((task) =>
        filteredProject.includes(task?.project?.projectName)
      );
    }
    return tasks;
  };

  //filter by search keyword
  const filterTasksBySearchKeyword = (tasks, searchKeyword) => {
    if (searchKeyword) {
      const formattedSearchKeyword = searchKeyword
        .toUpperCase()
        .replace(/\s+/g, "");
      return tasks.filter((task) => {
        const formattedTitle = task.taskName.toUpperCase().replace(/\s+/g, "");
        return formattedTitle.includes(formattedSearchKeyword);
      });
    }
    return tasks;
  };

  // render with filtered tasks
  const renderTasks = (tasks) => {
    return tasks.map((task) => <TaskItem key={task.id} task={task} />);
  };

  // decide what to render
  let content = null;
  if (isLoading && !isError) {
    content = <h3>Loading...</h3>;
  }
  if (!isLoading && isError) {
    content = <h3>Somthing went wrong!</h3>;
  }
  if (!isLoading && !isError && tasks?.length === 0) {
    content = <h3>Projects not found</h3>;
  }
  if (!isLoading && !isError && tasks?.length > 0) {
    // filter by projects
    const filteredTasks = filterTasksByProject(tasks, filterdProject);
    //filter by search keyword
    const searchedTasks = filterTasksBySearchKeyword(
      filteredTasks,
      searchKeyword
    );
    // render with filtered tasks
    content = renderTasks(searchedTasks);
  }

  return <div className="lws-task-list">{content}</div>;
};

export default TaskList;
