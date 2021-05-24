/**
 * Parses a simple markdown url style
 * e.g this is an example [label](https://example.com) 
 */
export function transformMdURL(mdString: string, handler: (label: string, href: string) => string) {
  let newString = mdString;

  const rgx = /\[(.*?)\]\((.*?)\)/g;
  const matches = newString.matchAll(rgx);
  const urls = Array.from(matches, (m) => {
    return {
      match: m[0],
      label: m[1],
      href: m[2]
    };
  });

  urls.forEach(url => {
    const mapped = handler(url.label, url.href);
    newString = newString.replace(url.match, mapped);
  });

  return newString;
}