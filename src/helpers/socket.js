import io from "socket.io-client";
import { socket_api } from "../useConfig";

const getSocket = () => {
    return io.connect(socket_api);
}

export default getSocket;