import toast from "react-hot-toast";

const withAdminAuth = (WrappedComponent) => {
  return (props) => {
    const userRole = localStorage.getItem("userRole");
    if (userRole !== "Admin") {
      toast.error("Error, You are not Authorized");
      window.location.replace("/");
      return null;
    }
    return <WrappedComponent {...props} />;
  };
};

export default withAdminAuth;
