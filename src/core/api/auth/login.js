import axios from "axios";
import instance, { baseURL } from "../axios/instance";

const login = async (users) => {
  try {
    //요청
    const response = await instance.post(`/user/login`, users);
    //토큰 받아오기
    const accessToken = response.headers.get("authorization");
    // token = 토큰 공백기준 1번째 인덱스를 스플릿해서 담아
    const token = accessToken.split(" ")[1];
    const loginSuccess = response.data.message;
    alert(response.data.message)
    //쿠기 저장
    return { token, loginSuccess };
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// const getUserAuth = async () => {
//   try {
//     const accessToken = response.headers.get("authorization");
//     console.log(accessToken)
//     const response = await baseURL.get(`/mypage/auction`, {
//       headers: {
//         Authorization: `Bearer ${accessToken}`,
//       },
//     });
//     console.log(response.data);
//     return response.data;
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// };

export { login };
