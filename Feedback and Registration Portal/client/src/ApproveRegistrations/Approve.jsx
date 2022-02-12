import React, { useState, useEffect } from "react";
import {
  ListView,
  ListViewHeader,
  ListViewFooter,
} from "@progress/kendo-react-listview";
import { Avatar } from "@progress/kendo-react-layout";
import { Link, useHistory } from "react-router-dom";
import { Button } from "@progress/kendo-react-buttons";
import { apiCallGet, apiCallGetToken } from "../ApiCall/ApiCall";
import StudentDetails from "./StudentDetails";
import PropTypes from "prop-types";
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
      Pending Approval
    </ListViewHeader>
  );
};

// const MyFooter = () => {
//   let messages = 0;
//   contacts.map((i) => {
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
  // console.log(item);

  // const onApprove = () => {
  //   const url = "http://localhost:5000/api/getApprovalLists";
  //   // const res = await apiCall(url);
  //   // const arr = res.msg;
  // };

  // const goToDetails = () => {
  //   // const history = useHistory;
  //   // // let path = `/studentDetails`;
  //   // history.push("/studentDetails");
  // };
  const history = useHistory();

  const goToDetails = async () => {
    const url = `http://localhost:5000/api/getStudentDetails/${item.jee_roll_no}`;
    const cookie = new Cookies();
    const token = cookie.get("accessToken");
    const response = await apiCallGetToken(url, token);
    // console.log(response.msg);

    // history.push("/studentDetails");
    // console.log("hi");

    history.push("/studentDetails", {
      state: { data: response.msg, id: item.jee_roll_no },
    });
    // return <StudentDetails jee_roll_no={item.jee_roll_no} />;
  };

  return (
    <div
      className="row p-2 border-bottom align-middle"
      style={{
        margin: 0,
      }}
      // onClic
    >
      {/* <div className="col-2">
          <Avatar shape="circle" type="img">
          <img
          src={`https://gist.github.com/simonssspirit/0db46d4292ea8e335eb18544718e2624/raw/2a595679acdb061105c80bd5eeeef58bb90aa5af/${item.image}-round-40x40.png`}
          />
          </Avatar>
        </div> */}
      {/* <Link
        to={{
          pathname: "/studentDetails",
          state: { jee_roll_no: item.jee_roll_no },
        }}
      > */}
      <div className="col-6" onClick={goToDetails}>
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
        <div
          style={{
            fontSize: 12,
            color: "#a0a0a0",
          }}
        >
          JEE Roll No: {item.jee_roll_no}
        </div>
      </div>
      {/* </Link> */}

      {/* <div>
        <Button
          primary={true}
          // disabled={!formRenderProps.allowSubmit}
          // onClick={formRenderProps.onSubmit}
        >
          Approve
        </Button>
      </div> */}
    </div>
  );
};

const Approve = () => {
  const [pendingApproval, setPendingApproval] = useState([]);
  useEffect(async () => {
    const url = "http://localhost:5000/api/getApprovalLists";
    const res = await apiCallGet(url);
    const arr = res.msg;
    // console.log(pendingApproval);
    setPendingApproval(arr);
  }, []);

  return (
    <div>
      {/* <Link> */}
      <ListView
        data={pendingApproval}
        item={MyItemRender}
        style={{
          width: "100%",
        }}
        header={MyHeader}
        // footer={MyFooter}
      />

      {/* </Link> */}
    </div>
  );
};

export default Approve;
