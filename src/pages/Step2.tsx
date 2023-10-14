// Step2.tsx
import React from "react";
import styled from "styled-components";

interface Step2Props {
  formData: { step2: string };
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Step2: React.FC<Step2Props> = ({ formData, handleChange }) => {
  return (
    <StepContainer>
      <Input
        type="text"
        name="step2"
        placeholder="Step 2 Input"
        value={formData.step2}
        onChange={handleChange}
      />
      <Input
        type="text"
        name="step2"
        placeholder="Step 2 Input"
        value={formData.step2}
        onChange={handleChange}
      />
      <Input
        type="text"
        name="step2"
        placeholder="Step 2 Input"
        value={formData.step2}
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

export default Step2;
