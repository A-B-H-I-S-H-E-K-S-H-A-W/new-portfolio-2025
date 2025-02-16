import Button from "@/components/ui/Button";
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

export function DialogBox({ title }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <p>
          <Button className={"mt-3"} title={title} />
        </p>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Contact Me</DialogTitle>
          <DialogDescription>
            Email me to contact or collaborate.
          </DialogDescription>
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
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose>
            <p>
              <Button className={"mt-3"} title={"Sent"} />
            </p>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
