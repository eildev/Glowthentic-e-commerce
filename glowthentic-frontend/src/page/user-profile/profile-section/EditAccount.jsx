import avatar from "../../../assets/img/user-profile/avatar.jpeg";
import CommonTitle from "../../../components/user-profile/CommonTitle";

const EditAccount = () => {
  return (
    <div className="px-2">
      <CommonTitle title={"Edit Account"} />

      <form>
        {/* Avatar Upload */}
        <div className="w-24 h-24 md:w-32 md:h-32 mx-auto my-4 rounded-full">
          <img
            className="w-full h-full rounded-full object-cover"
            src={avatar}
            alt="User Avatar"
          />
        </div>

        {/* Form Inputs */}
        <div>
          <div className="my-4">
            <label className="block text-xl text-dark font-normal font-encode mb-2">
              First Name
            </label>
            <input
              type="text"
              className="block w-full text-xl text-dark font-normal font-encode px-4 py-2 capitalize border border-hr-thin rounded-md outline-secondary"
              defaultValue={"Lotifa"}
            />
          </div>
          <div className="my-4">
            <label className="block text-xl text-dark font-normal font-encode mb-2">
              Last Name
            </label>
            <input
              type="text"
              className="block w-full text-xl text-dark font-normal font-encode px-4 py-2 capitalize border border-hr-thin rounded-md outline-secondary"
              defaultValue={"Uddin"}
            />
          </div>
          <div className="my-4">
            <label className="block text-xl text-dark font-normal font-encode mb-2">
              Address
            </label>
            <input
              type="text"
              className="block w-full text-xl text-dark font-normal font-encode px-4 py-2 capitalize border border-hr-thin rounded-md outline-secondary"
              defaultValue={
                "Wukanda Forever, Noakhali Division, 3 No Mainka Chipa"
              }
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="my-4">
            <label className="block text-xl text-dark font-normal font-encode mb-2">
              Country
            </label>
            <input
              type="text"
              className="block w-full text-xl text-dark font-normal font-encode px-4 py-2 capitalize border border-hr-thin rounded-md outline-secondary"
              defaultValue={"Uganda"}
            />
          </div>
          <div className="my-4">
            <label className="block text-xl text-dark font-normal font-encode mb-2">
              Province/Region
            </label>
            <select
              className="block w-full text-xl text-dark font-normal font-encode px-4 py-2 capitalize border border-hr-thin rounded-md outline-secondary"
              defaultValue={"Dhaka"}
            >
              <option value="Dhaka">Dhaka</option>
              <option value="Chattogram">Chattogram</option>
              <option value="Rajshahi">Rajshahi</option>
              <option value="Sylhet">Sylhet</option>
            </select>
          </div>
          <div className="my-4">
            <label className="block text-xl text-dark font-normal font-encode mb-2">
              Zone
            </label>
            <input
              type="text"
              className="block w-full text-xl text-dark font-normal font-encode px-4 py-2 capitalize border border-hr-thin rounded-md outline-secondary"
              defaultValue={"Banasree"}
            />
          </div>
          <div className="my-4">
            <label className="block text-xl text-dark font-normal font-encode mb-2">
              Postal Code
            </label>
            <input
              type="text"
              className="block w-full text-xl text-dark font-normal font-encode px-4 py-2 capitalize border border-hr-thin rounded-md outline-secondary"
              defaultValue={"6969696"}
            />
          </div>
          <div className="flex items-center my-4">
            <input type="radio" className="w-5 h-5" />
            <label className="block text-xl text-dark font-normal font-encode ml-2">
              Save this address to my profile
            </label>
          </div>
        </div>

        {/* Contact Information */}
        <div className="my-8">
          <CommonTitle title={"Contact"} />
          <div className="my-4">
            <label className="block text-xl text-dark font-normal font-encode mb-2">
              Email
            </label>
            <input
              type="email"
              className="block w-full text-xl text-dark font-normal font-encode px-4 py-2 capitalize border border-hr-thin rounded-md outline-secondary"
              defaultValue={"Lotifa.Uddin@gmail.com"}
            />
          </div>
          <div className="my-4">
            <label className="block text-xl text-dark font-normal font-encode mb-2">
              Phone Number
            </label>
            <input
              type="text"
              className="block w-full text-xl text-dark font-normal font-encode px-4 py-2 capitalize border border-hr-thin rounded-md outline-secondary"
              defaultValue={"0809210301002"}
            />
          </div>
        </div>

        <button
          type="submit"
          className="block w-full px-6 py-4 md:px-8 md:py-6 rounded-md text-lg font-normal font-encode text-white bg-secondary hover:bg-secondary-dark transition"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditAccount;
