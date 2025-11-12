import React from "react";
import WrapPromime from '../../components/utils/WrapPromise'

const featchApi = (url) => {
  const response = fetch(url).then((res) => res.json());
  return WrapPromime(response) ;
};

export default featchApi;
