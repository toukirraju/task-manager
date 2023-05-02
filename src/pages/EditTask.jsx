import React from "react";
import { useParams } from "react-router-dom";
import Form from "../components/UI/Form";
import { useGetSingleTaskQuery } from "../redux/featuers/Task/taskApi";

const EditTask = () => {
  const { editId } = useParams();
  const { data: task, isLoading, isError } = useGetSingleTaskQuery(editId);

  let content = null;
  if (isLoading && !isError) {
    content = <h3>Loading...</h3>;
  }
  if (!isLoading && isError) {
    content = <h3>There was an error on getting single task</h3>;
  }

  if (!isLoading && !isError && task?.id) {
    content = <Form title="Edit Task" task={task} />;
  }

  return <>{content}</>;
};

export default EditTask;
