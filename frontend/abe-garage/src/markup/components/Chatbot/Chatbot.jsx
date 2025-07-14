import { useEffect } from "react";

const VivoChatbot = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.botpress.cloud/webchat/v3.0/inject.js";
    script.async = true;

    script.onload = () => {
      window.botpress?.init({
        botId: "9885bdc9-4d08-4b55-8e25-4fb86867fffa",
        clientId: "6b3ca485-4a5e-41aa-bb46-a320256c1ce5",
        configuration: {
          version: "v1",
          botName: "AbeBot",
          botAvatar:
            "https://files.bpcontent.cloud/2025/07/01/16/20250701164014-FTWAA2RK.png",
          fabImage:
            "https://files.bpcontent.cloud/2025/07/09/10/20250709104706-VUIM0PHW.png",
          color: "#ef4444",
          variant: "solid",
          headerVariant: "solid",
          themeMode: "light",
          fontFamily: "ibm",
          radius: 4,
          feedbackEnabled: false,
          footer: "[⚡ by Botpress](https://botpress.com/?from=webchat)",
        },
      });

      window.botpress?.on("webchat:ready", () => {
        window.botpress.open();
      });
    };

    document.body.appendChild(script);
  }, []);

  return null; // No visible UI
};

export default VivoChatbot;
