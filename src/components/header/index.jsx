import Image from "next/image";

export default function Header() {
  return (
    <>
      <div>
        <Image src="/1829.jpg" width={1920} height={1080} alt="Rixxer" />
        {/* <p className="companyName text-center p-20 bg-gray-300">RIXXER</p> */}
      </div>
    </>
  );
}
