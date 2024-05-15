import local from "./local.module.css";
export default function ProductsShowcase({ subTitle, products }) {
  return (
    <>
      <section className="py-14">
        <div className="max-w-screen-xl mx-auto px-4 text-center md:px-8">
          <div className="max-w-xl mx-auto">
            <h3 className="display-5 mb-2 fw-medium">{subTitle}</h3>
          </div>
          <div className="mt-12 flex flex-wrap justify-center">
            {products.map((item, idx) => (
              <div
                key={idx}
                className={`flex flex-col items-center w-72 mx-4 mb-8 border-3 border-gray-700 rounded-md p-4 bg-gray-700 ${local["hover-big"]}`}
              >
                <div className="w-full h-full">
                  <img
                    src={item.src}
                    className="w-full h-full rounded-md object-cover border-3 border-white"
                    alt=""
                  />
                </div>
                <div className="mt-2">
                  <h4 className="text-white sm:text-lg font-extrabold ">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
