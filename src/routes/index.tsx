import React, { useState, useEffect } from "react";

import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";

const Routes = () => {
  const isAuthenticated = true;

  return isAuthenticated ? <AppRoutes /> : <AuthRoutes />;
};

export { Routes };
