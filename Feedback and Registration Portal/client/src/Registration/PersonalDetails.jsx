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
  FormUpload,
} from "../Helpers/FormComponents";
import { nameValidator, requiredValidator } from "../Helpers/Validators";
import { countries, genders, minorityDetails, yesNo } from "../Helpers/Data";
import "./Registration.css";
import "../App.css";
export const PersonalDetails = (
  <div>
    <div className="form-content-separator"></div>
    <Field
      key={"name"}
      id={"name"}
      name={"name"}
      label={"Name"}
      component={FormInput}
      // validator={requiredValidator}
    />
    <Field
      key={"profilePhoto"}
      id={"profilePhoto"}
      name={"profilePhoto"}
      label={"Profile Photo"}
      component={FormUpload}
      // validator={nameValidator}
      // validator={requiredValidator}
    />

    <Field
      key={"gender"}
      id={"gender"}
      name={"gender"}
      label={"Gender"}
      // hint={"Hint: Only European countries"}
      layout={"horizontal"}
      component={FormRadioGroup}
      data={genders}
      // validator={requiredValidator}
    />
    <Field
      key={"bloodGroup"}
      id={"bloodGroup"}
      name={"bloodGroup"}
      label={"Blood Group"}
      component={FormInput}
      // data={genders}
      // validator={requiredValidator}
    />
    <Field
      key={"dob"}
      id={"dob"}
      name={"dob"}
      label={"Date of Birth"}
      // optional={true}
      component={FormDatePicker}
      // validator={requiredValidator}
    />
    <Field
      key={"mobile1"}
      id={"mobile1"}
      name={"mobile1"}
      label={"Mobile 1"}
      // optional={true}
      component={FormInput}
      // validator={requiredValidator}
    />
    <Field
      key={"mobile2"}
      id={"mobile2"}
      name={"mobile2"}
      label={"Mobile 2"}
      // optional={true}
      component={FormInput}
      // validator={requiredValidator}
    />
    <Field
      key={"emailId"}
      id={"emailId"}
      name={"emailId"}
      label={"Email ID"}
      // optional={true}
      component={FormInput}
      // validator={requiredValidator}
    />
    <Field
      key={"aadharNumber"}
      id={"aadharNumber"}
      name={"aadharNumber"}
      label={"Aadhar Number"}
      // optional={true}
      component={FormInput}
      // validator={requiredValidator}
    />
    <Field
      key={"fathersName"}
      id={"fathersName"}
      name={"fathersName"}
      label={"Father's Name"}
      // optional={true}
      component={FormInput}
      // validator={requiredValidator}
    />
    <Field
      key={"fathersOccupation"}
      id={"fathersOccupation"}
      name={"fathersOccupation"}
      label={"Father's Occupation"}
      // optional={true}
      component={FormInput}
      // validator={requiredValidator}
    />
    <Field
      key={"mothersName"}
      id={"mothersName"}
      name={"mothersName"}
      label={"Mother's Name"}
      // optional={true}
      component={FormInput}
      // validator={requiredValidator}
    />
    <Field
      key={"mothersOccupation"}
      id={"mothersOccupation"}
      name={"mothersOccupation"}
      label={"Mother's Occupation"}
      // optional={true}
      component={FormInput}
      // validator={requiredValidator}
    />
    <Field
      key={"branch"}
      id={"branch"}
      name={"branch"}
      label={"Branch"}
      // optional={true}
      component={FormInput}
      // validator={requiredValidator}
    />
    <Field
      key={"physicallyDisabled"}
      id={"physicallyDisabled"}
      name={"physicallyDisabled"}
      label={"Physically Disabled"}
      layout={"horizontal"}
      // optional={true}
      component={FormRadioGroup}
      // validator={requiredValidator}
      data={yesNo}
    />
    <Field
      key={"minorityDetails"}
      id={"minorityDetails"}
      name={"minorityDetails"}
      label={"Minority Details"}
      // optional={true}
      component={FormDropDownList}
      // validator={requiredValidator}
      // layout={"vertical"}
      data={minorityDetails}
    />
    {/* <Field
      key={"rating"}
      id={"rating"}
      name={"rating"}
      label={"Rating"}
      // optional={true}
      component={FormRating}
    /> */}
  </div>
);
