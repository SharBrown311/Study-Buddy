import React from 'react'
import { Link, Navigate } from 'react-router-dom'

function Protected(props) {
  const { token, children, redirectTo } = props;
  return token ? children : <Navigate to={redirectTo} />;
}

export default Protected
