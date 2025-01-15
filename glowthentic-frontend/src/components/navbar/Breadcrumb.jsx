import { Link } from "react-router-dom";
import cn from "../../utils/cn";

const Breadcrumb = ({ children, className }) => {
    return (
        <div className={cn(`breadcrumbs text-sm my-5 ms-5`, className)}>
            <ul>
                <li><Link to="/">Home</Link></li>
                {children}
            </ul>
        </div>
    );
};

export default Breadcrumb;