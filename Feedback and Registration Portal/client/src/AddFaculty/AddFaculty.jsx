import * as React from "react";
import * as ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
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
  FormCheckbox,
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
import { Link } from "react-router-dom";
import { apiCallGet, apiCallPost, apiCallPostToken } from "../ApiCall/ApiCall";
import Cookies from "universal-cookie";
// import apiCall from "./ApiCall";

export const AddFaculty = () => {
  // const [step, setStep] = React.useState(0);
  const [formState, setFormState] = React.useState({});
  const [courses, setCourses] = React.useState([]);

  // const courses = [
  //   { code: 101, name: "DBMS" },
  //   { code: 102, name: "CN" },
  //   { code: 103, name: "TOC" },
  //   { code: 104, name: "SA" },
  //   { code: 105, name: "TIS" },
  // ];

  // let courses = [];

  React.useEffect(async () => {
    const url = "http://localhost:5000/api/getCourses";
    const res = await apiCallGet(url);
    const result = res.msg;
    const initialState = result.map((e) => e);
    setCourses(initialState);
  }, []);

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

      setFormState(values);
      alert(JSON.stringify(values));
      let selectedCourses = [];
      if (values.DBMS === true) selectedCourses = [...selectedCourses, 101];
      if (values.CN === true) selectedCourses = [...selectedCourses, 102];
      if (values.TOC === true) selectedCourses = [...selectedCourses, 103];
      if (values.SA === true) selectedCourses = [...selectedCourses, 104];
      if (values.TIS === true) selectedCourses = [...selectedCourses, 105];
      // });
      console.log(selectedCourses);
      const url = "http://localhost:5000/api/addFaculty";
      const payload = {
        faculty: {
          id: values.id,
          name: values.name,
          courses: selectedCourses,
        },
      };
      // // const payload = JSON.stringify(values);
      const cookies = new Cookies();
      const token = cookies.get("accessToken");
      const response = await apiCallPostToken(url, payload, token);
      if (response.success === true) {
        alert("faculty added");
        history.replace("/");
        window.location.reload(true);
      }
      // if (!!res.error) {
      //   throw Error(res.error);
      // }
      // } catch (e) {
      //   throw e;
      // }
      // const response = await fetch("http://localhost:5000/api/register", {
      //   method: "POST",
      //   headers: {
      //     "content-type": "application/json",
      //     accept: "application/json",
      //   },
      //   body: JSON.stringify({
      //     user: {
      //       username: "BT21CSE001",
      //       Faculty Name: "ashishpassword",
      //       year: 3,
      //       semester: 6,
      //       section: "A",
      //       courses: [101, 102],
      //     },
      //   }),
      // });
      // const jsonResponse = await response.json();
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
                  <div className="head form-content-separator">Add Faculty</div>
                  <Field
                    key={"id"}
                    id={"id"}
                    name={"id"}
                    label={"Faculty ID"}
                    component={FormInput}
                    // validator={nameValidator}
                  />
                  <Field
                    key={"name"}
                    id={"name"}
                    name={"name"}
                    label={"Faculty Name"}
                    component={FormInput}
                    // validator={requiredValidator}
                  />

                  <div className="courses_heading_signup">Courses Taken:</div>
                  {courses.map((course) => {
                    return (
                      <Field
                        key={course.name}
                        id={course.name}
                        name={course.name}
                        label={course.name}
                        component={FormCheckbox}
                        // validator={requiredValidator}
                      />
                    );
                  })}
                  {/* {typeof courses} */}
                  {/* {courses[0]} */}
                  {/* {courses.map((ele) => {
                    const course = ele.name;
                    return ele;
                    return (
                      <Field
                        key={ele}
                        id={ele}
                        name={ele}
                        label={ele}
                        component={FormCheckbox}
                        // validator={requiredValidator}
                      />
                    );
                  })} */}
                  {/* {courses.forEach((ele) => {
                    // const course = ele.name;
                    return (
                      <Field
                        key={ele}
                        id={ele}
                        name={ele}
                        label={ele}
                        component={FormCheckbox}
                        // validator={requiredValidator}
                      />
                    );
                  })} */}
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

export default AddFaculty;
