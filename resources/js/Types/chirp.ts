export type Chirp = {
  id: number;
  created_at: number;
  updated_at: number;
  message: string;
};

export type ChirpWithUserInfo = Chirp & {
  user: {
    id: number;
    name: string;
  };
};
