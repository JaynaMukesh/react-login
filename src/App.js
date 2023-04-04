import './App.css';

function App() {
  return (
    <div className="bg-blue-500 h-screen">
      <div className='flex items-center justify-center py-16'>
        <div className='bg-white px-6 py-12 rounded-lg'>
          <h1 className='text-3xl font-bold text-gray-500 text-center'>Login</h1>
          <div>
            <form className='flex flex-col gap-4'>
              <input type='text' placeholder='Username or Email' className='bg-gray-200 mt-6 text-center px-8 md:px-16 lg:px-24 py-2 rounded-lg' />
              <input type='password' placeholder='Password' className='bg-gray-200 text-center px-8 md:px-16 lg:px-24 py-2 rounded-lg' />
              <button type='submit' className='bg-blue-500 text-white py-3 hover:bg-blue-600 active:bg-blue-500 rounded-lg'>Login</button>
              <a href='#' className='text-center text-gray-500 underline underline-offset-2 hover:no-underline'>Lost your password?</a>
            </form>
          </div>
        </div>
      </div>


    </div>
  );
}

export default App;
