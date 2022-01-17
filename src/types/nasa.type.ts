export interface INasaApiData {
  id: number;
  concepts?: string;
  concept_tags?: boolean;
  copyright?: string;
  date: string;
  explanation: string;
  hdurl?: string;
  likeIcon: string;
  likeIconColor: string;
  media_type: string;
  resource?: Record<string, string>;
  service_version: string;
  thumbnail_url?: string;
  title: string;
  url: string;
}
