export const Loading = () => {
  return (
    <div className="flex items-center justify-center w-full h-full min-h-[50vh]">
      <style jsx>
        {`
          .loader {
            perspective: 800px;
          }

          .loader-cube {
            transform-style: preserve-3d;
            transform-origin: 50% 50%;
            animation: rotate 4s infinite linear;
          }

          .loader-cube:before {
            transform: rotateX(90deg) translateZ(50px);
          }

          .loader-cube:after {
            transform: rotateY(90deg) translateZ(50px);
          }

          .loader-cube .face {
            background-color: rgb(252, 248, 248);
            border: 2px solid rgb(252, 250, 250);
          }

          .loader-cube .face:nth-child(1) {
            transform: rotateY(0deg) translateZ(50px);
            background-color: #e74c3c;
          }

          .loader-cube .face:nth-child(2) {
            transform: rotateX(90deg) translateZ(50px);
            background-color: #3498db;
          }

          .loader-cube .face:nth-child(3) {
            transform: rotateY(180deg) translateZ(50px);
            background-color: #2ecc71;
          }

          .loader-cube .face:nth-child(4) {
            transform: rotateX(-90deg) translateZ(50px);
            background-color: #f1c40f;
          }

          .loader-cube .face:nth-child(5) {
            transform: rotateY(90deg) translateZ(50px);
            background-color: #9b59b6;
          }

          .loader-cube .face:nth-child(6) {
            transform: rotateY(0deg) translateZ(-50px);
            background-color: #1abc9c;
          }

          @keyframes rotate {
            0% {
              transform: rotateY(0deg) rotateX(0deg);
            }

            100% {
              transform: rotateY(1turn) rotateX(1turn);
            }
          }
        `}
      </style>

      <div className="loader absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
        <div
          className="loader-cube relative w-[100px] h-[100px] before:content-[''] before:absolute before:w-full before:h-full before:bg-transparent
          after:content-[''] after:absolute after:w-full after:h-full after:bg-transparent"
        >
          <div className="absolute w-full h-full face opacity-80"></div>
          <div className="absolute w-full h-full face opacity-80"></div>
          <div className="absolute w-full h-full face opacity-80"></div>
          <div className="absolute w-full h-full face opacity-80"></div>
          <div className="absolute w-full h-full face opacity-80"></div>
          <div className="absolute w-full h-full face opacity-80"></div>
        </div>
      </div>
    </div>
  );
};
