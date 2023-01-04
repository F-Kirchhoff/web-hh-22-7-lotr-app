import { volumes } from "../../../lib/data";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

const volume = volumes.find(
  (volume) => volume.slug === "the-fellowship-of-the-ring"
);

export default function Page() {
  return (
    <Card>
      <Link href="/volumes">Back to Overview</Link>
      <h1>{volume.title}</h1>
      <p>{volume.description}</p>
      <ul>
        {volume.books.map((book) => {
          return (
            <li key={book.ordinal}>
              {book.ordinal}: {book.title}
            </li>
          );
        })}
      </ul>
      <Image
        src={volume.cover}
        width={574}
        height={931}
        alt={`Cover of ${volume.title}`}
      />
    </Card>
  );
}

const Card = styled.section`
  color: ${volume.color};
  padding: 20px;
  border-radius: 14px;
`;
