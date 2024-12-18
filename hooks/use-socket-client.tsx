"use client";

import { useEffect } from "react";
import { useSocket } from "@/contexts/socket-context";

export const useSocketClient = (
  eventName: string,
  callback: (data: any) => void
) => {
  const { socket } = useSocket();

  useEffect(() => {
    if (!socket) return;

    // Add event listener
    socket.on(eventName, callback);

    // Cleanup
    return () => {
      socket.off(eventName, callback);
    };
  }, [socket, eventName, callback]);

  return socket;
};
