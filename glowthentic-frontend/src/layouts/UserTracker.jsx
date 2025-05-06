import { useLocation } from "react-router-dom";
import { useTrackUserMutation } from "../redux/features/api/track/userTrackApi";
import { getGeoInfo } from "../utils/trackerInfo";
import { useEffect } from "react";

const UserTracker = () => {
  const location = useLocation();
  const [trackUser] = useTrackUserMutation();

  useEffect(() => {
    const track = async () => {
      const countryInfo = await getGeoInfo();
      const currentUrl = window.location.href;

      try {
        await trackUser({
          country_info: countryInfo,
          url: currentUrl,
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
