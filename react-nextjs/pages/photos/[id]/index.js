import Image from "next/image";
import Link from "next/link";

const index = ({ photo }) => {
  const { title, url } = photo; // 비구조 할당

  return (
    <div>
      <h2>image {title}</h2>

      <Image src={url} width={500} height={500} />

      <Link href="/photos">
        <a>go back</a>
      </Link>
    </div>
  );
};

export const getStaticProps = async (context) => {
  const { id } = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
  const photo = await res.json();

  return {
    props: {
      photo,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/photos?_start=0&_end=10"
  );
  const photos = await res.json();
  const ids = photos.map((photo) => photo.id);
  const paths = ids.map((id) => {
    return {
      params: { id: id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export default index;
