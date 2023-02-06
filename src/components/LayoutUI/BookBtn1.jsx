import React from "react";
import Link from "next/link";
const BookBtn1 = () => {
  return (
    <Link href={"/book-now"}>
      <button
        name="button"
        type="button"
        style={{
          display: "inlineFlex",
          color: "#000000",
          backgroundColor: "#f39624",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "36px",
          padding: "8px 12px",
          fontSize: "14px",
          fontWeight: 700,
          lineHeight: 1,
          textAlign: "center",
          textDecoration: "none",
          border: "1px solid transparent",
          borderRadius: "4px",
          outline: "none",
          cursor: "pointer",
          verticalAlign: "middle",
        }}
        className="jobber-button--green jobber-button"
      >
        Book Online
      </button>
    </Link>
  );
};

export default BookBtn1;
