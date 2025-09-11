import { useLocation } from "react-router-dom";
import { useTrackUserMutation } from "../redux/features/api/track/userTrackApi";
import { getGeoInfo } from "../utils/trackerInfo";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const UserTracker = () => {
  const location = useLocation();
  const [trackUser] = useTrackUserMutation();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    const track = async () => {
      const countryInfo = await getGeoInfo();
      const currentUrl = window.location.href;
      const systemUserName = user ? user.name : "Guest";

      try {
        await trackUser({
          country_info: countryInfo,
          url: currentUrl,
          system_user_name: systemUserName,
        });
      } catch (error) {
        console.error("Error tracking user:", error);
      }
    };

    track();
  }, [location, trackUser]);

  return null;
};

export default UserTracker;
