import { Link } from "react-router-dom";
import CommonTitle from "../../../components/user-profile/CommonTitle";
import coverImage from "../../../assets/img/user-profile/user-grid-bg.jpg";
import avatar from "../../../assets/img/user-profile/user.jpg";
import { useGetUserInfoQuery } from "../../../redux/features/api/auth/authApi";
import { useSelector } from "react-redux";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);

  const { data, isLoading, isError } = useGetUserInfoQuery(user?.id, {
    skip: !user?.id,
  });

  const myInfo = data?.userDetails ?? data?.user;

  const email = myInfo?.email ?? myInfo?.secondary_email ?? "N/A";

  return (
    <div className="min-h-screen bg-body py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Common Title */}
        <CommonTitle title="My Profile" />

        {/* Profile Header */}
        <div className="relative bg-white rounded-lg shadow-md overflow-hidden mb-6">
          {/* Cover Image */}
          <div className="relative h-32 sm:h-48 bg-gray-light">
            <img
              src={coverImage}
              alt="Cover"
              className="w-full h-full object-cover"
              onError={(e) => (e.target.src = "https://placehold.co/1200x300")}
            />
            <div className="absolute inset-0 bg-overlay"></div>
          </div>

          {/* Profile Image and Name */}
          <div className="relative flex flex-col sm:flex-row items-center sm:items-end px-4 sm:px-6 pb-6 -mt-16 sm:-mt-20">
            <div className="relative">
              <img
                src={myInfo?.image ?? avatar}
                alt={myInfo?.full_name ?? myInfo?.name ?? "Profile Image"}
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-white shadow-md object-cover"
              />
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-6 text-center sm:text-left">
              <h2 className="text-2xl sm:text-3xl font-encode font-semibold text-gray-bold">
                {myInfo?.full_name ?? myInfo?.name ?? "N/A"}
              </h2>
              <p className="text-base text-gray-bold mt-1">{email ?? "N/A"}</p>
            </div>
          </div>
        </div>

        {/* Profile Information */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6 animate-fadeIn">
          <h3 className="text-xl font-encode font-semibold text-primary mb-4">
            Personal Information
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-bold">Email</p>
              <p className="text-lg font-encode text-primary">
                {email ?? "N/A"}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-bold">Phone</p>
              <p className="text-lg font-encode text-primary">
                {myInfo?.phone_number ?? "N/A"}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-bold">Address</p>
              <p className="text-lg font-encode text-primary">
                {myInfo?.address ?? "N/A"}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-bold">City</p>
              <p className="text-lg font-encode text-primary">
                {myInfo?.city ?? "N/A"}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-bold">Postal Code</p>
              <p className="text-lg font-encode text-primary">
                {myInfo?.postal_code ?? "N/A"}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-bold">Police Station</p>
              <p className="text-lg font-encode text-primary">
                {myInfo?.police_station ?? "N/A"}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-bold">Country</p>
              <p className="text-lg font-encode text-primary">
                {myInfo?.country ?? "N/A"}
              </p>
            </div>
          </div>
        </div>

        {/* Edit Profile Button */}
        <div className="flex justify-center sm:justify-start gap-3">
          <Link
            to="edit"
            className="px-6 py-2 sm:px-8 sm:py-3 rounded-md text-lg font-normal font-encode text-white bg-secondary hover:bg-secondary-dark transition-all duration-300 shadow-md flex items-center gap-2"
          >
            Edit Profile
          </Link>
          <Link
            to="change-password"
            className="px-6 py-2 sm:px-8 sm:py-3 rounded-md text-lg font-normal font-encode text-white bg-secondary hover:bg-secondary-dark transition-all duration-300 shadow-md flex items-center gap-2"
          >
            Change Password
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
