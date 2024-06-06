import Image from "next/image";

interface BannerProps {
  src: string;
  alt: string;
  className: string;
}

const Banner = ({ src, alt, className }: BannerProps) => {
  return (
    <>
      <Image
        src={src}
        alt={alt}
        width={0}
        height={0}
        sizes="100vw"
        className={className}
      />
    </>
  );
};

export default Banner;
