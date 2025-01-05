import { useLocation } from "react-router-dom";

const Output = () => {
  const location = useLocation();  // Access location object to retrieve form data passed
  const formData = location.state?.formData;

  return (
    <div>
      <h5>Your Submitted Information</h5>
      {formData ? (
        <div>
          <p><strong>Name:</strong> {formData.firstName} {formData.lastName}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Password:</strong> {formData.password}</p>
        </div>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default Output;
