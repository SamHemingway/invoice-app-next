import VisuallyHidden from "../primitives/VisuallyHidden/MyAttempt/VisuallyHidden";
import Image from "next/image";
import profilePic from "@/assets/images/image-avatar.jpg";
import { wrapper, avatar } from "./AvatarHeader.css";

function AvatarHeader() {
  return (
    <button className={wrapper}>
      <Image
        src={profilePic}
        alt=""
        className={avatar}
      />
      <VisuallyHidden>Logged in as Sam</VisuallyHidden>
    </button>
  );
}

export default AvatarHeader;
