import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen">
      <div className="absolute inset-0  h-5/6">
           <Image
               className=""
               src="/PasteleriaA1.jpg"
               layout="fill"
               objectFit="cover"
               quality={100}
               alt="Picture of the author"
           />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className=" z-10 flex flex-col justify-center items-center h-full text-center">
        <div className="absolute  bottom-80 left-1/4 transform -translate-x-20 -translate-y-50 w-max  text-center text-white p-2">
            <h1 className="text-5xl font-bold leading-tight mb-4">Welcome to Our Awesome Website</h1>
            <p className="text-lg text-gray-300 mb-8">Discover amazing features and services that await you.</p>
        </div>
      <a href="#" className="absolute bottom-60 right-32 bg-button text-white hover:bg-button-hover py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">Saber mas</a>

      </div>
    </main>
  );
}
