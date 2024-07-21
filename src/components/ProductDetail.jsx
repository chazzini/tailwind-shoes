import nike1 from "../assets/n1-min.png";
const ProductDetail = () => {
  return (
    <div className="flex flex-col lg:flex-row-reverse space-y-4">
      <div className="flex-1 lg:-mt-20 lg:ml-16">
        {/* Shoe image */}
        <div className="h-full flex-center bg-gradient-to-br from-[#f637cf] from-5% via-[#e3d876] via-40% to-[#4dd4c6]">
          <img src={nike1} />
        </div>
      </div>
      <div className="flex-1 space-y-6">
        <h1 className="text-5xl font-black md:text-8xl">Nike Air Max 270</h1>
        <p className="font-medium md:text-xl">
          The Nike Air Maz 270 is a lifestyle shoe that's sure to turn head with
          its vibrant color gradient.
        </p>
        <div className="text-3xl font-extrabold md:text-6xl">100 $</div>
        <div className="space-x-10">
          <button className="h-14 w-44 bg-black text-white hover:bg-gray-900">
            Add to bag
          </button>
          <a
            href="#"
            className="text-lg font-bold underline underline-offset-4"
          >
            View details
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
