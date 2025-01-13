import cn from "../../utils/cn";

const Paragraph = ({children, className}) => {
    return (
        <div>
            <p className={`${cn('text-sm', className)}`}>{children}</p>
        </div>
    );
};

export default Paragraph;