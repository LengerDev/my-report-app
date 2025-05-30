import UserForm from "./user-form";

interface UserViewPageProps {
  userId: string;
}

export default function UserViewPage({ userId }: UserViewPageProps) {
  return (
    <div>
      <p className="text-center">{userId}</p>
      <UserForm />
    </div>
  );
}
