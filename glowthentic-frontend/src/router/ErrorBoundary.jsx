import Page404 from "../page/error/Page404";

const ErrorBoundary = ({ error }) => {
    console.log("Error caught:", error);
    return <Page404 />;
};

export default ErrorBoundary;