// Step4.tsx
import React from "react";
import styled from "styled-components";

interface Step4Props {
  formData: { step4: string };
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Step4: React.FC<Step4Props> = ({ formData, handleChange }) => {
  return (
    <StepContainer>
      <Input
        type="text"
        name="step4"
        placeholder="Step 4 Input"
        value={formData.step4}
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

export default Step4;
