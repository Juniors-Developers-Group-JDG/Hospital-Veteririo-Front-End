'use server';

import { cookies } from 'next/headers';

type CreateCookie = (
  key: string,
  value: string,
  maxAgeInMs?: number,
) => Promise<void>;

export const createCookie: CreateCookie = async (
  key,
  value,
  maxAgeInMs = 60 * 60 * 12, // 12 hour
) => {
  cookies().set(`safe-pass.${key}`, value, {
    maxAge: maxAgeInMs,
  });
};

type DeleteCookie = (key: string) => Promise<void>;

export const deleteCookie: DeleteCookie = async key => {
  // @ts-ignore
  cookies().set(`safe-pass.${key}`, '', {
    maxAge: 0,
  });
};

type GetCookie = (key: string) => Promise<string | undefined>;

export const getCookie: GetCookie = async key =>
  cookies().get(`safe-pass.${key}`)?.value;
