import { useState } from "react";
import { useNavigate } from "react-router-dom";  // Updated to useNavigate

const Input = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNextButton, setShowNextButton] = useState(false); // To toggle the "Go to Next" button
  const [formData, setFormData] = useState(null); // To store form data and pass to Output

  const navigate = useNavigate(); // Use useNavigate for navigation

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    // Store form data
    setFormData({ firstName, lastName, email, password });
    // Clear input fields
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setShowNextButton(true); // Show "Go to Next" button
    alert(`Form submitted! \nName: ${firstName} ${lastName} \nEmail: ${email}`);
  };

  const goToNext = () => {
    // Navigate to Output component
    navigate("/output", { state: { formData } }); // Pass formData as state
  };

  return (
    <div>
      <h5>Signup Form</h5>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {showNextButton && (
        <button onClick={goToNext}>Go to Next</button> // Show this button after submission
      )}
    </div>
  );
};

export default Input;
