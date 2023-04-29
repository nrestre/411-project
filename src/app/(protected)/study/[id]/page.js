import Header from "@/components/Header";

import "./style.css";

export default function Study({ params }) {
  const { id } = params;
  return (
    <>
      <Header />
      <div className="study-container">
        <div>My Study Area: {id}</div>
      </div>
    </>
  );
}
