"use client";

import { title } from "@/components/primitives";
import { Button } from "@heroui/button";
import { Image } from "@heroui/image";
import { addToast } from "@heroui/toast";

export default function A5Page() {
  const reason1Toast = () => {
    addToast({
      title: "Reason #1!",
      description:
        "Magneto has some unhealed stuff going on, and projects that outward into the world.",
      color: "danger",
    });}

  const reason2Toast = () => {
    addToast({
      title: "Reason #2!",
      description:
        "#",
      color: "danger",
    });}
  const reason3Toast = () => {
      addToast({
        title: "Reason #3!",
        description:
          "#",
        color: "danger",
      });}
  return (
    <div>
      <h1 className={title()}>A5: Defend the Fictional Villain</h1>
      <Image
        alt="mageneto with full helmet"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBiqkw60kMyoFpWxEpTJQCRTT7M-oyRWHpyw&s"
        width={100}
      ></Image>
      <p>Example #1 why Magneto is misunderstood...</p>
      <Image 
        alt="live action magneto"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSwZQjErfa4nI4zHKvpmFNdmrIkInBSiMIUQ&s"
        width={100}
      />
      <div className="flex flex-wrap gap-3">
      <Button
        onClick={() => {reason1Toast()}}
      >Reason #1</Button>
      <Button color="secondary"
      onClick={() => {reason2Toast()}}>Reason #2</Button>
      <Button
      onClick={() => {reason3Toast()}}>Reason #3</Button>
    </div>
      <Image 
        alt="cool wide magneto"
        src="https://static0.cbrimages.com/wordpress/wp-content/uploads/2024/09/is-magneto-really-evil.jpg?w=1200&h=675&fit=crophttps://static0.cbrimages.com/wordpress/wp-content/uploads/2024/09/is-magneto-really-evil.jpg?w=1200&h=675&fit=crop"
        width={100}
      />
      {/* image #2 */}
    </div>
  );
}
