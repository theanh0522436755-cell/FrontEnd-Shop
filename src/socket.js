import { io } from "socket.io-client";

// chỉ khởi tạo 1 socket duy nhất
const socket = io("https://backend-shop-production-14fa.up.railway.app", {
  autoConnect: true,
});

export default socket;
