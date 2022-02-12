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
export const CN = (
  <div>
    <Field
      key={"cnQ1"}
      id={"cnQ1"}
      name={"cnQ1"}
      label={
        "Has the Teacher covered entire Syllabus as prescribed by University?"
      }
      layout={"horizontal"}
      component={FormRadioGroup}
      data={yesNo}
      // validator={recnQuiredValidator}
    />
    <div style={{ fontWeight: "bold" }}>
      Effectiveness of Teacher in terms of:
    </div>
    <Field
      key={"cnQ2"}
      id={"cnQ2"}
      name={"cnQ2"}
      label={"Technical content"}
      layout={"horizontal"}
      component={FormRadioGroup}
      data={rating}
      // validator={recnQuiredValidator}
    />
    <Field
      key={"cnQ3"}
      id={"cnQ3"}
      name={"cnQ3"}
      label={"Communication skills"}
      layout={"horizontal"}
      component={FormRadioGroup}
      data={rating}
      // validator={recnQuiredValidator}
    />
    <Field
      key={"cnQ4"}
      id={"cnQ4"}
      name={"cnQ4"}
      label={
        "Availability beyond normal classes and co-operation to solve individual problems"
      }
      layout={"horizontal"}
      component={FormRadioGroup}
      data={rating}
      // validator={recnQuiredValidator}
    />
    <Field
      key={"cnQ5"}
      id={"cnQ5"}
      name={"cnQ5"}
      label={"Pace on which contents were covered"}
      layout={"horizontal"}
      component={FormRadioGroup}
      data={rating}
      // validator={recnQuiredValidator}
    />
    <Field
      key={"cnQ6"}
      id={"cnQ6"}
      name={"cnQ6"}
      label={"Overall effectiveness"}
      layout={"horizontal"}
      component={FormRadioGroup}
      data={rating}
      // validator={recnQuiredValidator}
    />
    <Field
      key={"cnQ7"}
      id={"cnQ7"}
      name={"cnQ7"}
      label={"How do you rate the contents of the curricular?"}
      layout={"horizontal"}
      component={FormRadioGroup}
      data={rating}
      // validator={recnQuiredValidator}
    />
    <Field
      key={"cnQ8"}
      id={"cnQ8"}
      name={"cnQ8"}
      label={"How do you rate lab experiments, if applicable?"}
      layout={"horizontal"}
      component={FormRadioGroup}
      data={rating}
      // validator={recnQuiredValidator}
    />
    <Field
      key={"cnQ9"}
      id={"cnQ9"}
      name={"cnQ9"}
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
