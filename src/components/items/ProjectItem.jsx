import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addFilter,
  removeFilter,
} from "../../redux/featuers/filter/filterSlice";

const ProjectItem = ({ project }) => {
  const { id, projectName, colorClass } = project || {};

  const { filterdProject } = useSelector((state) => state.filter);

  const dispatch = useDispatch();

  const handleChange = (event) => {
    const isChecked = event.target.checked;
    if (isChecked) {
      dispatch(addFilter(projectName));
    } else {
      dispatch(removeFilter(projectName));
    }
  };

  return (
    <div className="checkbox-container">
      <input
        type="checkbox"
        className={colorClass}
        checked={filterdProject.includes(projectName)}
        onChange={handleChange}
      />
      <p className="label">{projectName}</p>
    </div>
  );
};

export default ProjectItem;
