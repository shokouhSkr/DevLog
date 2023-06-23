import { CommentsIcon, ContactIcon, DashboardIcon, PostsIcon, UsersIcon } from "@/components/icons";

export const navLinks = [
  { icon: DashboardIcon, title: "Dashboard", path: "/admin" },
  { icon: PostsIcon, title: "Posts", path: "/admin/posts" },
  { icon: UsersIcon, title: "Users", path: "/admin/users" },
  { icon: CommentsIcon, title: "Comments", path: "/admin/comments" },
  { icon: ContactIcon, title: "Contact", path: "/admin/contact" },
];
