import { useState } from "react";
import s from "./RentalForm.module.css";
import Flatpickr from "react-flatpickr";
import "../../styles/light.css";

const RentalForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    comments: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "*Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "*Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "*Email is invalid";
    }
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  if (submitted) {
    return <div className={s.successMessage}>✅ Car successfully rented!</div>;
  }

  return (
    <form onSubmit={handleSubmit} className={s.rentalForm}>
      <div className={s.text}>
        <h2>Book your car now</h2>
        <p>Stay connected! We are always ready to help you.</p>
      </div>

      <div className={s.inputs}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name*"
        />
        {errors.name && <span className={s.error}>{errors.name}</span>}

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email*"
        />
        {errors.email && <span className={s.error}>{errors.email}</span>}

        <Flatpickr
          options={{
            monthSelectorType: "static",
            altInput: false,
            position: "below center",
          }}
          value={formData.date}
          onChange={([date]) =>
            setFormData((prev) => ({
              ...prev,
              date: date ? date.toISOString().split("T")[0] : "",
            }))
          }
          placeholder="Booking Date"
          className={s.dateInput}
        />

        <textarea
          name="comments"
          value={formData.comments}
          onChange={handleChange}
          placeholder="Comment"
        />
      </div>

      <button type="submit">Send</button>
    </form>
  );
};

export default RentalForm;
