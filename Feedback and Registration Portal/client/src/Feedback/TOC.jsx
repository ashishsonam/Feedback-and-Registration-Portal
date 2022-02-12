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
export const TOC = (
  <div>
    <Field
      key={"tocQ1"}
      id={"tocQ1"}
      name={"tocQ1"}
      label={
        "Has the Teacher covered entire Syllabus as prescribed by University?"
      }
      layout={"horizontal"}
      component={FormRadioGroup}
      data={yesNo}
      // validator={retocQuiredValidator}
    />
    <div style={{ fontWeight: "bold" }}>
      Effectiveness of Teacher in terms of:
    </div>
    <Field
      key={"tocQ2"}
      id={"tocQ2"}
      name={"tocQ2"}
      label={"Technical content"}
      layout={"horizontal"}
      component={FormRadioGroup}
      data={rating}
      // validator={retocQuiredValidator}
    />
    <Field
      key={"tocQ3"}
      id={"tocQ3"}
      name={"tocQ3"}
      label={"Communication skills"}
      layout={"horizontal"}
      component={FormRadioGroup}
      data={rating}
      // validator={retocQuiredValidator}
    />
    <Field
      key={"tocQ4"}
      id={"tocQ4"}
      name={"tocQ4"}
      label={
        "Availability beyond normal classes and co-operation to solve individual problems"
      }
      layout={"horizontal"}
      component={FormRadioGroup}
      data={rating}
      // validator={retocQuiredValidator}
    />
    <Field
      key={"tocQ5"}
      id={"tocQ5"}
      name={"tocQ5"}
      label={"Pace on which contents were covered"}
      layout={"horizontal"}
      component={FormRadioGroup}
      data={rating}
      // validator={retocQuiredValidator}
    />
    <Field
      key={"tocQ6"}
      id={"tocQ6"}
      name={"tocQ6"}
      label={"Overall effectiveness"}
      layout={"horizontal"}
      component={FormRadioGroup}
      data={rating}
      // validator={retocQuiredValidator}
    />
    <Field
      key={"tocQ7"}
      id={"tocQ7"}
      name={"tocQ7"}
      label={"How do you rate the contents of the curricular?"}
      layout={"horizontal"}
      component={FormRadioGroup}
      data={rating}
      // validator={retocQuiredValidator}
    />
    <Field
      key={"tocQ8"}
      id={"tocQ8"}
      name={"tocQ8"}
      label={"How do you rate lab experiments, if applicable?"}
      layout={"horizontal"}
      component={FormRadioGroup}
      data={rating}
      // validator={retocQuiredValidator}
    />
    <Field
      key={"tocQ9"}
      id={"tocQ9"}
      name={"tocQ9"}
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
