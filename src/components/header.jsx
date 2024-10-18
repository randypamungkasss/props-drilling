import { User } from "./user";

export const Header = () => {
  return (
    <div className="flex justify-between items-center bg-indigo-200 p-8">
      <div>Logo</div>
      <User />
    </div>
  );
};
