import { type User } from 'vendor/laravel/breeze/stubs/inertia-react-ts/resources/js/types';

import { type ChirpWithUserInfo } from '@/Types/chirp';

export type ChirpProps = {
  chirp: ChirpWithUserInfo;
  user: User;
};
