import { Card } from "@/components/ui/card";
import axios from "axios";
import { useEffect, useState } from "react";

const MyApps = () => {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    const getMyApps = async () => {
      const { data } = await axios.get(
        "https://mern-stack-portfolio-backend-8509.onrender.com/api/v1/softwareapplication/getall",
        { withCredentials: true }
      );

      setApps(data.softwareApplications);
    };

    getMyApps();
  }, []);

  return (
    <div className="w-full flex flex-col gap-8 sm:gap-12">
      <h1 className="text-tubeLight-effects flex items-center text-[2rem] sm:text-[2.75rem] md:text-[3rem] lg:text-[3.8rem] tracking-[15px] dancing_text mx-auto w-fit">
        MY APPS
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {apps &&
          apps.map((element) => {
            return (
              <Card
                className="h-fit p-7 flex flex-col justify-center items-center gap-3 border border-teal-500"
                key={element._id}
              >
                <img
                  src={element.svg && element.svg.url}
                  alt="apps"
                  className="h-12 sm:h-24 w-auto"
                />
                <p className="text-muted-foreground text-center">
                  {element.name}
                </p>
              </Card>
            );
          })}
      </div>
    </div>
  );
};

export default MyApps;
