import { useEffect, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function DialogBox({
  title,
  DialogName,
  DialogDetails,
  className,
  contact,
}) {
  const [email, setEmail] = useState("");
  const [resumeMessage, setResumeMessage] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    setResumeMessage(contact);
  }, [contact]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userEmail: email, resume: resumeMessage }),
      });

      const text = await response.text();
      console.log("Server response:", text);

      if (response.ok) {
        const result = JSON.parse(text);
        setMessage(result.message);
      } else {
        setMessage("Error: " + text);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Failed to send email.");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          className={`relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] ${className}`}
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-black-100 px-3 py-1 text-sm font-bold text-white backdrop-blur-3xl">
            {title}
          </span>
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{DialogName}</DialogTitle>
          <DialogDescription>{DialogDetails}</DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-3">
          <div className="grid grid-cols-7 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input
              autoComplete="off"
              id="email"
              placeholder="user@example.com"
              className="col-span-7"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="hidden"
              id="resumeMessage"
              className="col-span-7"
              value={resumeMessage}
              onChange={(e) => setResumeMessage(e.target.value)}
            />
          </div>
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <button
              onClick={handleSubmit}
              className={`relative inline-flex h-12 overflow-hidden rounded-lg p-[1px]`}
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-black-100 px-3 py-1 text-sm font-bold text-white backdrop-blur-3xl">
                {title}
              </span>
            </button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
