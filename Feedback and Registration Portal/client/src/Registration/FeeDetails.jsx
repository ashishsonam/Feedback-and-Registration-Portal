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

export const FeeDetails = (
  <div>
    <div className="head form-content-separator">At JEE Counselling</div>
    <Field
      key={"atJeeCounsellingDdEcsNo"}
      id={"atJeeCounsellingDdEcsNo"}
      name={"atJeeCounsellingDdEcsNo"}
      label={"DD/ECS No"}
      component={FormInput}
      // validator={nameValidator}
      // validator={requiredValidator}
    />
    <Field
      key={"atJeeCounsellingDate"}
      id={"atJeeCounsellingDate"}
      name={"atJeeCounsellingDate"}
      label={"Date"}
      component={FormDatePicker}
      // data={genders}
      // validator={requiredValidator}
    />
    <Field
      key={"atJeeCounsellingAmount"}
      id={"atJeeCounsellingAmount"}
      name={"atJeeCounsellingAmount"}
      label={"Amount"}
      // hint={"Hint: Only European countries"}
      // layout={"horizontal"}
      component={FormInput}
      // data={}
      // data={roundOfAllotment}
      // data={genders}
      // validator={requiredValidator}
    />
    {/* <span
      style={{
        marginTop: "40px",
      }}
      className={"k-form-separator"}
    /> */}
    <div className="head form-content-separator">
      During Institute Reporting
    </div>
    <Field
      key={"instituteReportingDdEcsNo"}
      id={"instituteReportingDdEcsNo"}
      name={"instituteReportingDdEcsNo"}
      label={"DD/ECS No"}
      component={FormInput}
      // validator={nameValidator}
      // validator={requiredValidator}
    />
    <Field
      key={"instituteReportingDate"}
      id={"instituteReportingDate"}
      name={"instituteReportingDate"}
      label={"Date"}
      component={FormDatePicker}
      // data={genders}
      // validator={requiredValidator}
    />
    <Field
      key={"instituteReportingAmount"}
      id={"instituteReportingAmount"}
      name={"instituteReportingAmount"}
      label={"Amount"}
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
