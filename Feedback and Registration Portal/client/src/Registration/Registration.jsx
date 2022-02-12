import * as React from "react";
import * as ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { Form, FormElement } from "@progress/kendo-react-form";
import { Button } from "@progress/kendo-react-buttons";
import { Stepper } from "@progress/kendo-react-layout";
import { PersonalDetails } from "./PersonalDetails";
import { JeeDetails } from "./JeeDetails";
import { FeeDetails } from "./FeeDetails";
import { Address } from "./Address";
import { Education } from "./Education";
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
import * as moment from "moment";
import "./Registration.css";
// import apiCall from "../Registration/ApiCall";
import { apiCallPost } from "../ApiCall/ApiCall";
// import { DBMS } from "./DBMS";
// import { Details } from "./Details";
// import { CN } from "./Feedback/CN";
// import { TOC } from "./TOC";
// import { SA } from "./SA";
// import { TIS } from "./TIS";
const stepPages = [PersonalDetails, JeeDetails, FeeDetails, Address, Education];
export const Registration = () => {
  const [step, setStep] = React.useState(0);
  const [formState, setFormState] = React.useState({});
  const [steps, setSteps] = React.useState([
    {
      label: "Personal Details",
      isValid: undefined,
    },
    {
      label: "JEE Details",
      isValid: undefined,
    },
    {
      label: "Fee Details",
      isValid: undefined,
    },
    {
      label: "Address",
      isValid: undefined,
    },
    {
      label: "Education",
      isValid: undefined,
    },
    {
      label: "Documents",
      isValid: undefined,
    },
  ]);

  const [correspondenceState, setCorrespondenceState] = React.useState("");
  // const [profilePhoto, setProfilePhoto] = React.useState("");
  const [seatAllotmentLetter, setSeatAllotmentLetter] = React.useState("");
  const [jeeRankCard, setJeeRankCard] = React.useState("");
  const [photoIdProof, setPhotoIdProof] = React.useState("");
  const [dobProof, setDobProof] = React.useState("");
  const [incomeCertificate, setIncomeCertificate] = React.useState("");
  const [aadharCard, setAadharCard] = React.useState("");
  const [casteCertificate, setCasteCertificate] = React.useState("");
  const [casteValidity, setCasteValidity] = React.useState("");
  const [obcNclCertificate, setObcNclCertificate] = React.useState("");
  const [disabilityCertificate, setDisabilityCertificate] = React.useState("");
  const [transferCertificate, setTransferCertificate] = React.useState("");
  const [migrationCertificate, setMigrationCertificate] = React.useState("");
  const [gapCertificate, setGapCertificate] = React.useState("");

  // const uploadProfilePhoto = async (e) => {
  //   const file = e.target.files[0];
  //   const base64 = await convertBase64(file);
  //   // console.log(base64);
  //   setProfilePhoto(base64);
  // };
  let seatAllotmentLetterDuplicate;
  let jeeRankCardDuplicate;
  let photoIdProofDuplicate;
  let dobProofDuplicate;
  let incomeCertificateDuplicate;
  let aadharCardDuplicate;
  let casteCertificateDuplicate;
  let casteValidityDuplicate;
  let obcNclCertificateDuplicate;
  let disabilityCertificateDuplicate;
  let transferCertificateDuplicate;
  let migrationCertificateDuplicate;
  let gapCertificateDuplicate;

  const uploadSeatAllotmentLetter = async (e) => {
    // console.log("entered");
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    console.log(base64);
    seatAllotmentLetterDuplicate = base64;
    console.log(seatAllotmentLetterDuplicate);
    // setSeatAllotmentLetter(base64);
    // setSeatAllotmentLetter(
    //   (seatAllotmentLetter) => (seatAllotmentLetter = base64)
    // );
    // setSeatAllotmentLetter((state) => {
    //   console.log(state); // "React is awesome!"
    //   seatAllotmentLetterDuplicate = state;

    //   return state;
    // });
    // console.log(seatAllotmentLetter);
    // console.log("khatam");
  };

  const uploadJeeRankCard = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    // console.log(base64);
    // setJeeRankCard(base64);
    // setJeeRankCard((state) => {
    //   console.log(state); // "React is awesome!"
    jeeRankCardDuplicate = base64;

    //   return state;
    // });
  };
  const uploadPhotoIdProof = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    // console.log(base64);
    // setPhotoIdProof(base64);
    // setPhotoIdProof((state) => {
    //   console.log(state); // "React is awesome!"
    photoIdProofDuplicate = base64;

    //   return state;
    // });
  };
  const uploadDobProof = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    // console.log(base64);
    // setDobProof(base64);
    // setDobProof((state) => {
    //   console.log(state); // "React is awesome!"
    dobProofDuplicate = base64;

    //   return state;
    // });
  };
  const uploadIncomeCertificate = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    // console.log(base64);
    // setIncomeCertificate(base64);
    // setIncomeCertificate((state) => {
    //   console.log(state); // "React is awesome!"
    incomeCertificateDuplicate = base64;

    //   return state;
    // });
  };
  const uploadAadharCard = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    // console.log(base64);
    // setAadharCard(base64);
    // setAadharCard((state) => {
    //   console.log(state); // "React is awesome!"
    aadharCardDuplicate = base64;

    //   return state;
    // });
  };
  const uploadCasteCertificate = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    // console.log(base64);
    // setCasteCertificate(base64);
    // setCasteCertificate((state) => {
    //   console.log(state); // "React is awesome!"
    casteCertificateDuplicate = base64;

    //   return state;
    // });
  };
  const uploadCasteValidity = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    // console.log(base64);
    // setCasteValidity(base64);
    // setCasteValidity((state) => {
    //   console.log(state); // "React is awesome!"
    casteValidityDuplicate = base64;

    //   return state;
    // });
  };
  const uploadObcNclCertificate = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    // console.log(base64);
    // setObcNclCertificate(base64);
    // setObcNclCertificate((state) => {
    //   console.log(state); // "React is awesome!"
    obcNclCertificateDuplicate = base64;

    //   return state;
    // });
  };
  const uploadDisabilityCertificate = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    // console.log(base64);
    // setDisabilityCertificate(base64);
    // setDisabilityCertificate((state) => {
    //   console.log(state); // "React is awesome!"
    disabilityCertificateDuplicate = base64;

    //   return state;
    // });
  };
  const uploadTransferCertificate = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    // console.log(base64);
    // setTransferCertificate(base64);
    // setTransferCertificate((state) => {
    //   console.log(state); // "React is awesome!"
    transferCertificateDuplicate = base64;

    //   return state;
    // });
  };
  const uploadMigrationCertificate = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    // console.log(base64);
    // setMigrationCertificate(base64);
    // setMigrationCertificate((state) => {
    //   console.log(state); // "React is awesome!"
    migrationCertificateDuplicate = base64;

    //   return state;
    // });
  };
  const uploadGapCertificate = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    // console.log(base64);
    // setGapCertificate(base64);
    // setGapCertificate((state) => {
    //   console.log(state); // "React is awesome!"
    gapCertificateDuplicate = base64;

    //   return state;
    // });
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  // const [permanentState, setPermanentState] = React.useState("");

  const lastStepIndex = steps.length - 1;
  const isLastStep = lastStepIndex === step;

  // const uploadSeatAllotmentLetter = React.useCallback(async (e) => {
  //   // const uploadSeatAllotmentLetter = async (e) => {
  //   console.log("entered");
  //   const file = e.target.files[0];
  //   const base64 = await convertBase64(file);
  //   console.log(base64);
  //   setSeatAllotmentLetter(base64);
  //   console.log(seatAllotmentLetter);
  //   console.log("khatam");
  //   // };
  // });
  // const history = useHistory();
  const onStepSubmit = React.useCallback(
    async (event) => {
      const { isValid, values } = event;
      const currentSteps = steps.map((currentStep, index) => ({
        ...currentStep,
        isValid: index === step ? isValid : currentStep.isValid,
      }));
      setSteps(currentSteps);

      if (!isValid) {
        return;
      }

      setStep(() => Math.min(step + 1, lastStepIndex));
      setFormState(values);
      setCorrespondenceState(values.correspondenceState);
      // setPermanentState(values.permanentState);

      if (isLastStep) {
        alert(JSON.stringify(values));
        console.log(seatAllotmentLetter);

        // console.log(values.profilePhoto);
        // console.log(seatAllotmentLetter);

        const payload = {
          form: {
            is_verified: false,
            id: "",
            name: values.name,
            photo: "profile_url",
            gender: values.gender,
            blood_group: values.bloodGroup,
            dob:
              values.dob.getFullYear() +
              "-" +
              parseInt(values.dob.getMonth() + 1) +
              "-" +
              values.dob.getDate(),
            mobile1: values.mobile1,
            mobile2: values.mobile2,
            email_id: values.emailId,
            aadhar_number: values.aadharNumber,
            fathers_name: values.fathersName,
            fathers_occupation: values.fathersOccupation,
            mothers_name: values.mothersName,
            mothers_occupation: values.mothersOccupation,
            branch: values.branch,
            physically_disabled: values.physicallyDisabled,
            minority_details: values.minorityDetails,
            jee_roll_no: values.jeeRollNo,
            round_of_allotment: parseInt(values.roundOfAllotment),
            air: parseInt(values.air),
            percentile: parseFloat(values.percentile),
            year: parseInt(values.year),
            allotment_category: values.allotmentCategory,
            candidate_category: values.candidateCategory,
            seat_allotment_letter: seatAllotmentLetterDuplicate,
            jee_rank_card: jeeRankCardDuplicate,
            photo_id_proof: photoIdProofDuplicate,
            dob_proof: dobProofDuplicate,
            income_certificate: incomeCertificateDuplicate,
            aadhar_card: aadharCardDuplicate,
            caste_certificate: casteValidityDuplicate,
            caste_validity: casteValidityDuplicate,
            obc_ncl_certificate: obcNclCertificateDuplicate,
            disability_certificate: disabilityCertificateDuplicate,
            transfer_certificate: transferCertificateDuplicate,
            migration_certificate: migrationCertificateDuplicate,
            gap_certificate: gapCertificateDuplicate,
            // jee_rank_card: jeeRankCard,
            // photo_id_proof: photoIdProof,
            // dob_proof: dobProof,
            // income_certificate: incomeCertificate,
            // aadhar_card: aadharCard,
            // caste_certificate: casteCertificate,
            // caste_validity: casteValidity,
            // obc_ncl_certificate: obcNclCertificate,
            // disability_certificate: disabilityCertificate,
            // transfer_certificate: transferCertificate,
            // migration_certificate: migrationCertificate,
            // gap_certificate: gapCertificate,
            education: {
              matric: {
                board_name: values.matricBoardName,
                year_of_passing: parseInt(values.matricYearOfPassing),
                marks_obtained: parseInt(values.matricMarksObtained),
                percentage: parseFloat(values.matricPercentage),
              },
              inter: {
                board_name: values.interBoardName,
                year_of_passing: parseInt(values.interYearOfPassing),
                marks_obtained: parseInt(values.interMarksObtained),
                percentage: parseFloat(values.interPercentage),
              },
            },
            fee_details: {
              at_jossa_counselling: {
                dd_ecs_no: values.atJeeCounsellingDdEcsNo,
                date:
                  values.atJeeCounsellingDate.getFullYear() +
                  "-" +
                  parseInt(values.atJeeCounsellingDate.getMonth() + 1) +
                  "-" +
                  values.atJeeCounsellingDate.getDate(),
                amount: parseInt(values.atJeeCounsellingAmount),
              },
              during_institute_reporting: {
                dd_ecs_no: values.instituteReportingDdEcsNo,
                date:
                  values.instituteReportingDate.getFullYear() +
                  "-" +
                  parseInt(values.instituteReportingDate.getMonth() + 1) +
                  "-" +
                  values.instituteReportingDate.getDate(),
                amount: parseInt(values.instituteReportingAmount),
              },
            },
            address: {
              permanent: {
                street: values.permanentStreet,
                city: values.permanentCity,
                state: values.permanentState,
                pincode: parseInt(values.permanentPincode),
              },
              correspondence: {
                street: values.correspondenceStreet,
                city: values.correspondenceCity,
                state: values.correspondenceState,
                pincode: parseInt(values.correspondencePincode),
              },
            },
          },
        };
        // console.log(payload);
        const url = "http://localhost:5000/api/newAdmission";
        const response = await apiCallPost(url, payload);
        console.log(response);
        // history.replace("/");
        // window.location.reload(true);

        // const filePayload = {
        //   photo: values.profilePhoto[0],
        //   seat_allotment_letter: values.seatAllotmentLetter[0],
        //   jee_rank_card: values.jeeRankCard[0],
        //   photo_id_proof: values.photoIdProof[0],
        //   dob_proof: values.dobProof[0],
        //   income_certificate: values.incomeCertificate[0],
        //   aadhar_card: values.aadharCard[0],
        //   caste_certificate: values.casteCertificate[0],
        //   caste_validity: values.casteValidity[0],
        //   obc_ncl_certificate: values.obcNclCertificate[0],
        //   disability_certificate: values.disabilityCertificate[0],
        //   transfer_certificate: values.transferCertificate[0],
        //   migration_certificate: values.migrationCertificate[0],
        //   gap_certificate: values.gapCertificate[0],
        // };
      }
    },
    [steps, isLastStep, step, lastStepIndex]
  );

  const onPrevClick = React.useCallback(
    (event) => {
      event.preventDefault();
      setStep(() => Math.max(step - 1, 0));
    },
    [step, setStep]
  );
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div style={{ height: 50 }}></div>
      <Stepper value={step} items={steps} />
      <Form
        initialValues={formState}
        onSubmitClick={onStepSubmit}
        render={(formRenderProps) => (
          <div
            style={{
              alignSelf: "center",
            }}
          >
            <FormElement
              style={{
                width: 400,
              }}
            >
              {step == 3 ? (
                <div>
                  <div className="head form-content-separator">
                    Correspondence
                  </div>
                  <Field
                    key={"correspondenceStreet"}
                    id={"correspondenceStreet"}
                    name={"correspondenceStreet"}
                    label={"Street"}
                    component={FormInput}
                    // validator={nameValidator}
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
                    component={FormDropDownList}
                    data={(function () {
                      if (
                        formRenderProps.valueGetter("correspondenceState") ===
                        undefined
                      ) {
                        return [];
                      }
                      const stateInfo = state_district.find(
                        (elem) =>
                          elem.state ==
                          formRenderProps.valueGetter("correspondenceState")
                      );
                      return stateInfo.districts;
                    })()}
                  />
                  <Field
                    key={"correspondencePincode"}
                    id={"correspondencePincode"}
                    name={"correspondencePincode"}
                    label={"PINCODE"}
                    component={FormInput}
                  />
                  <div className="head form-content-separator">Permanent</div>
                  <Field
                    key={"permanentStreet"}
                    id={"permanentStreet"}
                    name={"permanentStreet"}
                    label={"Street"}
                    component={FormInput}
                    // validator={nameValidator}
                  />
                  <Field
                    key={"permanentState"}
                    id={"permanentState"}
                    name={"permanentState"}
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
                    key={"permanentCity"}
                    id={"permanentCity"}
                    name={"permanentCity"}
                    label={"City"}
                    component={FormDropDownList}
                    // data={}
                    // data={roundOfAllotment}
                    data={(function () {
                      if (
                        formRenderProps.valueGetter("permanentState") ===
                        undefined
                      ) {
                        return [];
                      }
                      const stateInfo = state_district.find(
                        (elem) =>
                          elem.state ==
                          formRenderProps.valueGetter("permanentState")
                      );
                      return stateInfo.districts;
                    })()}
                    // validator={requiredValidator}
                  />
                  <Field
                    key={"permanentPincode"}
                    id={"permanentPincode"}
                    name={"permanentPincode"}
                    label={"PINCODE"}
                    component={FormInput}
                    // validator={requiredValidator}
                  />
                </div>
              ) : step === 5 ? (
                <div>
                  <div className="form-content-separator"></div>
                  {/* <form> */}
                  Seat Allotment Letter <br></br>
                  <input
                    type="file"
                    onChange={(e) => {
                      console.log("started");
                      uploadSeatAllotmentLetter(e);
                      console.log("exited");
                    }}
                  />
                  <br></br>
                  JEE Rank Card <br></br>
                  <input
                    type="file"
                    onChange={(e) => {
                      uploadJeeRankCard(e);
                    }}
                  />
                  <br></br>
                  Photo ID Proof <br></br>
                  <input
                    type="file"
                    onChange={(e) => {
                      uploadPhotoIdProof(e);
                    }}
                  />
                  <br></br>
                  DoB Proof <br></br>
                  <input
                    type="file"
                    onChange={(e) => {
                      uploadDobProof(e);
                    }}
                  />
                  <br></br>
                  Income Certificate <br></br>
                  <input
                    type="file"
                    onChange={(e) => {
                      uploadIncomeCertificate(e);
                    }}
                  />
                  <br></br>
                  Aadhar Card <br></br>
                  <input
                    type="file"
                    onChange={(e) => {
                      uploadAadharCard(e);
                    }}
                  />
                  <br></br>
                  Caste Certificate <br></br>
                  <input
                    type="file"
                    onChange={(e) => {
                      uploadCasteCertificate(e);
                    }}
                  />
                  <br></br>
                  Caste Validity <br></br>
                  <input
                    type="file"
                    onChange={(e) => {
                      uploadCasteValidity(e);
                    }}
                  />
                  <br></br>
                  OBC NCL Certificate <br></br>
                  <input
                    type="file"
                    onChange={(e) => {
                      uploadObcNclCertificate(e);
                    }}
                  />
                  <br></br>
                  Disability Certificate <br></br>
                  <input
                    type="file"
                    onChange={(e) => {
                      uploadDisabilityCertificate(e);
                    }}
                  />
                  <br></br>
                  Transfer Certificate <br></br>
                  <input
                    type="file"
                    onChange={(e) => {
                      uploadTransferCertificate(e);
                    }}
                  />
                  <br></br>
                  Migration Certificate <br></br>
                  <input
                    type="file"
                    onChange={(e) => {
                      uploadMigrationCertificate(e);
                    }}
                  />
                  <br></br>
                  Gap Certificate <br></br>
                  <input
                    type="file"
                    onChange={(e) => {
                      uploadGapCertificate(e);
                    }}
                  />
                </div>
              ) : (
                stepPages[step]
              )}
              <span
                style={{
                  marginTop: "40px",
                }}
                className={"k-form-separator"}
              />
              <div
                style={{
                  justifyContent: "space-between",
                  alignContent: "center",
                }}
                className={"k-form-buttons k-buttons-end"}
              >
                <span
                  style={{
                    alignSelf: "center",
                  }}
                >
                  Step {step + 1} of 6
                </span>
                <div>
                  {step !== 0 ? (
                    <Button
                      style={{
                        marginRight: "16px",
                      }}
                      onClick={onPrevClick}
                    >
                      Previous
                    </Button>
                  ) : undefined}
                  <Button
                    primary={true}
                    disabled={!formRenderProps.allowSubmit}
                    onClick={formRenderProps.onSubmit}
                  >
                    {isLastStep ? "Submit" : "Next"}
                  </Button>
                </div>
              </div>
            </FormElement>
          </div>
        )}
      />
    </div>
  );
};

export default Registration;
