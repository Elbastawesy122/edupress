export default interface Article {
  id: number;
  title: string;
  description: string;
  social_image: string;
  canonical_url: string;
  published_at: string;
  reading_time_minutes: number;
  tag_list: string[];
  user: {
    id: number;
    name: string;
    profile_image: string;
  };
}