// import Swiper styles
import 'swiper/css';
import SliderDirectorio from '../../components/Swiper/nuestro-directorio/SliderDirectorio';
import HomeVideo from '../../components/homevideo/HomeVideo';

const Home = () => {
  return (
    <>    
    
    <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
    <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl dark:text-white">Directorio</h2>
    <h3 className="text-2xl text-gray-900">Integrantes Directorio</h3>
      <SliderDirectorio></SliderDirectorio>
    </div>
    <HomeVideo/>
    </>

  )
}

export default Home
