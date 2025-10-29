import React from 'react';
import "./AgentsSection.css";

const AgentsSection = () => {
  const agents = [
    {
      name: "Sandali Ayesha",
      title: "Real estate agent",
      office: "045-5656565",
      mobile: "076-12312312",
      email: "sandali123@gmail.com",
      image: "./src/assets/A2.jpg",
    },
    {
      name: "Kavindu Nimsara",
      title: "Real estate agent",
      office: "045-5656565",
      mobile: "076-12312312",
      email: "kavindu123@gmail.com",
      image: "./src/assets/A4.jpg",
    },
    {
      name: "Movindu Shavinthaka",
      title: "Real estate agent",
      office: "045-5656565",
      mobile: "076-12312312",
      email: "movindu123@gmail.com",
      image: "/./src/assets/A3.jpg",
    },
    {
      name: "Pavani Edirisinghe",
      title: "Real estate agent",
      office: "045-5656565",
      mobile: "076-12312312",
      email: "pavani123@gmail.com",
      image: "./src/assets/A1.jpg",
    },
  ]

  return (
    <section className="agents-section">
      <div className="agents-container">
        <div className="agents-header">
          <h2 className="agents-title">Our professional agents</h2>
          <p className="agents-subtitle">Skilled professionals committed to finding the right house for you.</p>
        </div>

        <div className="agents-grid">
          {agents.map((agent, index) => (
            <div key={index} className="agent-card">
              <div className="agent-image">
                <img src={agent.image || "/placeholder.svg"} alt={agent.name} />
              </div>
              <div className="agent-info">
                <h3 className="agent-name">{agent.name}</h3>
                <p className="agent-title">{agent.title}</p>

                <div className="agent-contact">
                  <div className="Acontact-item">
                    <span className="Acontact-label">Office</span>
                    <span className="Acontact-value">{agent.office}</span>
                  </div>
                  <div className="Acontact-item">
                    <span className="Acontact-label">Mobile</span>
                    <span className="Acontact-value">{agent.mobile}</span>
                  </div>
                  <div className="Acontact-item">
                    <span className="Acontact-label">Email</span>
                    <span className="Acontact-value">{agent.email}</span>
                  </div>
                </div>

                <div className="agent-social">
                  <div className="social-icon">𝐅</div>
                  <div className="social-icon">𝕏</div>
                  <div className="social-icon">🅾</div>
                  <div className="social-icon">➤</div>
                  <div className="social-icon">✉</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AgentsSection
