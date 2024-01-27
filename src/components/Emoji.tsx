import React from "react";
import love from "../assets/3-2-love-hearts-eyes-emoji-png-thumb.png";
import smile from "../assets/4-2-smiling-face-with-sunglasses-cool-emoji-png-thumb.png";
import face from "../assets/5-2-face-with-tears-of-joy-emoji-png-thumb.png";
import { Image, ImageProps } from "@chakra-ui/react";
interface Props {
  rating: number;
}
const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: love, alt: "love", boxSize: "25px" },
    4: { src: smile, alt: "smile", boxSize: "35px" },
    5: { src: face, alt: "face", boxSize: "25px" },
  };
  return <Image {...emojiMap[rating]} />;
};

export default Emoji;
