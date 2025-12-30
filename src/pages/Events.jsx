import Gallery from "../components/Gallery";
import Gallery2 from "../components/Gallery2";
import Gallery3 from "../components/Gallery3";

export default function Events() {
  return (
    <div className="page">
      <h1>Our Events & Activities</h1>

      <ul style={{ textAlign: "left", maxWidth: "500px", margin: "20px auto" }}>
        <li>Women Skill Development Training </li>
        <li>Social Awareness Program (Jagruti Shibir)</li>
        <li>Community Welfare Activities</li>
        <li>Women Empowerment Workshops</li>
      </ul>

      <Gallery />
      <h2>Self Help Skill Development Program</h2>
      <Gallery2 />
      <h2>Stationary Donation to Principal</h2>
     <Gallery3/>
    </div>
  );
}
