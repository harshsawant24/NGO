export default function Team() {
  return (
    <div className="page">
      <h1>Our Leadership Team</h1>

      <div className="team-grid" style={{display:"flex", gap:"20px", justifyContent:"center", flexWrap:"wrap"}}>

        <div className="team-card" style={cardStyle}>
          <h3>President</h3>
          <p>Dr. Medha Bopardikar</p>
        </div>

        <div className="team-card" style={cardStyle}>
          <h3>Secretary</h3>
          <p>Monika Shahapure</p>
        </div>

        <div className="team-card" style={cardStyle}>
          <h3>Treasurer</h3>
          <p>Tushar Bopardikar</p>
        </div>

      </div>
    </div>
  );
}

const cardStyle = {
  
  background: "white",
  padding: "20px",
  borderRadius: "12px",
  width: "250px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  textAlign: "center",
};
