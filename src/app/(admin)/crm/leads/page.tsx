import React from "react";
import Leads from "./components/Leads";
import PageTitle from "@/components/PageTitle";

const LeadsPage = () => {
  return (
    <>
      <PageTitle title="All Leads" />
      <Leads />
    </>
  );
};

export default LeadsPage;
