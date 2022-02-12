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
export const DBMS = (
  <div>
    <Field
      key={"dbmsQ1"}
      id={"dbmsQ1"}
      name={"dbmsQ1"}
      label={
        "Has the Teacher covered entire Syllabus as prescribed by University?"
      }
      layout={"horizontal"}
      component={FormRadioGroup}
      data={yesNo}
      // validator={redbmsQuiredValidator}
    />
    <div style={{ fontWeight: "bold" }}>
      Effectiveness of Teacher in terms of:
    </div>
    <Field
      key={"dbmsQ2"}
      id={"dbmsQ2"}
      name={"dbmsQ2"}
      label={"Technical content"}
      layout={"horizontal"}
      component={FormRadioGroup}
      data={rating}
      // validator={redbmsQuiredValidator}
    />
    <Field
      key={"dbmsQ3"}
      id={"dbmsQ3"}
      name={"dbmsQ3"}
      label={"Communication skills"}
      layout={"horizontal"}
      component={FormRadioGroup}
      data={rating}
      // validator={redbmsQuiredValidator}
    />
    <Field
      key={"dbmsQ4"}
      id={"dbmsQ4"}
      name={"dbmsQ4"}
      label={
        "Availability beyond normal classes and co-operation to solve individual problems"
      }
      layout={"horizontal"}
      component={FormRadioGroup}
      data={rating}
      // validator={redbmsQuiredValidator}
    />
    <Field
      key={"dbmsQ5"}
      id={"dbmsQ5"}
      name={"dbmsQ5"}
      label={"Pace on which contents were covered"}
      layout={"horizontal"}
      component={FormRadioGroup}
      data={rating}
      // validator={redbmsQuiredValidator}
    />
    <Field
      key={"dbmsQ6"}
      id={"dbmsQ6"}
      name={"dbmsQ6"}
      label={"Overall effectiveness"}
      layout={"horizontal"}
      component={FormRadioGroup}
      data={rating}
      // validator={redbmsQuiredValidator}
    />
    <Field
      key={"dbmsQ7"}
      id={"dbmsQ7"}
      name={"dbmsQ7"}
      label={"How do you rate the contents of the curricular?"}
      layout={"horizontal"}
      component={FormRadioGroup}
      data={rating}
      // validator={redbmsQuiredValidator}
    />
    <Field
      key={"dbmsQ8"}
      id={"dbmsQ8"}
      name={"dbmsQ8"}
      label={"How do you rate lab experiments, if applicable?"}
      layout={"horizontal"}
      component={FormRadioGroup}
      data={rating}
      // validator={redbmsQuiredValidator}
    />
    <Field
      key={"dbmsQ9"}
      id={"dbmsQ9"}
      name={"dbmsQ9"}
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
