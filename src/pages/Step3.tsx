// Step3.tsx
import React from "react";
import styled from "styled-components";

interface Step3Props {
  formData: { step3: string };
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Step3: React.FC<Step3Props> = ({ formData, handleChange }) => {
  return (
    <StepContainer>
      <Input
        type="text"
        name="step3"
        placeholder="Step 3 Input"
        value={formData.step3}
        onChange={handleChange}
      />
      <Input
        type="text"
        name="step3"
        placeholder="Step 3 Input"
        value={formData.step3}
        onChange={handleChange}
      />
      <Input
        type="text"
        name="step3"
        placeholder="Step 3 Input"
        value={formData.step3}
        onChange={handleChange}
      />
    </StepContainer>
  );
};

const StepContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 300px;
`;

export default Step3;
