import { cookies } from "next/headers";

export const getToken = () => cookies().get('csrf-token')?.value;
