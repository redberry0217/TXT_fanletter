import React from "react";
import FanletterPage from "components/FanletterPage";

function MemberClicked({activeMember}) {
  return (
    <>
      <div>{activeMember}</div>
      <FanletterPage />
    </>
  );
}

export default MemberClicked;
