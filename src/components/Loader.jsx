import { loader } from '../assets';

const Loader = ({ title }) => (
  <div className='flex flex-col w-full justify-center items-center'>
    <img src={loader} alt="loader" className='w-32 h-32 object-contain' />
    <h1 className='font-bold text-white t-2 text-2xl'>{title || "Loading...."}</h1>
  </div>
);

export default Loader;
