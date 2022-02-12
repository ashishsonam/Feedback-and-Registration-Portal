import * as React from "react";
import { useHistory } from "react-router-dom";
import * as ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { Form, FormElement } from "@progress/kendo-react-form";
import { Button } from "@progress/kendo-react-buttons";
import { Stepper } from "@progress/kendo-react-layout";
// import { PersonalDetails } from "./PersonalDetails";
// import { JeeDetails } from "./JeeDetails";
// import { FeeDetails } from "./FeeDetails";
// import { Address } from "./Address";
// import { Education } from "./Education";
// import { Documents } from "./Documents";
import { Field } from "@progress/kendo-react-form";
import {
  FormInput,
  FormAutoComplete,
  FormRadioGroup,
  FormTextArea,
  FormDatePicker,
  FormDateInput,
  FormRating,
  FormNumericTextBox,
  FormDropDownTree,
  FormDropDownList,
} from "../Helpers/FormComponents";
import { nameValidator, requiredValidator } from "../Helpers/Validators";
import {
  category,
  countries,
  genders,
  minorityDetails,
  roundOfAllotment,
  yesNo,
  states,
  state_district,
} from "../Helpers/Data";
import Cookies from "universal-cookie";
import { Link } from "react-router-dom";
import { apiCallPost, apiCallPostToken } from "../ApiCall/ApiCall";
// import "./Registration.css";
// import { DBMS } from "./DBMS";
// import { Details } from "./Details";
// import { CN } from "./Feedback/CN";
// import { TOC } from "./TOC";
// import { SA } from "./SA";
// import { TIS } from "./TIS";
// const stepPages = [
//   PersonalDetails,
//   JeeDetails,
//   FeeDetails,
//   Address,
//   Education,
//   Documents,
// ];
export const AddCourses = () => {
  // const [step, setStep] = React.useState(0);
  const [formState, setFormState] = React.useState({});
  // const [steps, setSteps] = React.useState([
  //   {
  //     label: "Personal Details",
  //     isValid: undefined,
  //   },
  //   {
  //     label: "JEE Details",
  //     isValid: undefined,
  //   },
  //   {
  //     label: "Fee Details",
  //     isValid: undefined,
  //   },
  //   {
  //     label: "Address",
  //     isValid: undefined,
  //   },
  //   {
  //     label: "Education",
  //     isValid: undefined,
  //   },
  //   {
  //     label: "Documents",
  //     isValid: undefined,
  //   },
  // ]);

  const [correspondenceState, setCorrespondenceState] = React.useState("");
  const history = useHistory();
  // const [permanentState, setPermanentState] = React.useState("");

  // const lastStepIndex = steps.length - 1;
  // const isLastStep = lastStepIndex === step;
  const onStepSubmit = React.useCallback(
    async (event) => {
      const { isValid, values } = event;
      // const currentSteps = steps.map((currentStep, index) => ({
      //   ...currentStep,
      //   isValid: index === step ? isValid : currentStep.isValid,
      // }));
      // setSteps(currentSteps);

      if (!isValid) {
        return;
      }

      // setStep(() => Math.min(step + 1, lastStepIndex));
      setFormState(values);
      // setCorrespondenceState(values.correspondenceState);
      // setPermanentState(values.permanentState);

      // if (isLastStep) {
      alert(JSON.stringify(values));

      const url = "http://localhost:5000/api/addCourse";
      const payload = {
        course: {
          code: values.code,
          name: values.name,
        },
      };
      // // const payload = JSON.stringify(values);
      const cookies = new Cookies();
      const token = cookies.get("accessToken");
      // cookies.set("accessToken", response.accessToken, { path: "/" });
      // console.log(response);
      // console.log(cookies.get("accessToken"));
      const response = await apiCallPostToken(url, payload, token);
      if (response.success === true) {
        alert("course added");
        history.replace("/");
        window.location.reload(true);
      }
      // }
    }
    // [steps, isLastStep, step, lastStepIndex]
  );

  const onPrevClick = React.useCallback(
    (event) => {
      event.preventDefault();
      // setStep(() => Math.max(step - 1, 0));
    }
    // [step, setStep]
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
      {/* <Stepper value={step} items={steps} /> */}
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
                width: 350,
              }}
            >
              {
                <div>
                  <div className="head form-content-separator">Add Course</div>
                  <Field
                    key={"name"}
                    id={"name"}
                    name={"name"}
                    label={"Course Name"}
                    component={FormInput}
                    // validator={nameValidator}
                  />
                  <Field
                    key={"code"}
                    id={"code"}
                    name={"code"}
                    label={"Course Code"}
                    component={FormInput}
                    // data={(function () {
                    //   const stateNames = [];
                    //   states.forEach((state) => {
                    //     stateNames.push(state.name);
                    //   });
                    //   return stateNames;
                    // })()}
                    // validator={requiredValidator}
                  />
                </div>
              }
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
                <div>
                  {/* {
                    <Button
                      style={{
                        marginRight: "16px",
                      }}
                      onClick={onPrevClick}
                    >
                      Previous
                    </Button>
                  } */}
                  <Button
                    primary={true}
                    // disabled={!formRenderProps.allowSubmit}
                    // onClick={formRenderProps.onSubmit}
                  >
                    Add
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

export default AddCourses;
