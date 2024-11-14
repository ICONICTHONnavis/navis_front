import axios from 'axios';
import { applyInterceptors } from './interceptor';

//.env로 숨긴 url 주소 (backend 주소 <-> front 주소)
// eslint-disable-next-line no-undef
const BASE_URL = process.env.REACT_APP_BACKEND_SERVER_URL;
const BASE_AI_URL = process.env.REACT_APP_AI_SERVER_URL;

const defaultInstance = axios.create({
  baseURL: BASE_URL,
});

const defaultAIInstance = axios.create({
  baseURL: BASE_AI_URL,
});

const aiChatInstance = axios.create(defaultAIInstance.defaults);
aiChatInstance.defaults.baseURL += '/';

//applyInterceptors(exampleInstance);

export { defaultInstance, aiChatInstance };
