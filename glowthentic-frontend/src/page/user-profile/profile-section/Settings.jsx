import CommonTitle from "../../../components/user-profile/CommonTitle";

const Settings = () => {
  return (
    <div className="px-2 w-full mx-auto">
      <CommonTitle title={"Account Settings"} />

      <div>
        <div className="my-4">
          <h3 className="flex items-center justify-between text-lg md:text-2xl font-bold font-encode">
            Email Notification
            <input
              type="checkbox"
              value="synthwave"
              className="toggle text-secondary"
            />
          </h3>
          <p className="text-sm md:text-md text-gray font-normal font-encode my-2">
            We would like you to be first to get customized news, special
            offers, invites to events & exclusive competitions related to
            JERSKITS, our products and our collaboration with third parties.
          </p>
        </div>
        <div className="my-4">
          <h3 className="flex items-center justify-between text-lg md:text-2xl font-bold font-encode">
            Shipping Address
            <span className="font-normal md:text-md text-gray cursor-pointer">
              Edit
            </span>
          </h3>
          <p className="text-sm md:text-md text-gray font-normal font-encode my-2">
            We would like you to be first to get customized news, special
            offers, invites to events & exclusive competitions related to
            JERSKITS, our products and our collaboration with third parties.
          </p>
        </div>
        <div className="my-4">
          <h3 className="flex items-center justify-between text-lg md:text-2xl font-bold font-encode">
            Payment Method
            <span className="font-normal md:text-md text-gray cursor-pointer">
              Edit
            </span>
          </h3>
          <p className="text-sm md:text-md text-gray font-normal font-encode my-2">
            We would like you to be first to get customized news, special
            offers, invites to events & exclusive competitions related to
            JERSKITS, our products and our collaboration with third parties.
          </p>
          <div className="flex items-center mt-2">
            <button className="px-6 py-3 rounded-md text-lg font-normal font-encode uppercase text-white bg-secondary">
              Visa
            </button>
            <p className="text-sm md:text-lg text-gray font-normal font-encode ml-4">
              5168 **** **** 1932
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
