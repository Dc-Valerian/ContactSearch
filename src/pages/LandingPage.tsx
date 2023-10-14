// MultiStepForm.tsx
import React, { useState } from "react";
import styled from "styled-components";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

interface FormData {
  step1: string;
  step2: string;
  step3: string;
  step4: string;
}

const MultiStepForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    step1: "",
    step2: "",
    step3: "",
    step4: "",
  });

  const [currentStep, setCurrentStep] = useState<number>(1);

  const handleNextStep = () => {
    // Implement validation logic for each step before allowing progression
    if (currentStep === 1 && !formData.step1) {
      alert("Please fill in Step 1 before proceeding.");
    } else if (currentStep === 2 && !formData.step2) {
      alert("Please fill in Step 2 before proceeding.");
    } else if (currentStep === 3 && !formData.step3) {
      alert("Please fill in Step 3 before proceeding.");
    } else {
      // If validation passed, move to the next step
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePreviousStep = () => {
    // Move back to the previous step
    setCurrentStep(currentStep - 1);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <FormContainer>
      <CircleIndicators>
        <Circle active={currentStep >= 1} />
        <Circle active={currentStep >= 2} />
        <Circle active={currentStep >= 3} />
        <Circle active={currentStep >= 4} />
      </CircleIndicators>
      <StepContainer>
        {currentStep === 1 && (
          <Step1 formData={formData} handleChange={handleChange} />
        )}

        {currentStep === 2 && (
          <Step2 formData={formData} handleChange={handleChange} />
        )}

        {currentStep === 3 && (
          <Step3 formData={formData} handleChange={handleChange} />
        )}

        {currentStep === 4 && (
          <Step4 formData={formData} handleChange={handleChange} />
        )}
      </StepContainer>
      <ButtonContainer>
        {currentStep > 1 && (
          <Button onClick={handlePreviousStep}>Previous</Button>
        )}
        {currentStep < 4 && (
          <Button onClick={handleNextStep}>Next</Button>
        )}
      </ButtonContainer>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const CircleIndicators = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
`;

interface CircleProps {
  active: boolean;
}

const Circle = styled.div<CircleProps>`
  width: 20px;
  height: 20px;
  background-color: ${(props) => (props.active ? "green" : "#ccc")};
  border-radius: 50%;
`;

const StepContainer = styled.div`
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #f15a22;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #d84315;
  }
`;

export default MultiStepForm;
