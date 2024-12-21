import React from "react";
import { IChannelResponse } from "../types/channel";
import { FaRegStar } from "react-icons/fa";

interface IChannelCard {
  channel?: IChannelResponse;
}

const ChannelCard: React.FC<IChannelCard> = ({ channel }) => {
  if (!channel) return null;

  return (
    <div className="p-3 bg-white rounded-md shadow-md">
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
    </div>
  );
};

export default ChannelCard;
