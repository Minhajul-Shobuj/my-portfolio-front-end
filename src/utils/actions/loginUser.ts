/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { cookies } from "next/headers";

export const loginUser = async (data: { email: string; password: string }) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASEAPI}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      cache: "no-store",
    });

    const userInfo = await res.json();

    if (!res.ok) {
      throw new Error(userInfo.message || "Login failed");
    }

    const token = userInfo?.data.accessToken;

    if (token) {
      const cookieStore = await cookies();
      cookieStore.set("Authorization", token, {
        httpOnly: true,
        secure: true,
      });
    }

    return userInfo;
  } catch (error: any) {
    return {
      success: false,
      error: error.message || "Something went wrong",
    };
  }
};
