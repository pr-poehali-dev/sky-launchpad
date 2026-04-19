const BG_IMAGE = "https://cdn.poehali.dev/projects/eae76cf4-4efe-4f5a-9702-5f9d6d5f8d0f/files/aac30b32-4c65-4039-a223-f698d3eaf6ae.jpg";

export const GL = ({ hovering: _ }: { hovering: boolean }) => {
  return (
    <div id="webgl">
      <img
        src={BG_IMAGE}
        alt="background"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          display: "block",
        }}
      />
    </div>
  );
};