import * as React from "react";
import { Field } from "@progress/kendo-react-form";
import { countries, genders, rating, yesNo } from "../Helpers/Data";
import {
  FormInput,
  FormUpload,
  FormRadioGroup,
  FormTextArea,
} from "../Helpers/FormComponents";
import {
  userNameValidator,
  emailValidator,
  passwordValidator,
  requiredValidator,
} from "../Helpers/Validators";
export const SA = (
  <div>
    <Field
      key={"saQ1"}
      id={"saQ1"}
      name={"saQ1"}
      label={
        "Has the Teacher covered entire Syllabus as prescribed by University?"
      }
      layout={"horizontal"}
      component={FormRadioGroup}
      data={yesNo}
      // validator={resaQuiredValidator}
    />
    <div style={{ fontWeight: "bold" }}>
      Effectiveness of Teacher in terms of:
    </div>
    <Field
      key={"saQ2"}
      id={"saQ2"}
      name={"saQ2"}
      label={"Technical content"}
      layout={"horizontal"}
      component={FormRadioGroup}
      data={rating}
      // validator={resaQuiredValidator}
    />
    <Field
      key={"saQ3"}
      id={"saQ3"}
      name={"saQ3"}
      label={"Communication skills"}
      layout={"horizontal"}
      component={FormRadioGroup}
      data={rating}
      // validator={resaQuiredValidator}
    />
    <Field
      key={"saQ4"}
      id={"saQ4"}
      name={"saQ4"}
      label={
        "Availability beyond normal classes and co-operation to solve individual problems"
      }
      layout={"horizontal"}
      component={FormRadioGroup}
      data={rating}
      // validator={resaQuiredValidator}
    />
    <Field
      key={"saQ5"}
      id={"saQ5"}
      name={"saQ5"}
      label={"Pace on which contents were covered"}
      layout={"horizontal"}
      component={FormRadioGroup}
      data={rating}
      // validator={resaQuiredValidator}
    />
    <Field
      key={"saQ6"}
      id={"saQ6"}
      name={"saQ6"}
      label={"Overall effectiveness"}
      layout={"horizontal"}
      component={FormRadioGroup}
      data={rating}
      // validator={resaQuiredValidator}
    />
    <Field
      key={"saQ7"}
      id={"saQ7"}
      name={"saQ7"}
      label={"How do you rate the contents of the curricular?"}
      layout={"horizontal"}
      component={FormRadioGroup}
      data={rating}
      // validator={resaQuiredValidator}
    />
    <Field
      key={"saQ8"}
      id={"saQ8"}
      name={"saQ8"}
      label={"How do you rate lab experiments, if applicable?"}
      layout={"horizontal"}
      component={FormRadioGroup}
      data={rating}
      // validator={resaQuiredValidator}
    />
    <Field
      key={"saQ9"}
      id={"saQ9"}
      name={"saQ9"}
      label={"Any remarks"}
      layout={"horizontal"}
      component={FormTextArea}
      data={rating}
      // validator={requiredValidator}
    />

    {/* <Field
      key={"userName"}
      id={"userName"}
      name={"userName"}
      label={"Username"}
      component={FormInput}
      validator={userNameValidator}
    />
    <Field
      key={"email"}
      id={"email"}
      name={"email"}
      label={"Email"}
      hint={"Hint: Enter your personal email address."}
      type={"email"}
      component={FormInput}
      validator={emailValidator}
    />
    <Field
      key={"password"}
      id={"password"}
      name={"password"}
      label={"Password"}
      type={"password"}
      component={FormInput}
      validator={passwordValidator}
    />
    <Field
      key={"avatar"}
      id={"avatar"}
      name={"avatar"}
      label={"Avatar"}
      optional={true}
      hint={"Hint: Upload your avatar picture"}
      component={FormUpload}
    /> */}
  </div>
);
