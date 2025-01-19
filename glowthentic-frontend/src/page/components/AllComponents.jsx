import Badge from "../../components/typography/Badge";
import Checkbox from "../../components/typography/Checkbox";
import IncrementDecrement from "../../components/typography/IncrementDecrement";
import RegularButton from "../../components/typography/RegularButton";
import Toggle from "../../components/typography/Toggle";
import WishlistButton from "../../components/typography/WishlistButton";

const AllComponents = () => {
    return (
        <div>
            <div className="py-5">
                <Badge>
                    Save 50%
                </Badge>
            </div>
            <Toggle></Toggle>
            <Checkbox></Checkbox>
            <WishlistButton></WishlistButton>
            <IncrementDecrement />
            <RegularButton>Hello World</RegularButton>
        </div>

    );
};

export default AllComponents;