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
export const TIS = (
  <div>
    <Field
      key={"tisQ1"}
      id={"tisQ1"}
      name={"tisQ1"}
      label={
        "Has the Teacher covered entire Syllabus as prescribed by University?"
      }
      layout={"horizontal"}
      component={FormRadioGroup}
      data={yesNo}
      // validator={retisQuiredValidator}
    />
    <div style={{ fontWeight: "bold" }}>
      Effectiveness of Teacher in terms of:
    </div>
    <Field
      key={"tisQ2"}
      id={"tisQ2"}
      name={"tisQ2"}
      label={"Technical content"}
      layout={"horizontal"}
      component={FormRadioGroup}
      data={rating}
      // validator={retisQuiredValidator}
    />
    <Field
      key={"tisQ3"}
      id={"tisQ3"}
      name={"tisQ3"}
      label={"Communication skills"}
      layout={"horizontal"}
      component={FormRadioGroup}
      data={rating}
      // validator={retisQuiredValidator}
    />
    <Field
      key={"tisQ4"}
      id={"tisQ4"}
      name={"tisQ4"}
      label={
        "Availability beyond normal classes and co-operation to solve individual problems"
      }
      layout={"horizontal"}
      component={FormRadioGroup}
      data={rating}
      // validator={retisQuiredValidator}
    />
    <Field
      key={"tisQ5"}
      id={"tisQ5"}
      name={"tisQ5"}
      label={"Pace on which contents were covered"}
      layout={"horizontal"}
      component={FormRadioGroup}
      data={rating}
      // validator={retisQuiredValidator}
    />
    <Field
      key={"tisQ6"}
      id={"tisQ6"}
      name={"tisQ6"}
      label={"Overall effectiveness"}
      layout={"horizontal"}
      component={FormRadioGroup}
      data={rating}
      // validator={retisQuiredValidator}
    />
    <Field
      key={"tisQ7"}
      id={"tisQ7"}
      name={"tisQ7"}
      label={"How do you rate the contents of the curricular?"}
      layout={"horizontal"}
      component={FormRadioGroup}
      data={rating}
      // validator={retisQuiredValidator}
    />
    <Field
      key={"tisQ8"}
      id={"tisQ8"}
      name={"tisQ8"}
      label={"How do you rate lab experiments, if applicable?"}
      layout={"horizontal"}
      component={FormRadioGroup}
      data={rating}
      // validator={retisQuiredValidator}
    />
    <Field
      key={"tisQ9"}
      id={"tisQ9"}
      name={"tisQ9"}
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
