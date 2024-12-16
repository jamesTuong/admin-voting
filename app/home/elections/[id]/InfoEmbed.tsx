import { useEffect } from "react";

const InfogramEmbed = () => {
  useEffect(() => {
    // Inject the Infogram embed script
    const script = document.createElement("script");
    script.src = "https://e.infogram.com/js/dist/embed-loader-min.js";
    script.async = true;
    script.id = "infogram-async";

    document.body.appendChild(script);

    return () => {
      // Clean up the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div
        className="infogram-embed"
        data-id="6d156d18-0a94-4b7b-9670-d18865f68f93"
        data-type="interactive"
        data-title="Election Infographic"
      ></div>
      <div
        style={{
          padding: "8px 0",
          fontFamily: "Arial, sans-serif",
          fontSize: "13px",
          lineHeight: "15px",
          textAlign: "center",
          borderTop: "1px solid #dadada",
          margin: "0 30px",
        }}
      >
        <a
          href="https://infogram.com/6d156d18-0a94-4b7b-9670-d18865f68f93"
          style={{ color: "#989898", textDecoration: "none" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          Election Infographic
        </a>
        <br />
        <a
          href="https://infogram.com"
          style={{ color: "#989898", textDecoration: "none" }}
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          Infogram
        </a>
      </div>
    </div>
  );
};

export default InfogramEmbed;
