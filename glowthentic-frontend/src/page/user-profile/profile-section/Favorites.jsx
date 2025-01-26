import { Icon } from "@iconify/react";
import CommonTitle from "../../../components/user-profile/CommonTitle";
// import f1 from "../../../assets/f2.jpeg";
import f1 from "../../../assets/img/user-profile/f1.jpeg";

const Favorites = () => {
  return (
    <div className="px-2 md:w-[600px] mx-auto">
      <CommonTitle title={"Favorites Product"} />

      <div>
        {/* favorite product cards */}
        <div className="flex items-center my-4 md:my-8">
          <div className="w-5/12 md:w-3/12 px-4 pt-4 bg-light relative">
            <img className="w-full object-cover" src={f1} alt="" />
            <div className="absolute right-4 bottom-4 bg-light p-2">
              <Icon
                className="w-4 h-4 md:w-8 md:h-8 text-secondary "
                icon={"mdi:cards-heart"}
              />
            </div>
          </div>
          <div className="w-7/12 md:w-9/12 p-4">
            <h5 className="text-sm md:text-xl text-dark font-bold font-encode">
              Absolute New York Flawless Face Foundation Primer Clear NF080
            </h5>
            <div className="flex justify-between items-center my-2">
              <p className="text-sm md:text-md text-gray font-normal font-encode">
                Makeup
              </p>
              <p className="flex items-center text-sm md:text-lg text-dark font-semibold font-encode">
                <Icon
                  className="w-4 h-4 md:w-8 md:h-8 text-secondary"
                  icon={"mdi:star"}
                />
                4.5
              </p>
            </div>
            <p className="text-sm md:text-xl text-dark font-semibold font-encode">
              $59,66
            </p>
          </div>
        </div>
        {/* favorite product cards */}
        <div className="flex items-center my-4 md:my-8">
          <div className="w-5/12 md:w-3/12 px-4 pt-4 bg-light relative">
            <img className="w-full object-cover" src={f1} alt="" />
            <div className="absolute right-4 bottom-4 bg-light p-2">
              <Icon
                className="w-4 h-4 md:w-8 md:h-8 text-secondary "
                icon={"mdi:cards-heart"}
              />
            </div>
          </div>
          <div className="w-7/12 md:w-9/12 p-4">
            <h5 className="text-sm md:text-xl text-dark font-bold font-encode">
              Absolute New York Flawless Face Foundation Primer Clear NF080
            </h5>
            <div className="flex justify-between items-center my-2">
              <p className="text-sm md:text-md text-gray font-normal font-encode">
                Makeup
              </p>
              <p className="flex items-center text-sm md:text-lg text-dark font-semibold font-encode">
                <Icon
                  className="w-4 h-4 md:w-8 md:h-8 text-secondary"
                  icon={"mdi:star"}
                />
                4.5
              </p>
            </div>
            <p className="text-sm md:text-xl text-dark font-semibold font-encode">
              $59,66
            </p>
          </div>
        </div>
        {/* favorite product cards */}
        <div className="flex items-center my-4 md:my-8">
          <div className="w-5/12 md:w-3/12 px-4 pt-4 bg-light relative">
            <img className="w-full object-cover" src={f1} alt="" />
            <div className="absolute right-4 bottom-4 bg-light p-2">
              <Icon
                className="w-4 h-4 md:w-8 md:h-8 text-secondary "
                icon={"mdi:cards-heart"}
              />
            </div>
          </div>
          <div className="w-7/12 md:w-9/12 p-4">
            <h5 className="text-sm md:text-xl text-dark font-bold font-encode">
              Absolute New York Flawless Face Foundation Primer Clear NF080
            </h5>
            <div className="flex justify-between items-center my-2">
              <p className="text-sm md:text-md text-gray font-normal font-encode">
                Makeup
              </p>
              <p className="flex items-center text-sm md:text-lg text-dark font-semibold font-encode">
                <Icon
                  className="w-4 h-4 md:w-8 md:h-8 text-secondary"
                  icon={"mdi:star"}
                />
                4.5
              </p>
            </div>
            <p className="text-sm md:text-xl text-dark font-semibold font-encode">
              $59,66
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorites;
