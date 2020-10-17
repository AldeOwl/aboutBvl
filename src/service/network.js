const checkUrl = () => {
  let searchParams = new URLSearchParams(window.location.search);
  let id = searchParams.get('id');
  return parseInt(id);
};


const baseUrl = 'https://myvolley.ru/api';


async function getData(url) {
  const res = await fetch(`${baseUrl}${url}`);
  if (!res.ok) {
    throw new Error(`Could not fetch ${url} ${res.status}`)
  }
  return await res.json();
}

export async function getAbout() {
    return getData(`/org?id=1&request=about`);
}

export async function getDocuments() {
  return getData(`/org?id=1&request=docs`);
}