// my-element.js
import { LitElement, html, css } from 'lit';

class RegistrationForm extends LitElement {
    static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color:antiquewhite
    }
    .form-container {
        /* Add your styles here */
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        // max-width: 400px; /* Or any other width */
        width:50%
        margin: auto; /* To center the form on the page */
        padding: 20px;
        box-shadow: 0 0 10px rgba(0,0,0,0.1); /* Optional: for a slight shadow */
        background-color: #fff; /* Optional: if you want a different background */
        border-radius: 8px; /* Optional: for rounded corners */
      }
      
    /* Container styles */
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 10px;
    }

    /* Label styles */
    label {
      margin-bottom: 5px;
      min-width: 100px;
    }

    /* Input styles */
    input, select {
        width: 650px; /* for example, set a fixed width */
        padding: 8px;
        border: 1px solid #ccc; /* Standardize border */
        border-radius: 4px; /* Optional: if you want rounded corners */
        box-sizing: border-box; /* This ensures padding doesn't affect the final size */
        min-height: 40px; /* Optional: if you want a specific height */
      }

    /* Button styles */
    button {
        background-color: #4caf50; /* Normal background color */
        width: 650px; 
        color: white;
        padding: 10px 15px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        margin-left: 112px;
        transition: background-color 0.3s; /* Smooth transition for hover effect */
      }
      
      button:hover {
        background-color: #45a049; /* Darker green on hover */
      }
      
      button:disabled {
        background-color: #9e9e9e; /* Faded color when disabled */
        cursor: not-allowed; /* Change cursor to indicate the button is disabled */
        opacity: 0.7; /* Make the button look faded */
      }

    /* Media query for responsiveness */
    @media (min-width: 600px) {
      div {
        flex-direction: row;
        align-items: center;
      }

      label {
        margin-right: 10px;
        margin-bottom: 0;
      }

      input, select {
        margin-bottom: 0;
      }
      
    }
    @media (max-width: 600px) {
        div {
          flex-direction: row;
          align-items: center;
        }
  
        label {
          margin-right: 10px;
          margin-bottom: 0;
        }
  
        input, select {
          margin-bottom: 0;
        }
        button {
            background-color: #4caf50;
            width: 300px; 
            color: white;
            padding: 10px 15px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            // margin-left:112px;
          }
        
      }
  `;

  static properties = {
    /* Your properties here */
    states: { type: Array },
    affiliations: { type: Array },
    selectedState: { type: String },
    selectedAffiliation: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
  };

  constructor() {
    super();
    // Initialize properties here
    this.states = ['NY', 'CA', 'FL'];
    this.affiliations = {
      NY: ['L100', 'L102', 'L105'],
      CA: ['C31', 'C1', 'C3'],
      FL: ['R-Retiree 1', 'R-Retiree 2'],
    };
    this.selectedState = '';
    this.selectedAffiliation = '';
    this.firstName = '';
    this.lastName = '';
    this.email = '';
  }

  render() {
    return html`
      <div class="form-container">
      <form @submit="${this._handleSubmit}">
        <div>
          <label for="firstName">First Name:</label>
          <input id="firstName" type="text" .value="${this.firstName}" @input="${this._handleInput}">
        </div>
  
        <div>
          <label for="lastName">Last Name:</label>
          <input id="lastName" type="text" .value="${this.lastName}" @input="${this._handleInput}">
        </div>
  
        <div>
        <label for="state">State:</label>
        <select id="state" @change="${this._handleStateChange}">
          <option value="">Select State</option>
          ${this.states.map(state => html`<option value="${state}">${state}</option>`)}
        </select>
      </div>
  
      <div>
      <label for="affiliation">Affiliation:</label>
      <select id="affiliation" ?disabled="${!this.selectedState}" @change="${this._handleAffiliationChange}">
        <option value="">Select Affiliation</option>
        ${(this.affiliations[this.selectedState] || []).map(affiliation => html`<option value="${affiliation}">${affiliation}</option>`)}
      </select>
    </div>
  
        <div>
          <label for="email">Email:</label>
          <input
            id="email"
            type="email"
            .value="${this.email}"
            @input="${this._handleInput}"
            aria-describedby="emailError"
            pattern=".+@\\S+\\.com"
            title="Please include an '@' in the email address 'example@domain.com'"
            required
          >
 
        </div>
        <div id="emailError" style="color: red; display: none;">
        Please include an '@' in the email address'
      </div>
        
        <button 
        @click="${this._handleRegister}"
        ?disabled="${!this._isFormValid()}">Register</button>
        </form>
      </div>
    `;
  }
  _isFormValid() {
    // Check if all fields are filled and email is valid
    return (
      this.firstName.trim() !== '' &&
      this.lastName.trim() !== '' &&
      this.selectedState.trim() !== '' &&
      this.selectedAffiliation.trim() !== '' &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email)
    );
  }
  
  _handleInput(event) {
    const { id, value } = event.target;
    this[id] = value;
    this.requestUpdate();
    // Only perform the email validation check if the email field was changed
    if (id === 'email') {
      const emailInput = this.shadowRoot.getElementById('email');
      const emailError = this.shadowRoot.getElementById('emailError');
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex
  
      if (!regex.test(value)) {
        // If the email is not valid, show the error message
        emailError.style.display = 'block';
        emailInput.setCustomValidity("Please include an '@' in the email address 'example@domain.com'");
      } else {
        // If the email is valid, hide the error message
        emailError.style.display = 'none';
        emailInput.setCustomValidity('');
      }
    }
  }
  _handleStateChange(event) {
    this.selectedState = event.target.value;
    this.selectedAffiliation = '';
    this.requestUpdate(); // Reset selected affiliation when state changes
  }
  _handleAffiliationChange(event) {
    this.selectedAffiliation = event.target.value;
    this.requestUpdate();
  }
  async connectedCallback() {
    super.connectedCallback();
    await this.fetchStatesAndAffiliations();
  }
  
  async fetchStatesAndAffiliations() {
    try {
      const statesResponse = await fetch('STATES_API_ENDPOINT');
    console.log(statesResponse,"logs")
      if (!statesResponse.ok) {
        throw new Error(`HTTP error! Status: ${statesResponse.status}`);
      }
      this.states = await statesResponse.json();
  
      const affiliationsResponse = await fetch('AFFILIATIONS_API_ENDPOINT');
      if (!affiliationsResponse.ok) {
        throw new Error(`HTTP error! Status: ${affiliationsResponse.status}`);
      }
      this.affiliations = await affiliationsResponse.json();
    } catch (error) {
      console.error('Failed to fetch states or affiliations', error);
      // Handle the error, maybe set states and affiliations to empty arrays
    }
  }
  
  _handleSubmit(event) {
    event.preventDefault(); // Prevents the default form submission behavior
    const formData = {
      name: this.firstName + this.lastName,
      state_id: this.selectedState,
      affilate_id: this.selectedAffiliation,
      email: this.email
    };
    console.log("form data",formData)
  
    this._submitDataToApi(formData);
  }
  async _submitDataToApi(formData) {
    try {
      const token = 'eyJraWQiOiJERTJ2cE0zcmRic1BRN3lySUI5VjZJOGlXQ2VTdVdQOGRpblFWZ0YxelFVPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJjZTE0OWVjMS1lN2YzLTRhNzUtYTA0NS0yZmU5YTBmOTRmYzkiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tXC91cy1lYXN0LTFfcEh0RkxIVFVUIiwiY29nbml0bzp1c2VybmFtZSI6Im1vaHNpbiIsIm9yaWdpbl9qdGkiOiJhMGFmMzIxOC03MWFkLTQ2YTktODE1ZC05ZjkzYThjNzRmOGIiLCJhdWQiOiIyczkxYWs1ZmhjNTJpY21qdmlmNDNncmppdiIsImV2ZW50X2lkIjoiODZjOTgwYjYtNDQ4Zi00YjUzLTkwYzQtNzBiNmQ3OTE5YmNmIiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE3MDQ5MTY5OTIsImV4cCI6MTcwNTAwMzM5MSwiaWF0IjoxNzA0OTE2OTkyLCJqdGkiOiIwZmNlOGIwMS1hNmQwLTQxNDYtODZlNi1kYTg5Y2RjODRiOWYiLCJlbWFpbCI6Im1vaHNpbmFsaXNoYWtlZWw5OEBnbWFpbC5jb20ifQ.STa8kGLavl7LcGHjy30OQ2TKt6NtvcJGnY_kGGtgwuLWF-bjkHTzG3VTcTOan4R3sJ-C8B9jFfv_1qH-Co8USqwndYQEZ3w8D3GK2rs-nSDWcDXxJWydgSibA4VcTspGQRDMVJtKCkqxDKZSuDlL6_Q4ebh4Ly9fVHUqiQn5PxVYRg9DNHMMpPpkjXOFaP9IZsSs4Sbbm1X-uRucJaPIgeQ5T9uj59SRqoq7CnqGmRjE2jvIFHKMCQ6Y2zMaV2_EI8e2hoaCOmcWAjmKNpR4xQcFsoS95mHhGSh9wNiiTJr8Nem8oSOOjPMw0PUJGpI6ymGqyVIQZMgsCtfGRJdvuw';
      const response = await fetch('https://jp1ri8tlx0.execute-api.us-east-1.amazonaws.com/dev/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log('Submission successful', data);
      alert('Your Account has been submitted to AFSCME for review.');
      // Handle success, maybe clear form or show a success message
    } catch (error) {
      console.error('Submission failed', error);
      // Handle error, maybe show an error message
    }
  }
  
  // _handleRegister() {
  //   // Implement logic to send registration data to the server (Lambda function)
  //   // Display a popup message with the registration confirmation
  //   alert('Your Account has been submitted to AFSCME for review.');
  // }
}

customElements.define('registration-form', RegistrationForm);
