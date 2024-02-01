import React, { useState, useEffect } from "react";

import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";
import { useAuth } from "../context/authContext";

const Routes = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <AppRoutes /> : <AuthRoutes />;
};

export { Routes };
