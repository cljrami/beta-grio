//FANCYBOX
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
Fancybox.bind('[data-fancybox="gallery"]', {
  //
});
const HomeVideo = () => {
  return (
    <div>


<section className="bg-white dark:bg-gray-900">
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="flex flex-col justify-center">
            <p className="mb-8 text-lg font-normal text-gray-400 lg:text-xl dark:text-gray-400"></p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0">
                <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                    Get started
                    <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
                
            </div>
            dsakjdhasjdh
        </div>
        
        
        
    </div>
    <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold dark:text-white text-center">Nuestro Equipo En Acción</h2>

    <p className="mb-3 text-gray-500 dark:text-gray-400 p-10">Track work across the enterprise through an open, collaborative platform. <a href="#" className="font-medium text-blue-600 underline dark:text-blue-500 dark:hover:text-blue-600 hover:text-blue-700 hover:no-underline">Link issues across Jira</a> and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>

    <a data-fancybox="gallery" href="../assets/videos/dron-en-accion.mp4">
    <video className="w-full h-auto max-w-full" controls>
  <source src="./assets/videos/dron-en-accion.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
</a>
    </div>
    
</section>

    </div>
  )
}

export default HomeVideo
