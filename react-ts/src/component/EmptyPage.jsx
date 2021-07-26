import { Link } from "react-router-dom";

const EmptyPage = () => {
  return (
    <>
      <h2>잘못된 접근입니다.</h2>
      <Link to="/">돌이가기</Link>
    </>
  );
};

export default EmptyPage;
