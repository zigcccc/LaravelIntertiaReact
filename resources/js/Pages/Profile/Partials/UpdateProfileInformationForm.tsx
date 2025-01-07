import { Transition } from '@headlessui/react';
import { Link, useForm, usePage } from '@inertiajs/react';
import { type FormEvent } from 'react';

import { InputError } from '@/Components/InputError';
import { InputLabel } from '@/Components/InputLabel';
import { PrimaryButton } from '@/Components/PrimaryButton';
import { TextInput } from '@/Components/TextInput';

type UpdateProfileInformationProps = {
  mustVerifyEmail?: boolean;
  status?: string;
  className?: string;
};

export default function UpdateProfileInformation({
  mustVerifyEmail,
  status,
  className = '',
}: UpdateProfileInformationProps) {
  const user = usePage().props.auth.user;

  const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
    name: user.name,
    email: user.email,
  });

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    patch(route('profile.update'));
  };

  return (
    <section className={className}>
      <header>
        <h2 className="text-lg font-medium text-gray-900">Profile Information</h2>

        <p className="mt-1 text-sm text-gray-600">Update your account's profile information and email address.</p>
      </header>

      <form className="mt-6 space-y-6" onSubmit={submit}>
        <div>
          <InputLabel htmlFor="name" value="Name" />

          <TextInput
            autoComplete="name"
            className="mt-1 block w-full"
            id="name"
            isFocused
            onChange={(e) => setData('name', e.target.value)}
            required
            value={data.name}
          />

          <InputError className="mt-2" message={errors.name} />
        </div>

        <div>
          <InputLabel htmlFor="email" value="Email" />

          <TextInput
            autoComplete="username"
            className="mt-1 block w-full"
            id="email"
            onChange={(e) => setData('email', e.target.value)}
            required
            type="email"
            value={data.email}
          />

          <InputError className="mt-2" message={errors.email} />
        </div>

        {mustVerifyEmail && user.email_verified_at === null && (
          <div>
            <p className="mt-2 text-sm text-gray-800">
              Your email address is unverified.
              <Link
                as="button"
                className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                href={route('verification.send')}
                method="post"
              >
                Click here to re-send the verification email.
              </Link>
            </p>

            {status === 'verification-link-sent' && (
              <div className="mt-2 text-sm font-medium text-green-600">
                A new verification link has been sent to your email address.
              </div>
            )}
          </div>
        )}

        <div className="flex items-center gap-4">
          <PrimaryButton disabled={processing}>Save</PrimaryButton>

          <Transition
            enter="transition ease-in-out"
            enterFrom="opacity-0"
            leave="transition ease-in-out"
            leaveTo="opacity-0"
            show={recentlySuccessful}
          >
            <p className="text-sm text-gray-600">Saved.</p>
          </Transition>
        </div>
      </form>
    </section>
  );
}
