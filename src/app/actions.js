'use server';

import { cookies } from 'next/headers';

export const createCookie = async (
  key,
  value,
  maxAgeInMs = 60 * 60 * 1, // 1 hour
) => {
  cookies().set(`vet.${key}`, value, {
    maxAge: maxAgeInMs,
  });
};

export const deleteCookie = async key => {
  // @ts-ignore
  cookies().set(`vet.${key}`, '', {
    maxAge: 0,
  });
};

export const getCookie = async key =>
  cookies().get(`vet.${key}`)?.value;
