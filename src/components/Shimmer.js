// const Shimmer = () => {
//   return (
//     <div className="shimmer-container">
//       {/* Create 10 fake cards to show loading state */}
//       {Array(10)
//         .fill("")
//         .map((e, index) => (
//           <div key={index} className="shimmer-card">
//             <div className="shimmer-img stroke animate"></div>
//             <div className="shimmer-title stroke animate"></div>
//             <div className="shimmer-tags stroke animate"></div>
//             <div className="shimmer-details stroke animate"></div>
//           </div>
//         ))}
//     </div>
//   );
// };
// export default Shimmer;
const Shimmer = () => {
  return (
    <div
      className="
        shimmer-container 
        grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] 
        gap-8 
        max-w-[1200px] 
        mx-auto 
        py-8 px-4 
        justify-items-center
      "
    >
      {Array(10)
        .fill("")
        .map((e, index) => (
          <div
            key={index}
            className="
              shimmer-card 
              w-full max-w-[250px] h-[300px] 
              p-4 
              bg-white 
              border border-gray-100 
              rounded-lg
            "
          >
            {/* Shimmer Image Area - Matches height 160px */}
            <div className="h-[160px] w-full bg-gray-200 rounded-lg mb-4 animate-pulse"></div>

            {/* Shimmer Title - Matches width 60%, height 20px */}
            <div className="h-5 w-[60%] bg-gray-200 rounded mb-3 animate-pulse"></div>

            {/* Shimmer Tags - Matches width 80%, height 15px */}
            <div className="h-4 w-[80%] bg-gray-200 rounded mb-5 animate-pulse"></div>

            {/* Shimmer Details - Matches width 100%, height 15px */}
            <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
