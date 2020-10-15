const checkUrl = () => {
  let searchParams = new URLSearchParams(window.location.search);
  let id = searchParams.get('id');
  return parseInt(id);
};


const baseUrl = 'https://myvolley.ru/api';


async function getData(url) {
  const res = await fetch(`${baseUrl}${url}${checkUrl()}`);
  if (!res.ok) {
    throw new Error(`Could not fetch ${url} ${res.status}`)
  }
  return await res.json();
}

export async function getAbout() {
    return getData(`/tournament?request=about&id=`);
}

export async function getDocuments() {
  return getData(`/tournament?request=docs&id=`);
}