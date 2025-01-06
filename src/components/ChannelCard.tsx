import React from "react";
import { IChannelResponse } from "../types/channel";
import { FaRegStar } from "react-icons/fa";
import dayjs from "dayjs";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";

interface IChannelCard {
  channel?: IChannelResponse;
}

const ChannelCard: React.FC<IChannelCard> = ({ channel }) => {
  const navigate = useNavigate();
  if (!channel) return null;

  return (
    <div
      className="p-3 transition-transform transform bg-white rounded-md shadow-md cursor-pointer hover:-translate-y-1"
      onClick={() => navigate(`/channel/${channel.id}`)}
    >
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row gap-2">
          <img
            src={channel.imageUrl}
            alt={channel.title}
            width={50}
            height={50}
            className="w-auto h-[30px]"
          />

          <div className="flex flex-col">
            <span className="text-xs">{`CH ${channel.id}`}</span>
            <span className="text-sm">{channel.title}</span>
          </div>
        </div>

        <button className="p-3 bg-gray-200 rounded-full w-[40px] h-[40px] flex items-center justify-center hover:bg-gray-300">
          <FaRegStar />
        </button>
      </div>

      <hr className="bg-gray-500 w-full h-[1px] my-5" />

      <div>
        {channel?.currentSchedule.map((schedule, index) => {
          return (
            <div
              key={schedule.eventId}
              className={clsx(
                "flex flex-row items-center gap-3 text-xs",
                index === 0 && "font-semibold"
              )}
            >
              <span className="min-w-[55px]">
                {index === 0
                  ? "On Now"
                  : dayjs(schedule.datetime).format("hh:mma")}
              </span>
              <span>{schedule.title}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChannelCard;
