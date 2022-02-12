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
export const Education = (
  <div>
    <div className="head form-content-separator">Matric</div>
    <Field
      key={"matricBoardName"}
      id={"matricBoardName"}
      name={"matricBoardName"}
      label={"Board Name"}
      component={FormInput}
      // validator={nameValidator}
      // validator={requiredValidator}
    />
    <Field
      key={"matricYearOfPassing"}
      id={"matricYearOfPassing"}
      name={"matricYearOfPassing"}
      label={"Year of Passing"}
      component={FormInput}
      // data={genders}
      // validator={requiredValidator}
    />
    <Field
      key={"matricMarksObtained"}
      id={"matricMarksObtained"}
      name={"matricMarksObtained"}
      label={"Marks Obtained"}
      // hint={"Hint: Only European countries"}
      // layout={"horizontal"}
      component={FormInput}
      // data={}
      // data={roundOfAllotment}
      // data={genders}
      // validator={requiredValidator}
    />
    <Field
      key={"matricPercentage"}
      id={"matricPercentage"}
      name={"matricPercentage"}
      label={"Percentage"}
      // hint={"Hint: Only European countries"}
      // layout={"horizontal"}
      component={FormInput}
      // data={}
      // data={roundOfAllotment}
      // data={genders}
      // validator={requiredValidator}
    />
    <div className="head form-content-separator">Inter</div>
    <Field
      key={"interBoardName"}
      id={"interBoardName"}
      name={"interBoardName"}
      label={"Board Name"}
      component={FormInput}
      // validator={nameValidator}
      // validator={requiredValidator}
    />
    <Field
      key={"interYearOfPassing"}
      id={"interYearOfPassing"}
      name={"interYearOfPassing"}
      label={"Year of Passing"}
      component={FormInput}
      // data={genders}
      // validator={requiredValidator}
    />
    <Field
      key={"interMarksObtained"}
      id={"interMarksObtained"}
      name={"interMarksObtained"}
      label={"Marks Obtained"}
      // hint={"Hint: Only European countries"}
      // layout={"horizontal"}
      component={FormInput}
      // data={}
      // data={roundOfAllotment}
      // data={genders}
      // validator={requiredValidator}
    />
    <Field
      key={"interPercentage"}
      id={"interPercentage"}
      name={"interPercentage"}
      label={"Percentage"}
      // hint={"Hint: Only European countries"}
      // layout={"horizontal"}
      component={FormInput}
      // data={}
      // data={roundOfAllotment}
      // data={genders}
      // validator={requiredValidator}
    />
  </div>
);
