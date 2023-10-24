import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <h1 className="title">Price cards</h1>
      <div className="card-container">
        <PriceCard title="FREE" price="$0/Month" details={freeDetails} />
        <PriceCard title="PLUS" price="$11/Month" details={plusDetails} />
        <PriceCard title="PRO" price="$35/Month" details={proDetails} />
      </div>
    </div>
  );
}

const freeDetails = [
  { text: "Single user", available: true },
  { text: "50GB Storage", available: true },
  { text: "Unlimited Public Projects", available: true },
  { text: "Community Access", available: true },
  { text: "Unlimited Private projects", available: false },
  { text: "Dedicated phone Support", available: false },
  { text: "Free SubDomain", available: false },
  { text: "Monthly Status Reports", available: false },
];

const plusDetails = [
  { text: "5 user", available: true },
  { text: "50GB Storage", available: true },
  { text: "Unlimited Public Projects", available: true },
  { text: "Community Access", available: true },
  { text: "Unlimited Private projects", available: true },
  { text: "Dedicated phone Support", available: true },
  { text: "Free SubDomain", available: true },
  { text: "Monthly Status Reports", available: false },
];

const proDetails = [
  { text: "Unlimited User user", available: true },
  { text: "150GB Storage", available: true },
  { text: "Unlimited Public Projects", available: true },
  { text: "Community Access", available: true },
  { text: "Unlimited Private projects", available: true },
  { text: "Dedicated phone Support", available: true },
  { text: "Free SubDomain", available: true },
  { text: "Monthly Status Reports", available: true },
];

function PriceCard({ title, price, details }) {
  return (
    <div className="price-card">
      <div>
        <p className="head">{title}</p>
        <h1>{price}</h1>
        <hr style={{ width: "110%" }} />
        <div className="details">
          {details.map((detail, index) => (
            <p
              key={index}
              style={{
                opacity: detail.available ? 1 : 0.5,
              }}
            >
              {detail.available ? (
                <span>
                  <strong>✓</strong>
                </span>
              ) : (
                <span>
                  <strong>✗</strong>
                </span>
              )}{" "}
              {detail.text}
            </p>
          ))}
        </div>
        <button id="card-button">Learn More</button>
      </div>
    </div>
  );
}

export default App;
