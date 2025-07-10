import CommonTitle from "../../../components/user-profile/CommonTitle";

const ProfileSkeleton = () => {
  return (
    <div className="min-h-screen animate-pulse">
      {/* Common Title */}
      <CommonTitle title="My Profile" />

      {/* Profile Header Skeleton */}
      <div className="skeleton relative bg-white mb-6">
        {/* Cover Image Skeleton */}
        <div className="relative h-32 sm:h-48 bg-gray-200"></div>

        {/* Profile Image and Name Skeleton */}
        <div className="relative flex flex-col sm:flex-row items-center sm:items-end px-4 sm:px-6 pb-6 -mt-16 sm:-mt-20">
          <div className="relative">
            <div className="skeleton w-24 h-24 sm:w-32 sm:h-32 rounded-full border-hr-thin border bg-body shadow-md"></div>
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-6 text-center sm:text-left">
            <div className="skeleton h-8 sm:h-9 w-48 bg-body rounded-md"></div>
            <div className="skeleton h-5 w-32 bg-body rounded-md mt-2"></div>
          </div>
        </div>
      </div>

      {/* Profile Information Skeleton */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="h-6 w-48 bg-body rounded-md mb-4"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[...Array(8)].map((_, index) => (
            <div key={index}>
              <div className="bg-body h-4 w-24  rounded-md mb-1.5"></div>
              <div className="bg-body h-5 w-40 rounded-md"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Edit Profile Button Skeleton */}
      <div className="flex justify-center sm:justify-start gap-3">
        <div className="h-10 w-32 sm:w-40 bg-white rounded-md"></div>
        <div className="h-10 w-32 sm:w-40 bg-white rounded-md"></div>
      </div>
    </div>
  );
};

export default ProfileSkeleton;
