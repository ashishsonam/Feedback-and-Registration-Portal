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
      Effectiveness of Teacher in terms of (Average):
    </ListViewHeader>
  );
};

// const MyFooter = () => {
//   let messages = 0;
//   documents.map((i) => {
//     messages = messages + i.messages;
//   });
//   return (
//     <ListViewFooter
//       style={{
//         color: "rgb(160, 160, 160)",
//         fontSize: 14,
//       }}
//       className="pl-3 pb-2 pt-2"
//     >
//       {messages} unread messages in total
//     </ListViewFooter>
//   );
// };

const MyItemRender = (props) => {
  let item = props.dataItem;
  console.log(item);
  return (
    <div
      className="row p-2 border-bottom align-middle"
      style={{
        margin: 0,
      }}
    >
      {/* <div className="col-2">
        <Avatar shape="circle" type="img">
          <img
            src={`https://gist.github.com/simonssspirit/0db46d4292ea8e335eb18544718e2624/raw/2a595679acdb061105c80bd5eeeef58bb90aa5af/${item.image}-round-40x40.png`}
          />
        </Avatar>
      </div> */}
      <div className="col-6">
        <h2
          style={{
            fontSize: 14,
            color: "#454545",
            marginBottom: 0,
          }}
          className="text-uppercase"
        >
          {item.q}
        </h2>
      </div>
      <div className="col-4">
        <div className="k-chip k-chip-filled">
          <div className="k-chip-content"> {item.a}</div>
        </div>
      </div>
    </div>
  );
};

const FeedbackDetails = (props) => {
  // const [documents, setDocuments] = useState([]);
  // useEffect(async () => {
  //   const url = `http://localhost:5000/api/getFeedbackDetails/${jee_roll_no}`;
  //   const res = await apiCallGet(url);
  //   const arr = res.msg;
  //   // console.log(documents);
  //   setDocuments(arr);
  // }, []);

  //       seat_allotment_letter: documents.seat_allotment_letter,
  //       jee_rank_card: documents.jee_rank_card,
  //       photo_id_proof: documents.photo_id_proof,
  //       dob_proof: documents.dob_proof,
  //       income_certificate: documents.income_certificate,
  //       aadhar_card: documents.aadhar_card,
  //       caste_certificate: documents.caste_certificate,
  //       caste_validity: documents.caste_validity,
  //       obc_ncl_certificate: documents.obc_ncl_certificate,
  //       disability_certificate: documents.disability_certificate,
  //       transfer_certificate: documents.transfer_certificate,
  //       migration_certificate: documents.migration_certificate,
  //       gap_certificate: documents.gap_certificate,
  const location = useLocation();
  // console.log("props");
  // console.log(location.state.state.data);
  // console.log(location.state.state.id);
  const result = location.state.state.data;

  const feedback = [
    {
      q: "Technical content",
      a: result.q1,
    },
    {
      q: "Communication skills",
      a: result.q2,
    },
    {
      q: "Availability beyond normal classes and co-operation to solve individual problems",
      a: result.q3,
    },
    {
      q: "Pace on which contents were covered",
      a: result.q4,
    },
    {
      q: "Overall effectiveness",
      a: result.q5,
    },
    {
      q: "How do you rate the contents of the curricular?",
      a: result.q6,
    },
    {
      q: "How do you rate lab experiments, if applicable?",
      a: result.q7,
    },
  ];

  // const approveButton = async () => {
  //   const url = `http://localhost:5000/api/approve/${location.state.state.id}`;
  //   console.log(url);
  //   const cookie = new Cookies();
  //   const token = cookie.get("accessToken");
  //   const response = await apiCallGetToken(url, token);
  //   console.log(response);
  // };
  // // console.log(this.props);
  // // const { state } = props.location.state;
  // console.log("state");
  // console.log(props.location.state);

  // const documents = ["Seat Allotment Letter", "JEE Rank Card"];
  return (
    <div>
      {/* <Link> */}
      <ListView
        data={feedback}
        item={MyItemRender}
        style={{
          width: "60%",
        }}
        header={MyHeader}
        // footer={MyFooter}
      />
      <br></br>
      <div style={{ textAlign: "center" }}>
        {/* <Button
          primary={true}
          // disabled={!formRenderProps.allowSubmit}
          // onClick={approveButton}
        >
          Approve
        </Button> */}
      </div>
      {/* </Link> */}
    </div>
  );
};

export default FeedbackDetails;
