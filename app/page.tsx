
import SetUserId from "./components/SetUserId";

export default async function Home() {

  return (
    <>
      <SetUserId />
      <div className="flex flex-row items-center">
        <div className="basis-1/2">
          <img src="/EsquiloLogo.png" alt="Esquilo Logo" title="Esquilo Logo" />
        </div>
        <div className="basis-1/2">
          <h1 className="text-8xl font-bold">PROGRAM</h1>
          <h1 className="text-8xl font-bold">WITH</h1>
          <h1 className="text-8xl font-bold text-green-500">STYLE.</h1>
          <div className="mt-5"><a className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full mt-10" href="/products">Browse our products</a></div>
        </div>
      </div >
    </>
  );
}
