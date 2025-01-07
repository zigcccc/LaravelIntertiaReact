import dayjs from 'dayjs';

import { type ChirpProps } from './Chirp.types';

export function Chirp({ chirp }: ChirpProps) {
  return (
    <div className="flex space-x-2 p-6">
      <svg
        className="h-6 w-6 -scale-x-100 text-gray-600"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-gray-800">{chirp.user.name}</span>
            <small className="ml-2 text-sm text-gray-600">{dayjs(chirp.created_at).fromNow()}</small>
          </div>
        </div>
        <p className="mt-4 text-lg text-gray-900">{chirp.message}</p>
      </div>
    </div>
  );
}