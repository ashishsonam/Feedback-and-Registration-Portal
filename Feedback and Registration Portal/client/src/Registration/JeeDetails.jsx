import * as React from "react";
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
} from "../Helpers/Data";
import "./Registration.css";
export const JeeDetails = (
  <div>
    <div className="form-content-separator"></div>
    <Field
      key={"jeeRollNo"}
      id={"jeeRollNo"}
      name={"jeeRollNo"}
      label={"JEE Roll Number"}
      component={FormInput}
      // validator={nameValidator}
      // validator={requiredValidator}
    />
    <Field
      key={"roundOfAllotment"}
      id={"roundOfAllotment"}
      name={"roundOfAllotment"}
      label={"Round of Allotment"}
      // hint={"Hint: Only European countries"}
      // layout={"horizontal"}
      component={FormDropDownList}
      data={roundOfAllotment}
      // data={genders}
      // validator={requiredValidator}
    />
    <Field
      key={"air"}
      id={"air"}
      name={"air"}
      label={"AIR"}
      component={FormInput}
      // data={genders}
      // validator={requiredValidator}
    />
    <Field
      key={"percentile"}
      id={"percentile"}
      name={"percentile"}
      label={"Percentile"}
      // optional={true}
      component={FormInput}
      // validator={requiredValidator}
    />
    <Field
      key={"year"}
      id={"year"}
      name={"year"}
      label={"Year"}
      // optional={true}
      component={FormInput}
      // validator={requiredValidator}
    />
    <Field
      key={"allotmentCategory"}
      id={"allotmentCategory"}
      name={"allotmentCategory"}
      label={"Allotment Category"}
      // optional={true}
      component={FormDropDownList}
      // validator={requiredValidator}
      data={category}
    />
    <Field
      key={"candidateCategory"}
      id={"candidateCategory"}
      name={"candidateCategory"}
      label={"Candidate Category"}
      // optional={true}
      component={FormDropDownList}
      // validator={requiredValidator}
      data={category}
    />
  </div>
);
