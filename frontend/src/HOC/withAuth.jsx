
const withAuth = (WrappedComponent) => {
    return (props) => {
      const userFullname = localStorage.getItem("userName");
      if (!userFullname) {
        window.location.replace("/login");
        return null;
      }
        return <WrappedComponent {...props} />
    }
}

export default withAuth