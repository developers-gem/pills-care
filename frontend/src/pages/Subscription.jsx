import React from "react";
import {
  FaCheckCircle,
  FaCrown,
  FaEdit,
  FaTrash,
  FaPlus,
} from "react-icons/fa";
import "../PagesStyle/subscription.css";

const plans = [
  {
    id: 1,
    name: "Free",
    price: "₹0",
    duration: "Forever",
    color: "free",
    features: [
      "Add up to 5 medications",
      "Basic reminders",
      "Medication history",
      "Email Support",
    ],
  },
  {
    id: 2,
    name: "Premium",
    price: "₹199",
    duration: "Per Month",
    color: "premium",
    popular: true,
    features: [
      "Unlimited Medications",
      "Smart Notifications",
      "Family Members",
      "Medicine Reports",
      "Priority Support",
    ],
  },
  {
    id: 3,
    name: "Pro",
    price: "₹499",
    duration: "Per Month",
    color: "pro",
    features: [
      "Everything in Premium",
      "Doctor Sharing",
      "Health Analytics",
      "Cloud Backup",
      "24×7 Support",
    ],
  },
];

const Subscription = () => {
  return (
    <div className="subscription-page">
      <div className="subscription-header">
        <div>
          <h1>Subscription Plans</h1>

          <p>Manage subscription plans available for users.</p>
        </div>

        <button className="add-plan-btn">
          <FaPlus />
          Add New Plan
        </button>
      </div>

      <div className="plans-grid">
        {plans.map((plan) => (
          <div className={`plan-card ${plan.color}`} key={plan.id}>
            {plan.popular && (
              <div className="popular-badge">
                <FaCrown />
                Most Popular
              </div>
            )}

            <h2>{plan.name}</h2>

            <div className="price">
              <span>{plan.price}</span>

              <small>{plan.duration}</small>
            </div>

            <ul>
              {plan.features.map((feature, index) => (
                <li key={index}>
                  <FaCheckCircle />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="plan-actions">
              <button className="edit-btn">
                <FaEdit />
                Edit
              </button>

              <button className="delete-btn">
                <FaTrash />
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subscription;
