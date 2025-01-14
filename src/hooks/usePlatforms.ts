import platform from "../Data/platform";
interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => ({ data: platform, error: null });

export default usePlatforms;
