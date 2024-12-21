import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchAllChannel } from "../services/api/channel";
import ChannelCard from "../components/ChannelCard";
import { FaSearch } from "react-icons/fa";
import { AiOutlineSortAscending, AiOutlineSortDescending } from "react-icons/ai";

const HomePage = () => {
  const channelQuery = useQuery({
    queryKey: ["all_programs"],
    queryFn: fetchAllChannel,
    select: (data) => data.response,
  });

  const { data: channelList, isLoading } = channelQuery;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto">
      <div className="flex flex-row items-center justify-between mb-3">
        <h1 className="text-[32px] font-semibold">Channels</h1>

        <div className="flex flex-row gap-2">
          <button className="p-2 bg-gray-100 rounded-md hover:bg-gray-300">
            <FaSearch />
          </button>
          <button className="p-2 bg-gray-100 rounded-md hover:bg-gray-300">
            <AiOutlineSortAscending />
          </button>
          <button className="p-2 bg-gray-100 rounded-md hover:bg-gray-300">
            <AiOutlineSortDescending />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-3 gap-y-2">
        {channelList?.map((channel) => (
          <ChannelCard key={channel.id} channel={channel} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
