// Step1.tsx
import React from "react";
import styled from "styled-components";

interface Step1Props {
  formData: { step1: string };
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Step1: React.FC<Step1Props> = ({ formData, handleChange }) => {
  return (
    <StepContainer>
      <Input
        type="text"
        name="step1"
        placeholder="Step 1 Input"
        value={formData.step1}
        onChange={handleChange}
      />
      <Input
        type="text"
        name="step1"
        placeholder="Step 1 Input"
        value={formData.step1}
        onChange={handleChange}
      />
      <Input
        type="text"
        name="step1"
        placeholder="Step 1 Input"
        value={formData.step1}
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

export default Step1;
