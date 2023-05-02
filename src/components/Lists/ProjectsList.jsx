import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addFilter } from "../../redux/featuers/filter/filterSlice";
import { useGetProjectsQuery } from "../../redux/featuers/projects/projectApi";
import ProjectItem from "../items/ProjectItem";

const ProjectsList = () => {
  const { data: projects, isLoading, isError } = useGetProjectsQuery();

  const dispatch = useDispatch();

  useEffect(() => {
    if (projects) {
      const initialFilters = projects.map((filter) => filter.projectName);
      initialFilters.forEach((filter) => dispatch(addFilter(filter)));
    }
  }, [dispatch, projects]);

  // decide what to render
  let content = null;
  if (isLoading && !isError) {
    content = <h3>Loading...</h3>;
  }
  if (!isLoading && isError) {
    content = <h3>Somthing went wrong!</h3>;
  }
  if (!isLoading && !isError && projects?.length === 0) {
    content = <h3>Projects not found</h3>;
  }
  if (!isLoading && !isError && projects?.length > 0) {
    content = projects.map((project) => (
      <ProjectItem key={project.id} project={project} />
    ));
  }

  return (
    <div>
      <h3 className="text-xl font-bold">Projects</h3>
      <div className="mt-3 space-y-4">{content}</div>
    </div>
  );
};

export default ProjectsList;
