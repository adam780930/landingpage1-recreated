// Replace the import below with your actual profile picture asset
// import pfp from '../assets/pfp3.jpg';

function Portrait() {
  return (
    <div className="text-center my-5">
      {/* Replace src with your imported pfp image: src={pfp} */}
      <img
        src="https://via.placeholder.com/150"
        className="rounded-circle border border-dark"
        alt="avatar"
        width="150"
        height="150"
      />
    </div>
  );
}

export default Portrait;
