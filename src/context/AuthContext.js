import React, { createContext } from "react";
export const AuthContext = createContext();

export default class AuthProvider extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <AuthContext.Provider value="Test value">{this.props.children}</AuthContext.Provider>;
  }
}
