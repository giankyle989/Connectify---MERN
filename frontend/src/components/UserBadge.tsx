import pic from '../assets/react.svg'

const UserBadge = () => {
  return (
    <div className="flex m-2 gap-2 items-center">
      <img className="rounded-full" src={pic} alt="image" />
      <p className='font-semibold'>Kyle Laguerta</p>
    </div>
  );
};
export default UserBadge;
