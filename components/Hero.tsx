import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import francisImage from "@/assets/francis-img.jpg";

export default function Hero() {
  return (
    <div className="grid w-full grid-cols-1 items-center justify-center py-20 lg:grid-cols-2 gap-y-4">
      <div className="flex flex-col items-center lg:items-start gap-4">
        <Avatar className="h-32 w-32 lg:h-64 lg:w-64">
          <AvatarImage
            src={francisImage.src}
            alt="Francis"
            className="object-cover"
          />
          <AvatarFallback>FS</AvatarFallback>
        </Avatar>

        <h1 className="text-4xl font-black tracking-tight lg:text-6xl">
          Francis Santander
        </h1>
        <p className="text-muted-foreground text-lg text-center">
          A Software Engineer who has developed countless innovative solutions.
        </p>
      </div>

      <div className="space-y-3">
        <div className="uppercase font-black text-center text-5xl space-y-3">
          <h1>Full-Stack</h1>
          <h1>Software Engineer</h1>
          <h1>& UI/UX Designer</h1>
        </div>
        <p className="text-center text-neutral-500">
          I specialize in building high quality application that applies good
          practices, principles, architecture and user-friendly web applications
          that deliver outstanding end user.
        </p>
      </div>
    </div>
  );
}
