import Image from "next/image";

const Heading = ({ text }) => {
  return (
    <div className="flex items-center pb-2">
      <Image
        src="/assets/random/headingIcon.png"
        width={20}
        height={20}
        className="mr-3"
        alt="Heading icon"
      />
      <p className="text-center !text-base !text-dark-200">{text}</p>
    </div>
  );
};

export default Heading;
