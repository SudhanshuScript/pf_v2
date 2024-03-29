import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        src={"/avatar-bw.png"}
        width={587}
        style={{ borderRadius: "30px" }}
        height={478}
        alt=""
      />
    </div>
  );
};

export default Avatar;
