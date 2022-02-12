import * as React from "react";
import { Field } from "@progress/kendo-react-form";
import { useForm } from "react-hook-form";
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
  states,
  state_district,
} from "../Helpers/Data";
import "./Registration.css";

export const Address = (
  <div>
    <div className="head form-content-separator">Correspondence</div>
    <Field
      key={"correspondenceStreet"}
      id={"correspondenceStreet"}
      name={"correspondenceStreet"}
      label={"Street"}
      component={FormInput}
      // validator={nameValidator}
      // validator={requiredValidator}
    />
    <Field
      key={"correspondenceState"}
      id={"correspondenceState"}
      name={"correspondenceState"}
      label={"State"}
      component={FormDropDownList}
      data={(function () {
        const stateNames = [];
        states.forEach((state) => {
          stateNames.push(state.name);
        });
        return stateNames;
      })()}
      // validator={requiredValidator}
    />
    <Field
      key={"correspondenceCity"}
      id={"correspondenceCity"}
      name={"correspondenceCity"}
      label={"City"}
      // hint={"Hint: Only European countries"}
      // layout={"horizontal"}
      component={FormDropDownList}
      // data={(function () {
      //   const stateNames = [];
      //   states.forEach((state) => {
      //     stateNames.push(state.name);
      //   });
      //   return stateNames;
      // })()}
      // data={}
      // data={roundOfAllotment}
      data={(function (state) {
        // if (!!!watchState) return [];
        // return ["one", "two", "three"];
        // const state = [];
        // const stateInfo = states.find((ele) => ele.state == "Bihar");
        const stateInfo = state_district.find((elem) => elem.state == "Bihar");
        // const stateInfo = state_district.forEach((elem) => {
        // state.push(elem.state);
        // });
        // return state;
        return stateInfo.districts;
      })()}
      // validator={requiredValidator}
    />
    <Field
      key={"correspondencePincode"}
      id={"correspondencePincode"}
      name={"correspondencePincode"}
      label={"PINCODE"}
      // hint={"Hint: Only European countries"}
      // layout={"horizontal"}
      component={FormInput}
      // data={}
      // data={roundOfAllotment}
      // data={genders}
      // validator={requiredValidator}
    />
    <div className="head form-content-separator">Permanent</div>
    <Field
      key={"permanentStreet"}
      id={"permanentStreet"}
      name={"permanentStreet"}
      label={"Street"}
      component={FormInput}
      // validator={nameValidator}
      // validator={requiredValidator}
    />
    <Field
      key={"permanentState"}
      id={"permanentState"}
      name={"permanentState"}
      label={"State"}
      component={FormDropDownList}
      data={genders}
      // validator={requiredValidator}
      // validator={requiredValidator}
    />
    <Field
      key={"permanentCity"}
      id={"permanentCity"}
      name={"permanentCity"}
      label={"City"}
      // hint={"Hint: Only European countries"}
      // layout={"horizontal"}
      component={FormDropDownList}
      // data={}
      // data={roundOfAllotment}
      data={genders}
      // validator={requiredValidator}
    />
    <Field
      key={"permanentPincode"}
      id={"permanentPincode"}
      name={"permanentPincode"}
      label={"PINCODE"}
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
