export const Avatar = ({ username }) => {
  return (
    <div className="w-10 h-10 bg-indigo-600 font-semibold text-white rounded-full flex justify-center items-center">
      {username.charAt(0)}
    </div>
  );
};
