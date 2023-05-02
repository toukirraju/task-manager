import { useGetTeamsQuery } from "../../redux/featuers/team/teamApi";
import TeamMember from "../items/TeamMember";

const TeamMembers = () => {
  const { data: teams, isLoading, isError } = useGetTeamsQuery();

  // decide what to render
  let content = null;
  if (isLoading && !isError) {
    content = <h3>Loading...</h3>;
  }
  if (!isLoading && isError) {
    content = <h3>Somthing went wrong!</h3>;
  }
  if (!isLoading && !isError && teams?.length === 0) {
    content = <h3>Team not found</h3>;
  }
  if (!isLoading && !isError && teams?.length > 0) {
    content = teams.map((team) => <TeamMember key={team.id} team={team} />);
  }

  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold">Team Members</h3>
      <div className="mt-3 space-y-4">{content}</div>
    </div>
  );
};

export default TeamMembers;
