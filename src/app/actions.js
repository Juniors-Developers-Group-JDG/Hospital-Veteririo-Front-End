'use server';

import { cookies } from 'next/headers';

export const createCookie = (
  key,
  value,
  maxAgeInMs = 60 * 60 * 12, // 12 hour
) => {
  cookies().set(`vet.${key}`, value, {
    maxAge: maxAgeInMs,
  });
};

export const deleteCookie = key => {
  // @ts-ignore
  cookies().set(`vet.${key}`, '', {
    maxAge: 0,
  });
};

export const getCookie = key =>
  cookies().get(`vet.${key}`)?.value;
