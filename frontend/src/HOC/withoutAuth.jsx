const withoutAuth = (WrappedComponent) => {
  return (props) => {
    const theUserName = localStorage.getItem("userName");
    if (theUserName) {
      window.location.replace("/");
      return null;
    }
    return <WrappedComponent {...props} />;
  };
};

export default withoutAuth;
