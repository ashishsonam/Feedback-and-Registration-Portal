import * as React from "react";
import { Field } from "@progress/kendo-react-form";
import {
  FormInput,
  FormAutoComplete,
  FormRadioGroup,
  FormTextArea,
} from "../Helpers/FormComponents";
import { nameValidator, requiredValidator } from "../Helpers/Validators";
import { countries, genders } from "../Helpers/Data";
export const Details = (
  <div>
    <Field
      key={"academicYear"}
      id={"academicYear"}
      name={"academicYear"}
      label={"Academic Year"}
      component={FormInput}
      validator={requiredValidator}
    />
    <Field
      key={"semester"}
      id={"semester"}
      name={"semester"}
      label={"Semester"}
      // hint={"Hint: Only European countries"}
      component={FormInput}
      // data={countries}
      validator={requiredValidator}
    />
    <Field
      key={"branch"}
      id={"branch"}
      name={"branch"}
      label={"Branch"}
      layout={"horizontal"}
      component={FormInput}
      // data={genders}
      validator={requiredValidator}
    />
    <Field
      key={"section"}
      id={"section"}
      name={"section"}
      label={"Section"}
      // optional={true}
      component={FormInput}
      validator={requiredValidator}
    />
  </div>
);
