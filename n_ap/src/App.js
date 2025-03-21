import { useForm } from 'react-hook-form';
//import './LoanForm.css'; // Create this CSS file for styling

const LoanForm = () => {
  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission here
  };

  return (
    <div className="loan-form-container">
      <h2>Loan Application Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Customer Name */}
        <div className="form-group">
          <label>Customer Name (Mandatory)</label>
          <input 
            {...register('customerName', { required: 'Name is required' })}
            placeholder="Enter full name"
          />
          {errors.customerName && <span className="error">{errors.customerName.message}</span>}
        </div>

        {/* PAN Number */}
        <div className="form-group">
          <label>PAN Number</label>
          <input 
            {...register('pan', { 
              required: 'PAN is required',
              pattern: {
                value: /^[A-Za-z0-9]{10}$/,
                message: 'Invalid PAN format'
              }
            })}
            placeholder="Enter PAN number"
          />
          {errors.pan && <span className="error">{errors.pan.message}</span>}
        </div>

        {/* Occupation */}
        <div className="form-group">
          <label>Occupation</label>
          <select 
            {...register('occupation', { required: 'Occupation is required' })}
          >
            <option value="">Select Occupation</option>
            <option value="service">Service</option>
            <option value="business">Business</option>
            <option value="selfEmployed">Self Employed</option>
          </select>
          {errors.occupation && <span className="error">{errors.occupation.message}</span>}
        </div>

        {/* Present Income */}
        <div className="form-group">
          <label>Present Income (₹)</label>
          <input 
            type="number"
            {...register('presentIncome', { 
              required: 'Income is required',
              min: { value: 0, message: 'Income cannot be negative' }
            })}
          />
          {errors.presentIncome && <span className="error">{errors.presentIncome.message}</span>}
        </div>

        {/* Address */}
        <div className="form-group">
          <label>Address</label>
          <textarea 
            {...register('address', { required: 'Address is required' })}
            rows="3"
          />
          {errors.address && <span className="error">{errors.address.message}</span>}
        </div>

        {/* Contact Number */}
        <div className="form-group">
          <label>Contact Number</label>
          <input 
            type="tel"
            {...register('contactNumber', { 
              required: 'Contact number is required',
              pattern: {
                value: /^\d{10}$/,
                message: 'Invalid phone number'
              }
            })}
            placeholder="10-digit mobile number"
          />
          {errors.contactNumber && <span className="error">{errors.contactNumber.message}</span>}
        </div>

        {/* Email */}
        <div className="form-group">
          <label>Email ID</label>
          <input 
            type="email"
            {...register('email', { 
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
          />
          {errors.email && <span className="error">{errors.email.message}</span>}
        </div>

        {/* Product Type */}
        <div className="form-group">
          <label>Product Type</label>
          <select 
            {...register('productType', { required: 'Product type is required' })}
          >
            <option value="">Select Product</option>
            <option value="HL">Home Loan (HL)</option>
            <option value="PL">Personal Loan (PL)</option>
            <option value="LAP">Loan Against Property (LAP)</option>
          </select>
          {errors.productType && <span className="error">{errors.productType.message}</span>}
        </div>

        {/* Loan Amount */}
        <div className="form-group">
          <label>Loan Amount Required (₹)</label>
          <input 
            type="number"
            {...register('loanAmount', { 
              required: 'Loan amount is required',
              min: { value: 10000, message: 'Minimum loan amount is ₹10,000' }
            })}
          />
          {errors.loanAmount && <span className="error">{errors.loanAmount.message}</span>}
        </div>

        {/* CIBIL Score */}
        <div className="form-group">
          <label>CIBIL Score (if available)</label>
          <input 
            type="number"
            {...register('cibilScore', { 
              min: { value: 300, message: 'CIBIL score must be between 300-900' },
              max: { value: 900, message: 'CIBIL score must be between 300-900' }
            })}
          />
          {errors.cibilScore && <span className="error">{errors.cibilScore.message}</span>}
        </div>

        {/* Current EMIs */}
        <div className="form-group">
          <label>Current EMIs (₹)</label>
          <input 
            type="number"
            {...register('currentEMIs', { 
              min: { value: 0, message: 'EMI cannot be negative' }
            })}
          />
          {errors.currentEMIs && <span className="error">{errors.currentEMIs.message}</span>}
        </div>

        <button type="submit" className="submit-btn">
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default LoanForm;
