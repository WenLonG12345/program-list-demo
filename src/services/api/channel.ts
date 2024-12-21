import { IChannelDetailsResponse, IChannelResponse } from "../../types/channel";
import { APIResult } from "../../types/common";
import axiosUtils from "../../utils/axiosUtils";

export const fetchAllChannel = async (): Promise<
  APIResult<IChannelResponse[]>
> => {
  return await axiosUtils.get("/channel/all.json");
};

export const fetchChannelDetails = async (
  channelId: string
): Promise<APIResult<IChannelDetailsResponse>> => {
  return axiosUtils.get(`/${channelId}.json`);
};
