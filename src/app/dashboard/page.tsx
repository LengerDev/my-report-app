import { redirect } from "next/navigation";

export default async function Dashboard() {
  const isLoggedIn = true;

  if (!isLoggedIn) {
    return redirect("/login");
  } else {
    redirect("/dashboard/overview");
  }
}
