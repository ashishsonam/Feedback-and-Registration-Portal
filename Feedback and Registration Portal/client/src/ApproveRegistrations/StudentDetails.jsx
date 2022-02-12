import React, { useState, useEffect } from "react";
import {
  ListView,
  ListViewHeader,
  ListViewFooter,
} from "@progress/kendo-react-listview";
import { Avatar } from "@progress/kendo-react-layout";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@progress/kendo-react-buttons";
import {
  apiCallGet,
  apiCallGetToken,
  apiCallPostToken,
  apiCallPutToken,
} from "../ApiCall/ApiCall";
import Cookies from "universal-cookie";

const MyHeader = () => {
  return (
    <ListViewHeader
      style={{
        color: "rgb(160, 160, 160)",
        fontSize: 14,
      }}
      className="pl-3 pb-2 pt-2"
    >
      Student's Document Details
    </ListViewHeader>
  );
};

const MyItemRender = (props) => {
  let item = props.dataItem;

  return (
    <div
      className="row p-2 border-bottom align-middle"
      style={{
        margin: 0,
      }}
    >
      <div className="col-6">
        <h2
          style={{
            fontSize: 14,
            color: "#454545",
            marginBottom: 0,
          }}
          className="text-uppercase"
        >
          {item.name}
        </h2>
      </div>
      <div className="col-4">
        <div className="k-chip k-chip-filled">
          <div
            className="k-chip-content"
            onClick={() => {
              var win = window.open();
              win.document.write(
                '<iframe src="' +
                  item.doc +
                  '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>'
              );
            }}
          >
            View
          </div>
        </div>
      </div>
    </div>
  );
};

const StudentDetails = (props) => {
  const location = useLocation();
  console.log("props");
  console.log(location.state.state.data.aadhar_card);
  console.log(location.state.state.id);

  const documents = [
    {
      name: "Seat Allotment Letter",
      doc: location.state.state.data.seat_allotment_letter,
    },
    {
      name: "JEE Rank Card",
      doc: location.state.state.data.jee_rank_card,
    },
    {
      name: "Photo ID Proof",
      doc: location.state.state.data.photo_id_proof,
    },
    {
      name: "DOB Proof",
      doc: location.state.state.data.dob_proof,
    },
    {
      name: "Income Certificate",
      doc: location.state.state.data.income_certificate,
    },
    {
      name: "Aadhar Card",
      doc: location.state.state.data.aadhar_card,
    },
    {
      name: "Caste Certificate",
      doc: location.state.state.data.caste_certificate,
    },
    {
      name: "Caste Validity",
      doc: location.state.state.data.caste_validity,
    },
    {
      name: "OBC NCL Certificate",
      doc: location.state.state.data.obc_ncl_certificate,
    },
    {
      name: "Disability Certificate",
      doc: location.state.state.data.disability_certificate,
    },
    {
      name: "Transfer Certificate",
      doc: location.state.state.data.transfer_certificate,
    },
    {
      name: "Migration Certificate",
      doc: location.state.state.data.migration_certificate,
    },
    {
      name: "Gap Certificate",
      doc: location.state.state.data.gap_certificate,
    },
  ];

  const approveButton = async () => {
    const url = `http://localhost:5000/api/approve/${location.state.state.id}`;
    console.log(url);
    const cookie = new Cookies();
    const token = cookie.get("accessToken");
    const response = await apiCallGetToken(url, token);
    console.log(response);
  };

  return (
    <div>
      {/* <Link> */}
      <ListView
        data={documents}
        item={MyItemRender}
        style={{
          width: "60%",
        }}
        header={MyHeader}
        // footer={MyFooter}
      />
      <br></br>
      <div style={{ textAlign: "center" }}>
        <Button
          primary={true}
          // disabled={!formRenderProps.allowSubmit}
          onClick={approveButton}
        >
          Approve
        </Button>
      </div>
      {/* </Link> */}
    </div>
  );
};

export default StudentDetails;
