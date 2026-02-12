import React, { useState } from "react";
import axios from "axios";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    try {
      const res = await axios.post(
        "http://localhost:5000/api/messages",
        formData
      );

      if (res.data.success) {
        setSuccess("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error(error);
      setSuccess("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section className="contact-section">
      <h2 className="contact-title neon-glow-blue">Contact Me</h2>

      <p className="contact-subtitle">
        Let’s connect. I’m always open to opportunities, collaborations,
        and meaningful conversations.
      </p>

      <div className="contact-card">
        <form className="contact-form" onSubmit={handleSubmit}>
          
          <div className="form-group">
            <label>Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              rows="5"
              name="message"
              placeholder="Write your message here..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="contact-btn" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && <p className="form-message">{success}</p>}

        </form>
      </div>
    </section>
  );
}

export default Contact;
