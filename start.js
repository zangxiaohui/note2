const axios = require("axios");

const schema = require("../dist/result/report/schema.json");
const body = { content: schema };

const API_BASE_URL = "https://develop3.api.factchina.com/hontoda";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb3JwaWQiOiJkaW5nN2Q3N2U3NTMzODNhNWY4NzM1YzJmNDY1N2ViNjM3OGYiLCJ1c2VyaWQiOiIxMDMxNDE2OTMyNzEzNTY3IiwidmVuZG9yX2lkIjoiMTIzNCIsImVtcGxveWVlX2lkIjoiNDk5MjkwODUwMTE1IiwiaWF0IjoxNjc5Mjk5Njk5LCJleHAiOjE2NzkzNzE2OTksInN1YiI6ImRpbmc0aG1qZ3BxbnRxeTVkMWVoIn0.5bfn2Z6Juu3LhOg4v0rguZPJdbWvV85w3BF2JHG_T1s";
const customer_id = "1979";

// 获取背调单的最新版本
axios(
  `${API_BASE_URL}/resource/hon-sencha.schema/result/customers/${customer_id}/?language=zh&type=report`,
  {
    headers: {
      authorization: token,
    },
    referrer: "https://develop3.h5.factchina.com/",
    referrerPolicy: "strict-origin-when-cross-origin",
    body: null,
    method: "GET",
    mode: "cors",
    credentials: "include",
  }
)
  .then((res) => {
    const version = res.data.version;
    console.log(`${customer_id}中文背调单的最新版本是`, version);
    axios({
      method: "put",
      url: `${API_BASE_URL}/resource/hon-sencha.schema/result/customers/${customer_id}/versions/${version}/?type=report&language=zh`,
      data: JSON.stringify(body),
      headers: {
        accept: "application/json",
        "accept-language": "en-US,en;q=0.9",
        authorization: token,
        "cache-control": "no-cache",
        "content-type": "application/json;charset=UTF-8",
        pragma: "no-cache",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        Referer: "https://develop3.h5.factchina.com/",
        "Referrer-Policy": "strict-origin-when-cross-origin",
      },
      referrer: "https://develop3.h5.factchina.com/",
      referrerPolicy: "strict-origin-when-cross-origin",
      mode: "cors",
      credentials: "include",
    })
      .then(() => {
        console.log(`${customer_id}中文背调单更新成功`);
      })
      .catch((e) => console.log(e));
  })
  .catch((e) => console.log(e));

// 获取录入单的最新版本
axios(
  `${API_BASE_URL}/resource/chanoma.schema/result/customers/${customer_id}/?language=zh&type=report_section`,
  {
    headers: {
      authorization: token,
    },
    referrer: "https://develop3.h5.factchina.com/",
    referrerPolicy: "strict-origin-when-cross-origin",
    body: null,
    method: "GET",
    mode: "cors",
    credentials: "include",
  }
)
  .then((res) => {
    const version = res.data.version;
    console.log(`${customer_id}中文录入单的最新版本是`, version);
    axios({
      method: "put",
      url: `${API_BASE_URL}/resource/chanoma.schema/result/customers/${customer_id}/versions/${version}/?type=report_section&language=zh`,
      data: JSON.stringify(body),
      headers: {
        accept: "application/json",
        "accept-language": "en-US,en;q=0.9",
        authorization: token,
        "cache-control": "no-cache",
        "content-type": "application/json;charset=UTF-8",
        pragma: "no-cache",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        Referer: "https://develop3.h5.factchina.com/",
        "Referrer-Policy": "strict-origin-when-cross-origin",
      },
      referrer: "https://develop3.h5.factchina.com/",
      referrerPolicy: "strict-origin-when-cross-origin",
      mode: "cors",
      credentials: "include",
    })
      .then(() => {
        console.log(`${customer_id}中文背调单更新成功`);
      })
      .catch((e) => console.log(e));
  })
  .catch((e) => console.log(e));
