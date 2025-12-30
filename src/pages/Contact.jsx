export default function Contact() {
  return (
    <div className="page">
      <h1>Contact / Support</h1>

      <p><strong>Address:</strong><br />
        Shree Sai Sanstha, F2 Poonam Park,<br />
        Near Bhagini Hospital, Bibvewadi, Pune</p>

      <p><strong>Phone:</strong> 9422525111</p>
      <p><strong>Email:</strong> drmmb5@yahoo.co.in</p>

      <form className="contact-form" 
        style={{width:"300px", margin:"20px auto", display:"flex", flexDirection:"column", gap:"12px"}}
      >
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message..." required></textarea>
        <button>Send Message</button>
      </form>
    </div>
  );
}
