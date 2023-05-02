const TeamMember = ({ team }) => {
  const { id, name, avatar } = team || {};

  return (
    <div className="checkbox-container">
      <img src={avatar} className="team-avater" />
      <p className="label">{name}</p>
    </div>
  );
};

export default TeamMember;
