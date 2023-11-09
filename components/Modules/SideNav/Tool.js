import React, { useEffect, useState } from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Link from "next/link";

const Tool = (props) => {
  return (
    <>
      <OverlayTrigger
        placement="left"
        overlay={<Tooltip className="tool-kit">{props.name}</Tooltip>}
      >
        <Link href={props.link} className="side_nav_list text-capitalize ">
          {props.listName}
        </Link>
      </OverlayTrigger>
    </>
  );
};

export default Tool;
