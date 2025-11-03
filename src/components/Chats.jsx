import { useEffect, useEffectEvent } from "react";

export default function Chats({ roomId }) {
  const onMessage = useEffectEvent((msg) => {
    console.log("Received:", msg);
  });

  useEffect(() => {
    const connection = createConnection(roomId);
    connection.on("message", onMessage);
    connection.connect();

    return () => connection.disconnect();
  }, [roomId]); // ✅ only roomId reactive
}
