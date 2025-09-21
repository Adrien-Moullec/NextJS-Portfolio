import { toast } from "sonner";

export default function CopyText(text: string) {
    navigator.clipboard.writeText(text)
    .then(() => toast(`${text} copied successfully`))
    .catch(() => toast("Copy unsuccessful"));
}