import server from "live-server";

let hasStarted = false;
export default function liveserver(options = {}) {
  const params = {
    directories: [],
    file: "index.html",
    port: 1337,
    root: ".",
    ...options,
  };

  return {
    name: "live-server-plugin",
    buildEnd: () => {
      if (!hasStarted) {
        server.start(params);
        hasStarted = true;
      }
    },
  };
}
