import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import francisImage from "@/assets/francis-img.jpg";

export default function Hero() {
  return (
    <div className="grid w-full grid-cols-1 items-center justify-center py-32 lg:grid-cols-2">
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

      <div className="hidden lg:block"></div>
    </div>
  );
}
