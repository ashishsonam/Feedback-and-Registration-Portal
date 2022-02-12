import * as React from "react";
import * as ReactDOM from "react-dom";
import { Form, FormElement } from "@progress/kendo-react-form";
import { Button } from "@progress/kendo-react-buttons";
import { Stepper } from "@progress/kendo-react-layout";
import { DBMS } from "./DBMS";
import { Details } from "./Details";
import { CN } from "./CN";
import { TOC } from "./TOC";
import { SA } from "./SA";
import { TIS } from "./TIS";
import { apiCallGetToken, apiCallPostToken } from "../ApiCall/ApiCall";
import Cookies from "universal-cookie";

let stepPages = [Details];

export const Feedback = () => {
  const [step, setStep] = React.useState(0);
  const [formState, setFormState] = React.useState({});
  const [steps, setSteps] = React.useState([]);
  const [selectedCourses, setSelectedCourses] = React.useState([]);

  let arr = [];
  let newArr = [
    {
      label: "Details",
      isValid: undefined,
    },
  ];
  React.useEffect(async () => {
    const cookies = new Cookies();
    const accessToken = cookies.get("accessToken");

    const url = "http://localhost:5000/api/getCoursesSpecific";
    const res = await apiCallGetToken(url, accessToken);
    if (res.success === true) {
      const result = res.msg;
      result.map((e) => {
        arr.push(e.code);
        newArr.push({
          label: e.name,
          isValid: undefined,
        });
        if (e.name === "DBMS") {
          stepPages.push(DBMS);
        } else if (e.name === "CN") {
          stepPages.push(CN);
        } else if (e.name === "TOC") {
          stepPages.push(TOC);
        } else if (e.name === "SA") {
          stepPages.push(SA);
        } else if (e.name === "TIS") {
          stepPages.push(TIS);
        }
      });
    }
    setSteps(newArr);
    setSelectedCourses(arr);
  }, []);

  const lastStepIndex = steps.length - 1;
  const isLastStep = lastStepIndex === step;

  const onStepSubmit = React.useCallback(
    async (event) => {
      const { isValid, values } = event;
      const currentSteps = steps.map((currentStep, index) => ({
        ...currentStep,
        isValid: index === step ? isValid : currentStep.isValid,
      }));
      setSteps(currentSteps);

      if (!isValid) {
        return;
      }

      setStep(() => Math.min(step + 1, lastStepIndex));
      setFormState(values);

      if (isLastStep) {
        alert(JSON.stringify(values));
        let dataArr = [];
        selectedCourses.map((e) => {
          if (e === 101) {
            dataArr.push({
              course_code: e,
              q1: values.dbmsQ1,
              q2: values.dbmsQ2,
              q3: values.dbmsQ3,
              q4: values.dbmsQ4,
              q5: values.dbmsQ5,
              q6: values.dbmsQ6,
              q7: values.dbmsQ7,
              q8: values.dbmsQ8,
              q9: values.dbmsQ9,
            });
          } else if (e === 102) {
            dataArr.push({
              course_code: e,
              q1: values.cnQ1,
              q2: values.cnQ2,
              q3: values.cnQ3,
              q4: values.cnQ4,
              q5: values.cnQ5,
              q6: values.cnQ6,
              q7: values.cnQ7,
              q8: values.cnQ8,
              q9: values.cnQ9,
            });
          } else if (e === 103) {
            dataArr.push({
              course_code: e,
              q1: values.tocQ1,
              q2: values.tocQ2,
              q3: values.tocQ3,
              q4: values.tocQ4,
              q5: values.tocQ5,
              q6: values.tocQ6,
              q7: values.tocQ7,
              q8: values.tocQ8,
              q9: values.tocQ9,
            });
          } else if (e === 104) {
            dataArr.push({
              course_code: e,
              q1: values.saQ1,
              q2: values.saQ2,
              q3: values.saQ3,
              q4: values.saQ4,
              q5: values.saQ5,
              q6: values.saQ6,
              q7: values.saQ7,
              q8: values.saQ8,
              q9: values.saQ9,
            });
          } else if (e === 105) {
            dataArr.push({
              course_code: e,
              q1: values.tisQ1,
              q2: values.tisQ2,
              q3: values.tisQ3,
              q4: values.tisQ4,
              q5: values.tisQ5,
              q6: values.tisQ6,
              q7: values.tisQ7,
              q8: values.tisQ8,
              q9: values.tisQ9,
            });
          }
        });

        const cookies = new Cookies();
        const accessToken = cookies.get("accessToken");
        let usernamevar;

        const usernameUrl = "http://localhost:5000/api/getUsername";
        const res = await apiCallGetToken(usernameUrl, accessToken);

        if (res.success === true) {
          const result = res.username;
          usernamevar = result;
        }

        const url = "http://localhost:5000/api/postFeedback";
        const payload = {
          feedback: {
            student_id: usernamevar,
            courses: dataArr,
          },
        };

        const response = await apiCallPostToken(url, payload, accessToken);
        if (response.success === true) {
          console.log(response);
        }
      }
    },
    [steps, isLastStep, step, lastStepIndex]
  );
  const onPrevClick = React.useCallback(
    (event) => {
      event.preventDefault();
      setStep(() => Math.max(step - 1, 0));
    },
    [step, setStep]
  );
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div style={{ height: 50 }}></div>
      <Stepper value={step} items={steps} />
      <Form
        initialValues={formState}
        onSubmitClick={onStepSubmit}
        render={(formRenderProps) => (
          <div
            style={{
              alignSelf: "center",
            }}
          >
            <FormElement
              style={{
                width: step == 0 ? 400 : 800,
              }}
            >
              {stepPages[step]}
              <span
                style={{
                  marginTop: "40px",
                }}
                className={"k-form-separator"}
              />
              <div
                style={{
                  justifyContent: "space-between",
                  alignContent: "center",
                }}
                className={"k-form-buttons k-buttons-end"}
              >
                <span
                  style={{
                    alignSelf: "center",
                  }}
                >
                  Step {step + 1} of 6
                </span>
                <div>
                  {step !== 0 ? (
                    <Button
                      style={{
                        marginRight: "16px",
                      }}
                      onClick={onPrevClick}
                    >
                      Previous
                    </Button>
                  ) : undefined}
                  <Button
                    primary={true}
                    disabled={!formRenderProps.allowSubmit}
                    onClick={formRenderProps.onSubmit}
                  >
                    {isLastStep ? "Submit" : "Next"}
                  </Button>
                </div>
              </div>
            </FormElement>
          </div>
        )}
      />
    </div>
  );
};

export default Feedback;
