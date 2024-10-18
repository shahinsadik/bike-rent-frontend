import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-[#262626] font-[oswald]">
      <hr />
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2">
          <div className="border-b border-orange-500 py-8 lg:order-last lg:border-b-0 lg:border-s lg:py-10 lg:ps-16">
            <div className="block text-teal-600 lg:hidden">
              <h1 className="text-3xl font-bold text-orange-500">
                Bike Rental
              </h1>
            </div>

            <div className="mt-8 space-y-4 lg:mt-0">
              <span className="hidden h-1 w-10 rounded bg-orange-500 lg:block"></span>

              <div>
                <h2 className="text-2xl font-medium text-gray-300">
                  Request a Bike
                </h2>

                <p className="mt-4 max-w-lg text-white">
                  We are always there for providing you the best sports
                  accessories.If you have any query about any of our products
                  just mail us right way from below.
                </p>
              </div>

              <form className="mt-6 w-full">
                <label htmlFor="UserEmail" className="sr-only">
                  {" "}
                  Email{" "}
                </label>

                <div className="rounded-md border border-gray-100 p-2 focus-within:ring sm:flex sm:items-center sm:gap-4 mb-3">
                  <input
                    type="email"
                    id="UserEmail"
                    placeholder="admin@admin.com"
                    className="w-full border border-lime-500 focus:border-transparent focus:ring-transparent sm:text-sm p-2"
                  />

                  <Button variant={"orangeBtn"}>Send</Button>
                </div>
              </form>
            </div>
          </div>

          <div className="py-5 lg:py-8 lg:pe-16">
            <div className="hidden text-teal-600 lg:block">
              <h1 className="text-3xl font-extrabold text-orange-400">
                Bike Rental
              </h1>
            </div>

            <div className="text-white mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
              <div>
                <p className="font-medium ">Services</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a href="#" className=" transition hover:opacity-75">
                      {" "}
                      1on1 Coaching{" "}
                    </a>
                  </li>

                  <li>
                    <a href="#" className=" transition hover:opacity-75">
                      {" "}
                      Company Review{" "}
                    </a>
                  </li>

                  <li>
                    <a href="#" className=" transition hover:opacity-75">
                      {" "}
                      Accounts Review{" "}
                    </a>
                  </li>
                </ul>
              </div>

              <div className="text-white">
                <p className="font-medium ">Company</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a href="#" className=" transition hover:opacity-75">
                      {" "}
                      About{" "}
                    </a>
                  </li>

                  <li>
                    <a href="#" className=" transition hover:opacity-75">
                      {" "}
                      Meet the Team{" "}
                    </a>
                  </li>

                  <li>
                    <a href="#" className=" transition hover:opacity-75">
                      {" "}
                      Accounts Review{" "}
                    </a>
                  </li>
                </ul>
              </div>

              <div className="text-white">
                <p className="font-medium ">Helpful Links</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a href="#" className=" transition hover:opacity-75">
                      {" "}
                      Contact{" "}
                    </a>
                  </li>

                  <li>
                    <a href="#" className=" transition hover:opacity-75">
                      {" "}
                      FAQs{" "}
                    </a>
                  </li>

                  <li>
                    <a href="#" className=" transition hover:opacity-75">
                      {" "}
                      Live Chat{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3 pb-5    pt-3">
        <div>
          <ul className="flex  text-white flex-wrap justify-center gap-4 text-xs">
            <li>
              <a href="#" className="text-white transition hover:opacity-75">
                {" "}
                Terms & Conditions{" "}
              </a>
            </li>

            <li>
              <a href="#" className="text-white transition hover:opacity-75">
                {" "}
                Privacy Policy{" "}
              </a>
            </li>

            <li>
              <a href="#" text-white className=" transition hover:opacity-75">
                {" "}
                Cookies{" "}
              </a>
            </li>
          </ul>

          <p className=" text-xs flex justify-center text-gray-400">
            &copy; 2024 - All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
