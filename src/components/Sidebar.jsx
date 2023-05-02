import React from "react";
import ProjectsList from "./Lists/ProjectsList";
import TeamMembers from "./Lists/TeamMembers";

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* <!-- Projects List --> */}
      <ProjectsList />

      {/* <!-- Team Members --> */}
      <TeamMembers />
    </div>
  );
};

export default Sidebar;
