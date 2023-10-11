import Tag from './components/Tag';
import Random from './components/Random';
import './App.css';

function App() {
  return (
    <div className='w-full  flex flex-col bg-slate-600 relative '>
      <h1 className='bg-white flex rounded-md  w-11/12 m-auto text-center mt-[40px]  justify-center items-center text-3xl font-bold'>Random GIFs</h1>
      <div className='flex flex-col'>
        <Random/>
        <Tag/>
      </div>


    </div>
  );
}

export default App;
