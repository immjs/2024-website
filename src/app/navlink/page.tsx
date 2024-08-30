export default async function Page() {
  const links = await fetch('https://dimden.neocities.org/navlink/')
    .then((v) => v.text())
    .then((v) => v.match(/sites ?= ?([^;]+);/i)?.[1]);

  if (!links) {
    return (
      <body>
        <meta httpEquiv="refresh" content="0;URL=https://dimden.neocities.org/navlink/" />
      </body>
    );
  }

  const linksParsed = JSON.parse(links);
  const randomLink = linksParsed[Math.floor(Math.random() * linksParsed.length)];

  return (
    <body style={{ overflow: 'hidden' }}>
      <meta httpEquiv="refresh" content="30" />
      <a href={randomLink[0]}>
        <img src={randomLink[1]} style={{ width: '100vw', height: '100vh', objectFit: 'cover' }} />
      </a>
      <a href="https://dimden.dev/navlinkads/" style={{ border: '1px solid', bottom: 0, left: 0, fontSize: 10, padding: 2, fontFamily: 'serif', lineHeight: '1em', color: 'dimgray', position: 'absolute', backgroundColor: '#ffffffc0', borderRadius: "0 2px 0 0" }}>
        NavLink Ads
      </a>
    </body>
  );
}
