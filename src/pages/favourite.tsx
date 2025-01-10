import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../services/redux/store";
import ChannelCard from "../components/ChannelCard";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const FavouritePage = () => {
  const navigate = useNavigate();
  const favouriteList = useSelector(
    (state: AppState) => state.program?.favouriteList
  );

  return (
    <div className="container mx-auto my-5">
      <div className="flex flex-row items-center gap-2">
        <IoArrowBack size={25} onClick={() => navigate(-1)} className="cursor-pointer"/>
        <h1 className="text-[32px] font-semibold">Favourite List</h1>
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
        {favouriteList?.map((channel) => (
          <ChannelCard key={channel.id} channel={channel} isFavourite />
        ))}
      </div>
    </div>
  );
};

export default FavouritePage;
