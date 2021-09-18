import axios, { AxiosResponse } from "axios"

const baseURL: string = "http://localhost:4000"

export const countWords = async (
  formData: IURL
): Promise<AxiosResponse<ApiResponseDataType>> => {
  try {
    const url : IURL = {
      url: formData.url
    }
    const countWordsResp: AxiosResponse<ApiResponseDataType> = await axios.post(
      baseURL + "/countwords", 
      url
    );
    return countWordsResp
  } catch (error) {
    throw new Error("Issue with countWords")
  }
}

