import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { fetchChannelDetails } from "../services/api/channel";
import dayjs from "dayjs";
import { useParams } from "react-router-dom";
import clsx from "clsx";

const ChannelDetailsPage = () => {
  const params = useParams();
  const channelId = params?.channelId;

  const detailsQuery = useQuery({
    queryKey: ["channel_details", channelId],
    queryFn: () => fetchChannelDetails(channelId || ""),
    select: (data) => data.response,
  });

  const { data: channelDetails, isLoading } = detailsQuery;

  const [currentDay, setCurrentDay] = useState<string | null>(null);

  useEffect(() => {
    const firstDay = channelDetails?.schedule
      ? Object.keys(channelDetails.schedule)[0]
      : null;
    setCurrentDay(firstDay);
  }, [channelDetails?.schedule]);

  if (isLoading) {
    return <div className="container mx-auto my-5">Loading...</div>;
  }

  return (
    <div className="container mx-auto my-5">
      <div className="flex flex-row items-center gap-2">
        <img
          src={channelDetails?.imageUrl}
          alt={channelDetails?.title}
          width={100}
          height={100}
          className="w-auto h-[50px]"
        />

        <div className="flex flex-col">
          <span className="">{`CH ${channelDetails?.id}`}</span>
          <span className="font-semibold">{channelDetails?.title}</span>
        </div>
      </div>

      <div className="my-5">{channelDetails?.description}</div>

      {channelDetails?.schedule && (
        <div>
          <div className="flex flex-row mb-3 border-b-2 border-gray-100">
            {Object.entries(channelDetails?.schedule).map(([day]) => (
              <button
                key={day}
                className={clsx(
                  "text-lg px-5",
                  currentDay === day && "text-blue-500 border-blue-500 border-b-2 mb-[-2px]"
                )}
                onClick={() => setCurrentDay(day)}
              >
                {dayjs(day).format("ddd")}
              </button>
            ))}
          </div>

          {currentDay &&
            channelDetails?.schedule[currentDay].map((program) => (
              <div key={program.eventId} className="flex flex-row gap-3">
                <span className="min-w-[80px]">
                  {dayjs(program.datetime).format("hh:mma")}
                </span>
                <span className="">{program.title}</span>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default ChannelDetailsPage;
