import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Components/Card";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);

  const getData = async () => {
    const url = `https://picsum.photos/v2/list?page=${index}&limit=9`;
    const response = await axios.get(url);
    setUserData(response.data);
  };

  useEffect(() => {
    getData();
  },[index]);

  return (
    <div className="bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-green-900 text-center pt-7 underline">
        Gallery App
      </h1>

      <div className="flex flex-wrap gap-4 justify-center p-4 mt-10">
        {userData.length === 0 ? (
          <p className="text-gray-400 text-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
            Loading...
          </p>
        ) : (
          userData.map((user) => (
            <div
              key={user.id}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col 
              w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
            >
              <Card user={user} />

              <div className="p-3 w-full text-center">
                <h2 className="text-lg font-semibold text-gray-800 truncate">
                  {user.author}
                </h2>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="flex justify-center gap-4 mt-6 pb-12">
        <button
          disabled={index === 1}
          style={{
            opacity: index === 1 ? 0.5 : 1,
            cursor: index === 1 ? "not-allowed" : "pointer",
          }}
          className={`bg-green-600 text-white px-5 py-2 rounded-md shadow-sm 
          ${index==1?"": "active:scale-95 cursor-pointer"}`}
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1);
              setUserData([]);
            }
          }}
        >
          Prev
        </button>

        <span className="text-2xl px-2 py-2 font-semibold">Page {index}</span>
        <button
          className="bg-green-600 text-white px-5 py-2 rounded-md shadow-sm active:scale-95 hover:bg-green-700 cursor-pointer"
          onClick={() => {
            setIndex(index + 1);
            setUserData([]);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
