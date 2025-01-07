import { useForm, Head } from '@inertiajs/react';
import { type FormEvent } from 'react';
import { type PageProps } from 'vendor/laravel/breeze/stubs/inertia-react-ts/resources/js/types';

import { Chirp } from '@/Components/Chirp';
import { InputError } from '@/Components/InputError';
import { PrimaryButton } from '@/Components/PrimaryButton';
import { AuthenticatedLayout } from '@/Layouts/AuthenticatedLayout';
import { type ChirpWithUserInfo } from '@/Types/chirp';

type ChirpsIndexProps = {
  auth: PageProps['auth'];
  chirps: ChirpWithUserInfo[];
};

export default function ChirpsIndex({ chirps }: ChirpsIndexProps) {
  const { data, setData, post, processing, reset, errors } = useForm({
    message: '',
  });

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    post(route('chirps.store'), { onSuccess: () => reset() });
  };

  return (
    <AuthenticatedLayout>
      <Head title="Chirps" />

      <div className="mx-auto max-w-2xl p-4 sm:p-6 lg:p-8">
        <form onSubmit={submit}>
          <textarea
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            onChange={(e) => setData('message', e.target.value)}
            placeholder="What's on your mind?"
            value={data.message}
          />
          <InputError className="mt-2" message={errors.message} />
          <PrimaryButton className="mt-4" disabled={processing}>
            Chirp
          </PrimaryButton>
        </form>
        <div className="mt-6 divide-y rounded-lg bg-white shadow-sm">
          {chirps.map((chirp) => (
            <Chirp key={chirp.id} chirp={chirp} />
          ))}
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
