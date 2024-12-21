export type ICurrentSchedule = {
  eventId: string;
  title?: string;
  programmeId?: string;
  episodeId: string;
  datetime: string;
  datetimeInUtc: string;
  duration: string;
  siTrafficKey: string;
  detailUrl: string;
  imageUrl?: string;
  genre?: string;
  subGenre?: string;
};

export type IChannelResponse = {
  id: number;
  title: string;
  description: string;
  stbNumber: string;
  language: string;
  category: string;
  originalImage: string;
  backupImage: string;
  imageUrl: string;
  isRadioExclusive: boolean;
  isAstroGoExclusive: boolean;
  isOnDemandExclusive: boolean;
  filters: string[];
  subtitle: string;
  subtitle_my: string;
  detailUrl: string;
  currentSchedule: ICurrentSchedule[];
};

export type IChannelDetailsResponse = {
  id: number;
  title: string;
  description: string;
  stbNumber: string;
  language: string;
  category: string;
  originalImage: string;
  backupImage: string;
  imageUrl: string;
  isRadioExclusive: boolean;
  isAstroGoExclusive: boolean;
  isOnDemandExclusive: boolean;
  filters: string[];
  subtitle: string;
  subtitle_my: string;
  detailUrl: string;
  schedule: {
    [x: string]: ICurrentSchedule[];
  }
};
