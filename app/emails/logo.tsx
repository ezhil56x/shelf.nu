import { Heading, Img } from "@react-email/components";

export function LogoForEmail() {
  return (
    <div style={{ margin: "0 auto", display: "flex" }}>
      <Img
        src="cid:shelf-logo"
        alt="Shelf's logo"
        width="32"
        height="32"
        style={{ marginRight: "6px", width: "32px", height: "32px" }}
      />
      <Heading
        as="h1"
        style={{
          color: "#101828",
          fontWeight: "600",
          margin: "0",
        }}
      >
        shelf
      </Heading>
    </div>
  );
}
