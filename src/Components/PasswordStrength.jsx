import React from 'react'

function PasswordStrength(password) {

const getPasswordStrength = () => {
        const passwordLength = password.length;

        if(passwordLength < 1) {
            return "";
        } else if( passwordLength < 4) {
            return "very Weak";
        } else if( passwordLength < 8) {
            return "Medium";
        } else if( passwordLength < 12) {
            return "Strong";
        } else {
            return "Very Strong";
        } 
    };

      const passwordStrength = getPasswordStrength();
      if (!passwordStrength) return <React.Fragment />

  return (
    <div>
      <div className="password-strength">
        Strength: <span style={{ fontWeight: "bold" }}>{passwordStrength}</span>
      </div>
    </div>
  );
}

export default PasswordStrength
