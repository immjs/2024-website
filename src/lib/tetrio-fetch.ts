export function tetrioFetch(path: string, init: RequestInit = {}) {
  const newHeaders = new Headers(init.headers);
  newHeaders.set(
    "X-Session-Id",
    `immjsdotdev-${process.env.NODE_ENV}-${path.replace(/\//g, "-")}`,
  );
  return fetch(`https://ch.tetr.io/api${path}`, {
    ...init,
    headers: newHeaders,
  })
    .then((v) => v.json())
    .then((v) => v.data);
}
