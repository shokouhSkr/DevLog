import Link from "next/link";
import { CreatePostIcon } from "@/components/icons";

const CreatePostButton = () => {
  return (
    <Link
      href="/admin/post/create"
      className="fixed bottom-10 right-10 z-10 grid h-10 w-10 place-content-center rounded-full bg-secondary shadow transition-all duration-300 hover:scale-[0.95]"
    >
      <CreatePostIcon className="h-6 w-6" />
    </Link>
  );
};

export default CreatePostButton;
