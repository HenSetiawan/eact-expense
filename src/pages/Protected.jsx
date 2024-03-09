import React from "react";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import supabase from "../services/supabase";

function Protected({ children }) {
  const session = localStorage.getItem("session");

  if (session != null) {
    return <>{children}</>;
  } else {
    return <Navigate to="/login" />;
  }
}

export default Protected;
