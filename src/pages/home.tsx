import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { fetchAllChannel } from "../services/api/channel";
import ChannelCard from "../components/ChannelCard";
import { FaSearch, FaStar } from "react-icons/fa";
import {
  AiOutlineSortAscending,
  AiOutlineSortDescending,
} from "react-icons/ai";
import { useSelector } from "react-redux";
import { AppState } from "../services/redux/store";
import { useNavigate } from "react-router-dom";
import { FaRadio } from "react-icons/fa6";
// import { debounce } from "lodash";
import clsx from "clsx";
import { debounce } from "lodash";

const HomePage = () => {
  const navigate = useNavigate();

  const [searchEnabled, setSearchEnabled] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | "default">(
    "default"
  );
  const [isRadio, setIsRadio] = useState(false);

  const channelQuery = useQuery({
    queryKey: ["all_programs"],
    queryFn: fetchAllChannel,
    select: (data) => data.response,
  });

  const favouriteList = useSelector(
    (state: AppState) => state.program?.favouriteList
  );

  const debouncedTerms = debounce((value: string) => setSearchTerm(value), 500);

  const { data: channelList, isLoading } = channelQuery;

  const filteredChannelList = channelList
    ?.filter((channel) =>
      channel.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    ?.filter((channel) =>
      isRadio ? channel.isRadioExclusive === isRadio : channel
    )
    .sort((a, b) => {
      if (sortOrder === "default") return 0;
      return sortOrder === "asc"
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title);
    });

  if (isLoading) {
    return <div className="container mx-auto my-5">Loading...</div>;
  }

  return (
    <div className="container mx-auto my-5">
      <div className="flex flex-row items-center justify-between mb-2">
        <h1 className="text-[32px] font-semibold">Channels</h1>

        <div className="flex flex-row gap-2">
          <button
            className={clsx(
              "p-2 bg-gray-100 rounded-md hover:bg-gray-300",
              searchEnabled && "bg-gray-300"
            )}
            onClick={() => setSearchEnabled((prev) => !prev)}
          >
            <FaSearch />
          </button>

          <div className="flex flex-row items-center gap-2 p-2 bg-gray-100 rounded-md hover:bg-gray-300">
            <FaRadio />
            <input
              type="checkbox"
              checked={isRadio}
              onChange={(e) => setIsRadio(e.target.checked)}
            />
          </div>

          <button
            className={clsx(
              "p-2 bg-gray-100 rounded-md hover:bg-gray-300",
              sortOrder !== "default" && "bg-gray-300"
            )}
            onClick={() => {
              setSortOrder(sortOrder === "asc" ? "desc" : "asc");
            }}
          >
            {sortOrder === "asc" ? (
              <AiOutlineSortAscending />
            ) : (
              <AiOutlineSortDescending />
            )}
          </button>
          <button
            className="p-2 bg-gray-100 rounded-md hover:bg-gray-300"
            onClick={() => navigate("/favourite")}
          >
            <FaStar />
          </button>
        </div>
      </div>

      {searchEnabled && (
        <div className="flex items-center justify-end gap-2 mb-2">
          <div>Channel Name: </div>
          <input
            placeholder="Please enter"
            className="px-2 py-1 border border-gray-300 rounded-md"
            onChange={(e) => {
              debouncedTerms(e.target.value);
            }}
          />
        </div>
      )}

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
        {filteredChannelList?.map((channel) => (
          <ChannelCard
            key={channel.id}
            channel={channel}
            isFavourite={!!favouriteList?.find((fav) => fav.id === channel.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
