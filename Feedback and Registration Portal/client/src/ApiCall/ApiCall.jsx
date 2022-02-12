exports.apiCallPost = async (url, payload) => {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
      // authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  }).then((response) => response.json());

  return res;
};

exports.apiCallPostToken = async (url, payload, token) => {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  }).then((response) => response.json());

  return res;
};

exports.apiCallGet = async (url) => {
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
      // authorization: `Bearer ${token}`,
    },
  }).then((response) => response.json());

  return res;
};

exports.apiCallGetToken = async (url, token) => {
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then((response) => response.json());

  return res;
};
