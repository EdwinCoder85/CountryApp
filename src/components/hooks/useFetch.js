import axios from 'axios'
import { useState } from 'react'

const useFetch = (url, urlName, urlRegion, urlLanguage) => {

  const [infoApi, setInfoApi] = useState()

  const getCountries = () => {
    axios
      .get(url)
      .then((res) => setInfoApi(res.data))
      .catch((err) => console.log(err));
  };

  const getByName = () => {
    axios
      .get(urlName)
      .then((res) => setInfoApi(res.data))
      .catch((err) => console.log(err));
  };

  const getByRegion = () => {
    axios
      .get(urlRegion)
      .then((res) => setInfoApi(res.data))
      .catch((err) => console.log(err));
  };

  const getByLanguage = () => {
    axios
      .get(urlLanguage)
      .then((res) => setInfoApi(res.data))
      .catch((err) => console.log(err));
  };


  return [ infoApi, getCountries, getByName, getByRegion, getByLanguage ]
}

export default useFetch