import { AxiosResponse } from "axios";
import request from "./request";
import { QueryParamsState } from "../features/MainSection/mainSection.state";

export class ContactsRequest {
  public GetContacts = (params: QueryParamsState): Promise<AxiosResponse> => {
    const url = "https://api.dev.pastorsline.com/api/contacts.json";

    return request.get(url, { params: { companyId: "171", ...params } });
  };
}

const instance = new ContactsRequest();

export default instance;
