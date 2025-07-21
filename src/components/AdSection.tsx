import { styles } from "../styles/styles";
import headerBanner from "../assets/image/image 260.png";
import img1 from "../assets/image/image 259.png";
import img2 from "../assets/image/image 261.png";

const AdSection = () => {
  return (
    <div
      className={`${styles.container} mt-[56px] grid gap-[20px] lg:grid-cols-[952px_1fr] grid-cols-1`}
    >
      <div className="w-full">
        <img
          className="rounded-[8px] max-w-[100%] object-cover "
          src={headerBanner}
          alt=""
        />
      </div>

      <div className="grid gap-[20px] grid-cols-2 lg:grid-cols-1 lg:grid-rows-2">
        <img
          className="rounded-[8px] w-full h-full object-cover"
          src={img1}
          alt=""
        />
        <img
          className="rounded-[8px] w-full h-full object-cover"
          src={img2}
          alt=""
        />
      </div>
    </div>
  );
};

export default AdSection;
