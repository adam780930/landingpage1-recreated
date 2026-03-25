import pfp from '../assets/pfp3.jpg';

function Portrait() {
  return (
    <div className="text-center my-5">
      <img
        src={pfp}
        className="rounded-circle border border-dark"
        alt="avatar"
        width="150"
        height="150"
      />
    </div>
  );
}

export default Portrait;
